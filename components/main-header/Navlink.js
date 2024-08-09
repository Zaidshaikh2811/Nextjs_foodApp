"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./main-header.module.css"


export default function Navlink() {
    const path = usePathname();
    return <nav className={classes.nav}>
        <ul>
            <li><Link href="/meals" className={path.startsWith("/meals") ? classes.active : null}>Browse Meals</Link></li>
            <li><Link href="/community" className={path === "/community" ? classes.active : null}>Community</Link></li>
        </ul>
    </nav>
}