import { FaLinkedinIn, FaXTwitter, FaGithub } from "react-icons/fa6"
import { MdOutlineMail } from "react-icons/md"

const sulemanImage = "/assets/Images/pfps/suleman.jpg"
const sulemanName = "Muhammad Suleman"
const sulemanShortName = "Suleman"
const sulemanBio = "Software Developer"
const sulemanAbout = `
  <p>
    Hey! I'm Muhammad Suleman, a software developer with 8+ years of backend and full-stack experience. I love building scalable applications that solve real-world problems.
  </p>
  <p>
    I primarily work with PHP, Python, and Node.js for backend development, and have extensive experience with AWS infrastructure management. On the frontend, I work with React and Vue.js, and I also develop mobile applications with Flutter.
  </p>
  <p>
    I'm currently working remotely at Tripian Inc. and also run RadKod, where I work on open-source projects and freelance work. I'm passionate about continuous learning and building products that people actually use.
  </p>
`

const sulemanLink = [
  {
    id: 1,
    name: "X",
    link: "https://x.com/Suleman_devx",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/SulemanWaraich",
    icon: FaGithub,
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-suleman-9aa056292/",
    icon: FaLinkedinIn,
  },
]

const sulemanContact =
  "Feel free to reach out to me via email for any inquiries, collaboration opportunities, or just to say hi!"
const sulemanContactLink = [
  {
    id: 1,
    name: "X",
    link: "https://x.com/Suleman_devx",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Email",
    link: "mailto:suleman.devx@gmail.com",
    icon: MdOutlineMail,
  },
  {
    id: 3,
    name: "Github",
    link: "https://github.com/SulemanWaraich",
    icon: FaGithub,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-suleman-9aa056292/",
    icon: FaLinkedinIn,
  },
]

const sulemanFooterLink = [
  {
    id: 1,
    name: "X",
    link: "https://x.com/Suleman_devx",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Mail",
    link: "mailto:suleman.devx@gmail.com",
    icon: MdOutlineMail,
  },
  {
    id: 3,
    name: "Github",
    link: "https://github.com/SulemanWaraich",
    icon: FaGithub,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-suleman-9aa056292/",
    icon: FaLinkedinIn,
  },
]

export {
  sulemanImage,
  sulemanBio,
  sulemanContact,
  sulemanContactLink,
  sulemanName,
  sulemanShortName,
  sulemanAbout,
  sulemanLink,
  sulemanFooterLink,
}
