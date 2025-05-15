import Navbar from "@/components/navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
       <div>
           <div>
           <Navbar/>
            {children}
           </div>
       </div>
    );
  }