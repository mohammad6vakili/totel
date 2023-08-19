"use client";
// next imports
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./header.module.css";
// assets imports
import Logo from "@/assets/images/logo";
import ArrowBottom from "@/assets/icons/arrow_bottom";
import Avatar from "@/assets/images/Avatar.png";
// antd imports
import { Button, Popover } from "antd";
import HamburgerMenu from "@/assets/icons/hamburger_menu";

const Header = () => {
  const pathname = usePathname();
  const companyPopoverContent = (
    <ul className={styles.header_companies_dropdown}>
      <li>
        <Link href={"/"}>Company 1</Link>
      </li>
      <li>
        <Link href={"/"}>Company 2</Link>
      </li>
      <li>
        <Link href={"/"}>Company 3</Link>
      </li>
    </ul>
  );
  return (
    <div className={styles.header}>
      {/* logo */}
      <Link href={"/"} className={styles.header_logo_section}>
        <Logo />
      </Link>
      {/* navigation */}
      <ul className={styles.header_links}>
        <li className={pathname === "/" ? styles.header_link_active : ""}>
          <Link href={"/"}>Rooms</Link>
        </li>
        <li>
          <Link href={"/"}>Looking for Roommate</Link>
        </li>
        <li>
          <Popover
            content={companyPopoverContent}
            title={null}
            trigger={"hover"}
          >
            <Link href={"/"}>
              Company <ArrowBottom style={{ marginLeft: 5 }} />
            </Link>
          </Popover>
        </li>
        <li>
          <Link href={"/"}>Help</Link>
        </li>
      </ul>
      <div className={styles.header_user}>
        <Button id="btn_outline_light">Manage Listings</Button>
        <Link href={"/"}>
          <Image src={Avatar} alt="user avatar" />
        </Link>
      </div>
      <button className={styles.hamburger_menu} type="button">
        <HamburgerMenu />
      </button>
    </div>
  );
};
export default Header;
