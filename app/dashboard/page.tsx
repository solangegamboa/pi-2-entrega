'use client'
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

export default function Page() {
    return (
        <Container fluid>
            <nav>
                <ul>
                    <li><Link href="/dashboard/aluno">Aluno</Link></li>
                    <li><Link href="/dashboard/professor">Professor</Link></li>
                    <li><Link href="/dashboard/fornecedor">Fornecedor</Link></li>
                </ul>
            </nav>
        </Container>

    )
}