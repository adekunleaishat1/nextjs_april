"use client";
import CategorySection from "@/components/categorysection";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import TeamStory from "@/components/teamstory";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  console.log(pathname);
  const showpathname = ["/", "/blog", "/about"].includes(pathname);

  return (
    <div>
      <div>
        <Navbar />
        {children}
        {pathname == "/blog" && <CategorySection />}
        {showpathname && <TeamStory />}
        <Footer />
      </div>
    </div>
  );
}
