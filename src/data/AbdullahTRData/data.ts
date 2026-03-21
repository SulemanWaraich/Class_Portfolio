import { FaLinkedinIn, FaXTwitter, FaGithub } from "react-icons/fa6"
import { MdOutlineMail } from "react-icons/md"

const sulemanTRImage = "/assets/Images/pfps/suleman.png"
const sulemanTRName = "suleman Bozdağ"
const sulemanTRShortName = "suleman"
const sulemanTRBio = "Yazılım Geliştirici"
const sulemanTRAbout = `
  <p>
    Hello i am Muhammad Suleman, 8+ yıllık backend ve full-stack deneyime sahip bir yazılım geliştiriciyim. Gerçek dünya problemlerini çözen ölçeklenebilir uygulamalar geliştirmeyi seviyorum.
  </p>
  <p>
    Backend geliştirme için ağırlıklı olarak PHP, Python ve Node.js kullanıyorum. AWS altyapı yönetiminde kapsamlı deneyimim var. Frontend tarafında React ve Vue.js ile çalışıyorum, ayrıca Flutter ile mobil uygulamalar geliştiriyorum.
  </p>
  <p>
    Şu anda Tripian Inc.'de uzaktan çalışıyorum ve RadKod'da açık kaynak projeleri ve freelance işler üzerinde çalışıyorum. Sürekli öğrenmeye ve insanların gerçekten kullandığı ürünler geliştirmeye tutkuluyum.
  </p>
`

const sulemanTRLink = [
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

const sulemanTRContact =
  "Sorularınız, iş birliği fırsatları veya sadece merhaba demek için bana e-posta ile ulaşabilirsiniz!"
const sulemanTRContactLink = [
  {
    id: 1,
    name: "X",
    link: "https://x.com/Suleman_devx",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "E-posta",
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

const sulemanTRFooterLink = [
  {
    id: 1,
    name: "X",
    link: "https://x.com/Suleman_devx",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "E-posta",
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
  sulemanTRImage,
  sulemanTRBio,
  sulemanTRContact,
  sulemanTRContactLink,
  sulemanTRName,
  sulemanTRShortName,
  sulemanTRAbout,
  sulemanTRLink,
  sulemanTRFooterLink,
}
