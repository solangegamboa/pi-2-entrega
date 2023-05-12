'use client'
import React, { useState } from "react";
import { Accordion, Alert, Breadcrumb, Container } from "react-bootstrap";
import Lista from "../../../components/Lista/Lista";
import Formulario from "../../../components/Formularios/Formulario";

export default function Page() {
    const [headers] = useState(['Turma', 'Data da Aula', 'Anotações', 'Ações']);
    const [aulas, setAulas] = useState([
        { turma: 'Turma 1', dataAula: '20/5/2023 19:30', anotacao: 'Anotações 1', id: 1 },
        { turma: 'Turma 1', dataAula: '27/5/2023 19:30', anotacao: 'Anotações 2', id: 2 },
        { turma: 'Turma 1', dataAula: '03/6/2023 19:30', anotacao: 'Anotações 3', id: 3 },
        { turma: 'Turma 1', dataAula: '10/11/2023 19:30', anotacao: 'Anotações 1', id: 4 }
    ]);
    const [alerta, setAlerta] = useState({variant: '', msg: ''})

    const handleDelete = (e) => {
        const id = e.target.value
        const aulasDelete = aulas.filter(aula => aula.id != id)
        setAulas(aulasDelete)
        setAlerta({variant: 'danger', msg: 'Registro Deletado com sucesso'})
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const date = new Date(e.target.date.value)
        const dataAula = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${e.target.time.value}`
        const newAula = {
            turma: e.target.turma.value,
            dataAula: dataAula,
            anotacao: e.target.anotacoes.value,
            id: (aulas.length + 1),
        }
        e.target.reset()
        setAulas([...aulas, newAula])
        setAlerta({variant: 'success', msg: 'Registro Adicionado com sucesso'})
    }

    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item href="/dashboard/professor"> Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <h2 className="title">Aulas</h2>
            <div>
                <h3>Aulas Cadastradas</h3>
                <Lista
                    headers={headers}
                    items={aulas}
                    tipo="aula"
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
                            Cadastrar Aula
                        </Accordion.Header>
                        <Accordion.Body>
                            <Formulario
                                tipo="cadastro_aula"
                                handleAdd={handleAdd}
                            ></Formulario>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Container>
    )
}