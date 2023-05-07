'use client'
import React from "react";
import { Accordion, Breadcrumb, Container } from "react-bootstrap";
import Lista from "../../../components/Lista/Lista";
import Formulario from "../../../components/Formularios/Formulario";

export default function Page() {
    const aulasCadastradas = {
        headers: ['Turma', 'Data da Aula', 'Anotações', 'Ações'],
        items: [
            { turma: 'Turma 1', dataAula: '20/05/2023 19:30', anotacao: 'Anotações 1' },
            { turma: 'Turma 1', dataAula: '27/05/2023 19:30', anotacao: 'Anotações 2' },
            { turma: 'Turma 1', dataAula: '03/06/2023 19:30', anotacao: 'Anotações 3' },
            { turma: 'Turma 1', dataAula: '10/06/2023 19:30', anotacao: 'Anotações 1' }
        ]
    }
    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item href="/dashboard/professor"> Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <h2 className="title">Aulas</h2>
            <div>
                <h3>Aulas Cadastradas</h3>
                <Lista headers={aulasCadastradas.headers} items={aulasCadastradas.items} tipo="aula"></Lista>
            </div>
            <div>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Cadastrar Aula
                        </Accordion.Header>
                        <Accordion.Body>
                            <Formulario tipo="cadastro_aula"></Formulario>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Container>
    )
}