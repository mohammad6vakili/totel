"use client";
import styles from "./header.module.css";
import Logo from "@/assets/images/logo";
import ArrowBottom from "@/assets/icons/arrow_bottom";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Popover } from "antd";

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
      <Link href={"/"} className={styles.header_logo_section}>
        <Logo />
      </Link>
      <ul className={styles.header_links}>
        <li className={pathname === "/" ? styles.header_link_active : ""}>
          <Link href={"/"}>Rooms</Link>
        </li>
        <li>
          <Link href={"/"}>Looking for Roommate</Link>
        </li>
        <li>
          <Popover content={companyPopoverContent} title={null}>
            <Link href={"/"}>
              Company <ArrowBottom style={{ marginLeft: 5 }} />
            </Link>
          </Popover>
        </li>
        <li>
          <Link href={"/"}>Help</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
