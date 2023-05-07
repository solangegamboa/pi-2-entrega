'use client'
import React, { useState } from "react";
import Formulario from "../../../components/Formularios/Formulario";
import { Accordion, Breadcrumb, Container } from "react-bootstrap";
import Lista from "../../../components/Lista/Lista";

export default function Page() {
    const notasCadastradas = {
        headers: ['Turma', 'Avaliação', 'Aluno', 'Nota', 'Ação'],
        items: [
            { turma: 'Turma 1', avaliacao: 'Avaliação 1', aluno: 'Aluno 1', nota: '7.5' },
            { turma: 'Turma 1', avaliacao: 'Avaliação 1', aluno: 'Aluno 2', nota: '8.0' },
            { turma: 'Turma 1', avaliacao: 'Avaliação 1', aluno: 'Aluno 3', nota: '9.0' },
            { turma: 'Turma 1', avaliacao: 'Avaliação 2', aluno: 'Aluno 1', nota: '7.0' }
        ]
    }
    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item href="/dashboard/professor"> Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <h2 className="title">Notas</h2>
            <div>
                <h3>Notas Cadastradas</h3>
                <Lista headers={notasCadastradas.headers} items={notasCadastradas.items} tipo="notas"></Lista>
            </div>
            <div>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Cadastrar Nota
                        </Accordion.Header>
                        <Accordion.Body>
                            <Formulario tipo="cadastro_nota"></Formulario>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Container>
    );
}