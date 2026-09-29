import type { Metadata } from "next";
import PortfolioHome from "@/components/Portfolio/PortfolioHome";

export const metadata: Metadata = {
  title: "Jahir Williams | Full-Stack Developer",
  description:
    "Jahir Williams is an entry-level full-stack developer completing certification coursework and building thoughtful web experiences.",
};

export default function Home() {
  return <PortfolioHome />;
}
