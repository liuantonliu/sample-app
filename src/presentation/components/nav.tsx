import React from "react";
import Link from 'next/link';

export default function Nav() {
    return(
        <div>
            <Link href="/">
                <a> Index </a>
            </Link>
            <Link href="/about">
                <a> About </a>
            </Link>
            <Link href="/items">
                <a> Items </a>
            </Link>
        </div>
    );
}