import BecomeExprert from "@/components/landing/BecomeExprert";
import Benefits from "@/components/landing/Benefits";
import Hero from "@/components/landing/Hero";
import PostProject from "@/components/landing/PostProject";
import Service from "@/components/landing/Service";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <PostProject />
      <Benefits />
    </main>
  );
}
