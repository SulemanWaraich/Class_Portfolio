import React, { useEffect, useState } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { FaRegStar } from "react-icons/fa6"
import { IoMdArrowDropdown } from "react-icons/io"

interface StarData {
  stargazers_count: number
  name: string
  full_name: string
}

const StarButton = () => {
  const [stars, setStars] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/apo-bozdag/abdullahbozdag.com`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        )

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data: StarData = await response.json()
        setStars(data.stargazers_count)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch")
      } finally {
        setLoading(false)
      }
    }
    fetchStars()
  }, [])

  return (
    <a
      className="  px-3 border border-zinc-700 hidden md:flex items-center gap-2 rounded-[8px] bg-zinc-900 hover:bg-zinc-900/60 transition-all duration-200"
      target="_blank"
      href="https://github.com/apo-bozdag/abdullahbozdag.com"
    >
      <FaRegStar className="size-[16px]" />
      <span className="text-sm">{"Star"}</span>
      <span className="bg-zinc-800 rounded-xl px-1.5 py-0.5 text-xs font-medium">
        {error ? (
          "16"
        ) : loading ? (
          <AiOutlineLoading3Quarters className="animate-spin size-[16px] p-0.5" />
        ) : (
          stars
        )}
      </span>

      <div className="w-px h-[28px] bg-zinc-700" />

      <IoMdArrowDropdown className="size-[16px]" />
    </a>
  )
}

export default StarButton
