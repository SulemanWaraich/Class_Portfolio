"use client"
import React, { useState, useEffect } from "react"
import SectionTitle from "../SectionTitle"
import { MdKeyboardDoubleArrowDown } from "react-icons/md"
import { MdKeyboardDoubleArrowUp } from "react-icons/md"
import WritingsBox from "../WritingsBox"
import AnimatedWrapper from "@/utils/AnimatedWrapper"

interface MediumPost {
  id: string
  title: string
  description: string
  link: string
  thumbnail: string
  pubDate: string
}

const Writings = () => {
  const [writings, setWritings] = useState<MediumPost[]>([])
  const [loading, setLoading] = useState(true)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch("/api/medium")
        const data = await response.json()
        setWritings(data)
      } catch (error) {
        console.error("Failed to fetch Medium posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMediumPosts()
  }, [])

  if (loading) {
    return (
      <section className="flex flex-col gap-3">
        <SectionTitle title="Writings" />
        <div className="flex justify-center items-center py-8">
          <p className="text-gray-500">Loading posts...</p>
        </div>
      </section>
    )
  }

  if (writings.length === 0) {
    return null
  }

  const showAllVis = writings.length > 2
  const visibleWritings = showAll ? writings : writings.slice(0, 2)
  let delayValue = 0

  return (
    <section className="flex flex-col gap-3">
      <SectionTitle title="Writings" />
      <div className="  flex flex-col md:gap-2.5 gap-3.5">
        {visibleWritings.map((writing, index) => (
          <AnimatedWrapper
            key={writing.id}
            delay={index === 0 ? delayValue : (delayValue += 0.075)}
          >
            <WritingsBox
              img={writing.thumbnail}
              head={writing.title}
              des={writing.description}
              link={writing.link}
            />
          </AnimatedWrapper>
        ))}
      </div>
      {showAllVis && (
        <button
          className="  showMore-btn "
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? (
            <div className="flex gap-0.5 justify-center items-center">
              <div className=" animate-pulse">
                <MdKeyboardDoubleArrowUp />
              </div>
              Show less
            </div>
          ) : (
            <div className="flex gap-0.5 justify-center items-center">
              <div className=" animate-pulse">
                <MdKeyboardDoubleArrowDown />
              </div>
              Show all
            </div>
          )}
        </button>
      )}
    </section>
  )
}

export default Writings
