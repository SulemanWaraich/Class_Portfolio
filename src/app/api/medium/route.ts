import { NextResponse } from "next/server"
import Parser from "rss-parser"

const parser = new Parser()

export async function GET() {
  try {
    const feed = await parser.parseURL("https://medium.com/feed/@apo-bozdag")

    const posts = feed.items?.slice(0, 6).map((item) => {
      // Extract thumbnail from content
      const thumbnailMatch = item.content?.match(
        /<img[^>]+src="([^">]+)"/
      )
      const thumbnail = thumbnailMatch
        ? thumbnailMatch[1]
        : "/assets/Images/writing/default.webp"

      // Extract clean text from content:encoded
      let description = ""
      if (item["content:encoded"]) {
        // Remove CDATA wrapper
        const content = item["content:encoded"]
          .replace(/<!\[CDATA\[/g, "")
          .replace(/\]\]>/g, "")

        // Extract text from paragraph tags
        const paragraphs = content.match(/<p>(.*?)<\/p>/g)
        if (paragraphs && paragraphs.length > 0) {
          // Get first paragraph, remove HTML tags
          description = paragraphs[0]
            .replace(/<[^>]*>/g, "")
            .replace(/&nbsp;/g, " ")
            .trim()
        }
      }

      // Fallback to contentSnippet if content:encoded is not available
      if (!description && item.contentSnippet) {
        description = item.contentSnippet
      }

      // Limit description length
      if (description.length > 150) {
        description = description.substring(0, 150) + "..."
      }

      return {
        id: item.guid || item.link,
        title: item.title,
        description: description || "Read more on Medium...",
        link: item.link,
        thumbnail: thumbnail,
        pubDate: item.pubDate,
      }
    })

    return NextResponse.json(posts || [])
  } catch (error) {
    console.error("Error fetching Medium posts:", error)
    return NextResponse.json(
      { error: "Failed to fetch Medium posts" },
      { status: 500 }
    )
  }
}
