'use client'
import React, { useState } from "react";
import { Container, Breadcrumb, Accordion, Form } from "react-bootstrap";
import Lista from "../../../components/Lista/Lista";
import './aula.css'

export default function Page() {
    const aulasDisciplina = {
        headers: ['Disciplina', 'Nome', 'Data da Aula', 'Link', 'Local'],
        aulas: [
            { disciplina: 'Disciplina 1', nome: 'Conteudo 1', dataAula: '20/05/2023 19:30', link: 'https://teste.com/assistir_aula', local: 'online', tipo: 'online' },
            { disciplina: 'Disciplina 1', nome: 'Conteudo 2', dataAula: '27/05/2023 19:30', link: 'Presencial', local: 'Rua da Faculdade, 123 - Sala 10', tipo: 'presencial' },
            { disciplina: 'Disciplina 1', nome: 'Conteudo 3', dataAula: '28/05/2023 19:30', link: 'https://teste.com/assistir_aula', local: 'online', tipo: 'online' },
            { disciplina: 'Disciplina 2', nome: 'Conteudo 4', dataAula: '20/06/2023 19:30', link: 'https://teste.com/assistir_aula', local: 'online', tipo: 'online' },
            { disciplina: 'Disciplina 2', nome: 'Conteudo 5', dataAula: '28/06/2023 19:30', link: 'https://teste.com/assistir_aula', local: 'online', tipo: 'online' },
            { disciplina: 'Disciplina 2', nome: 'Conteudo 6', dataAula: '27/06/2023 19:30', link: 'Presencial', local: 'Rua da Faculdade, 123 - Sala 13', tipo: 'presencial' }
        ]
    }

    let [disciplina, setDisciplina] = useState('');

    function handleAula(disciplina) {
        if (disciplina !== '') {
            return aulasDisciplina.aulas.filter(a => a.disciplina == disciplina)
        } else {
            return aulasDisciplina.aulas
        }

    }
    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item href="/dashboard/aluno"> Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <h2 className="title">Aulas</h2>
            <div>
                <h3>Aulas Cadastradas</h3>
                <div className="respiro">
                    <Form.Label><strong>Disciplina</strong></Form.Label>
                    <Form.Select onChange={(e) => setDisciplina(e.currentTarget.value)}>
                        <option value="">Escolha a Disciplina</option>
                        <option value="Disciplina 1">Disciplina 1</option>
                        <option value="Disciplina 2">Disciplina 2</option>
                    </Form.Select>
                </div>
                <Lista headers={aulasDisciplina.headers} items={handleAula(disciplina)} tipo="aula_estudante"></Lista>
            </div>
        </Container>
    )
}