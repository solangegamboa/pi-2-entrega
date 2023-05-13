'use client'
import React, { useState } from "react";
import { Accordion, Alert, Breadcrumb, CloseButton, Container, Form, Table } from "react-bootstrap";
import Formulario from "../../../components/Formularios/Formulario";

export default function Page() {
    const [solicitacoes, setSolicitacoes] = useState([
        { id: 1, material: 'Apostila - Aula 1', data: '05/5/2023', status: 'Solicitação Atendida', disciplina: 'Disciplina 1', cancel: true},
        { id: 2, material: 'Atividade - Aula 1', data: '05/5/2023', status: 'Solicitação Pendente', disciplina: 'Disciplina 2', cancel: false},
        { id: 3, material: 'Livro - Aula 1', data: '05/5/2023', status: 'Solicitação Não Atendida', disciplina: 'Disciplina 1', cancel: false}
    ])
    const [alerta, setAlerta] = useState({ variant: '', msg: '' })
    let [disciplina, setDisciplina] = useState('');

    const handleAdd = (e) => {
        e.preventDefault()
        const date = new Date()
        const newSolicitacao = {
            id: (solicitacoes.length + 1),
            data: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
            status: "Solicitação Pendente",
            disciplina: e.target.disciplina.value,
            material: `${e.target.tipo.value} - ${e.target.titulo.value}`,
            cancel: false
        }
        e.target.reset()
        setSolicitacoes([...solicitacoes, newSolicitacao])
        setAlerta({variant: 'success', msg: 'Registro Adicionado com sucesso'})
        
    }

    const handleCancel = (e) => {
        const clonedData = solicitacoes
        console.log(clonedData)
        setSolicitacoes(clonedData.map((d) => (d.id == e.target.value ? { ...d, cancel: !d.cancel } : d)));
    }

    return (
        <>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="/dashboard/aluno"> Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <h2 className="title">Ambiente de Solicitação de Materiais</h2>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Disciplina</th>
                            <th>Material</th>
                            <th>Data</th>
                            <th>Status</th>
                            <th>Cancelar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {solicitacoes.map((solicitacao, index) => {
                            return (
                                <tr key={index} className={solicitacao.cancel && 'canceled'}>
                                    <td>{solicitacao.disciplina}</td>
                                    <td>{solicitacao.material}</td>
                                    <td>{solicitacao.data}</td>
                                    <td>{solicitacao.status}</td>  
                                    <td><CloseButton onClick={handleCancel} value={ solicitacao.id } /></td>  
                                </tr>
                    )})}
                    </tbody>
                </Table>
                {alerta && 
                <Alert key={alerta.variant} variant={alerta.variant}>
                        {alerta.msg}
                </Alert>
                }
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Nova Solicitação
                        </Accordion.Header>
                        <Accordion.Body>
                            <Formulario
                                tipo="solicitacao"
                                handleAdd={handleAdd}
                            ></Formulario>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </>
    );
}