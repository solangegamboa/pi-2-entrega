'use client'
import React from "react";
import Formulario from "./components/Formularios/Formulario";
import { Container } from "react-bootstrap";

export default function Page() {
    return (
        <Container>
            <Formulario tipo={"login"} />
        </Container>
    )
}