import MobileNav from "./MobileNav";
import NavbarNew from "./NavbarNew";
import DesktopNav from "./NavbarNew";
import { useState, useEffect } from "react";
export default function Header(props: any) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 1024);
    }
  }, []);
  if (isMobile) {
    return (
      <MobileNav />
    );
  } else {
    return <NavbarNew />;
  }
}
