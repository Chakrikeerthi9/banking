import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  const loggedIn = {FirstName: "chakri", LastName: "Ryuma"}
  return (
    <main className="flex h-full w-full font-inner">
        <SideBar loggedIn={loggedIn} />

        <div className="flex flex-col w-full h-full">
          <div className="root-layout">
            <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
            <div>
              <MobileNav loggedIn={loggedIn} />
            </div>
          </div>
        {children}
        </div>

    </main>
  );
}
