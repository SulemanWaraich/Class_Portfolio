"use client"
import { sulemanTRAbout } from "@/data/AbdullahTRData/data"
import SectionTitle from "../SectionTitle"
import { useSwitch } from "../Context/SwitchContext"
import { sulemanAbout } from "@/data/AbdullahData/data"

const AboutMe = () => {
  const { isSwitchOn } = useSwitch()

  return (
    <section className="flex flex-col gap-0.5">
      <SectionTitle title="About Me" />
      <div className="flex flex-col gap-2">
        <div
          dangerouslySetInnerHTML={{
            __html: isSwitchOn ? sulemanTRAbout : sulemanAbout,
          }}
          className="flex flex-col gap-1"
        />
      </div>
    </section>
  )
}

export default AboutMe
