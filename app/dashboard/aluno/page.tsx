import Link from "next/link";
import React from "react";

export default function Page() {
    return (
        <nav>
            <ul>
                <li><Link href="/dashboard/aluno/aula">Aula</Link></li>
                <li><Link href="/dashboard/aluno/material">Material</Link></li>
                <li><Link href="/dashboard/aluno/matricula">Matricula</Link></li>
            </ul>
        </nav>
    )
}