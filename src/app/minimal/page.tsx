import MinimalLanding from "@/components/minimal/MinimalLanding"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Abdullah Bozdağ - Developer & Builder",
  description: "I build web applications and solve problems with code.",
}

export default function MinimalPage() {
  return <MinimalLanding />
}
