import Link from "next/link";
import React from "react";

export default function Page() {
    return (
        <section>
            Escolher página
            <ul>
                {/* <li><Link href="/login">Login</Link></li> */}
                <li><Link href="/cadastro">Cadastro</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
            </ul>
        </section>

    )
}