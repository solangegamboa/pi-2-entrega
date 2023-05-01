'use client'
import Link from "next/link";
import React from "react";
import Formulario from "./components/Formularios/Formulario";
import { Container } from "react-bootstrap";
import NavGeral from "./components/Nav";

export default function Page() {
    return (
        <Container>
            <Formulario tipo={"login"} />
        </Container>
    )
}