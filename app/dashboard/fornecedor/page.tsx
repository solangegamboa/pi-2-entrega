import Link from "next/link";
import React from "react";

export default function Page() {
    return (
        <nav>
            <ul>
                <li><Link href="/dashboard/fornecedor/material">Material</Link></li>
            </ul>
        </nav>
    )
}