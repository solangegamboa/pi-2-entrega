'use client'
import React, { useState } from "react";
import Formulario from "../../../components/Formularios/Formulario";
import { Accordion, Alert, Breadcrumb, Container } from "react-bootstrap";
import Lista from "../../../components/Lista/Lista";

export default function Page() {
    const [headers] = useState(['Turma', 'Avaliação', 'Aluno', 'Nota', 'Ação'])
    const [notas, setNotas] = useState([
        { turma: 'Turma 1', avaliacao: 'Avaliação 1', aluno: 'Aluno 1', nota: '7.5', id: 1},
        { turma: 'Turma 1', avaliacao: 'Avaliação 1', aluno: 'Aluno 2', nota: '8.0', id: 2},
        { turma: 'Turma 1', avaliacao: 'Avaliação 1', aluno: 'Aluno 3', nota: '9.0', id: 3},
        { turma: 'Turma 1', avaliacao: 'Avaliação 2', aluno: 'Aluno 1', nota: '7.0', id: 4}
    ])

    const [alerta, setAlerta] = useState({variant: '', msg: ''})

    const handleDelete = (e) => {
        const id = e.target.value
        const notasDelete = notas.filter(aula => aula.id != id)
        setNotas(notasDelete)
        setAlerta({variant: 'danger', msg: 'Registro Deletado com sucesso'})
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const newNotas = {
            turma: e.target.turma.value,
            aluno: e.target.aluno.value,
            nota: e.target.nota.value,
            avaliacao: e.target.avaliacao.value,
            id: (notas.length + 1),
        }
        e.target.reset()
        setNotas([...notas, newNotas])
        setAlerta({variant: 'success', msg: 'Registro Adicionado com sucesso'})
    }

    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item href="/dashboard/professor"> Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <h2 className="title">Notas</h2>
            <div>
                <h3>Notas Cadastradas</h3>
                <Lista
                    headers={headers}
                    items={notas}
                    tipo="notas"
                    handleDelete={handleDelete}
                ></Lista>
            </div>
            <div>
                 {alerta && 
                <Alert key={alerta.variant} variant={alerta.variant}>
                        {alerta.msg}
                </Alert>
                }
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Cadastrar Nota
                        </Accordion.Header>
                        <Accordion.Body>
                            <Formulario tipo="cadastro_nota" handleAdd={handleAdd}></Formulario>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Container>
    );
}