

import Link from "next/link";
import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css"
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

import Navlink from "./Navlink";



export default function Header() {

    return (
        <>
            <MainHeaderBackground></MainHeaderBackground>
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="A Plate with food on it" priority />
                    NextLevel Food
                </Link>
                <Navlink></Navlink>

            </header>

        </>
    )

}