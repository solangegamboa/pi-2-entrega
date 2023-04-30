import Link from "next/link";
import React from "react";

export default function Page() {
    return (
        <nav>
            <ul>
                <li><Link href="/dashboard/professor/aula">Aula</Link></li>
                <li><Link href="/dashboard/professor/nota">Nota</Link></li>
            </ul>
        </nav>
    )
}