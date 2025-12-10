"use client"
import { abdullahTRContact, abdullahTRContactLink } from "@/data/AbdullahTRData/data"
import SectionTitle from "../SectionTitle"
import { useSwitch } from "../Context/SwitchContext"
import { abdullahContact, abdullahContactLink } from "@/data/AbdullahData/data"

const ReachOut = () => {
  const { isSwitchOn } = useSwitch()
  const contactLink = isSwitchOn ? abdullahTRContactLink : abdullahContactLink

  return (
    <section className="flex flex-col gap-0.5">
      <SectionTitle title="Reach out to me" />
      <div className=" flex flex-col gap-2.5">
        <p>{isSwitchOn ? abdullahTRContact : abdullahContact}</p>
        <div>
          <div className=" flex flex-wrap items-center gap-2">
            {contactLink.map((link) => (
              <a className="btn" key={link.id} target="_blank" href={link.link}>
                <link.icon />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReachOut
