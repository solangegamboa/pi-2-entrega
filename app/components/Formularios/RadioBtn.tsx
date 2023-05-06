'use client'
import { useState } from "react";
import { Form } from "react-bootstrap";

export default function RadioBtn(props) {
    const [pessoa, setPessoa] = useState("");

    return (
        <div>
            <div key={`inline-radio`} className="mb-3">
                <Form.Check inline label="Professor" name="pessoa" type='radio' id={`inline-radio-1`} value="professor" checked={pessoa === 'professor'} onChange={(e) => setPessoa(e.currentTarget.value)} />
                <Form.Check inline label="Aluno" name="pessoa" type='radio' id={`inline-radio-2`} value="aluno" checked={pessoa === 'aluno'} onChange={(e) => setPessoa(e.currentTarget.value)} />
                <Form.Check inline label="Fornecedor" name="pessoa" type='radio' id={`inline-radio-3`} value="fornecedor" checked={pessoa === 'fornecedor'} onChange={(e) => setPessoa(e.currentTarget.value)} />
            </div>

            <div className={(pessoa === 'professor' || pessoa === 'aluno') ? "" : "d-none"}>
                <Form.Group className="mb-3" controlId="formBasicDocument">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="text" placeholder="CPF" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNascimento">
                    <Form.Label>Data de nascimento</Form.Label>
                    <Form.Control type="date" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNascimento">
                    <Form.Label>Gênero</Form.Label>
                    <Form.Select arial-label="Data de nascimento">
                        <option>Selecione...</option>
                        <option value="feminino">Feminino</option>
                        <option value="masculino">Masculino</option>
                        <option value="nao-declarar">Não declarar</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMatricula">
                    <Form.Label>Matrícula na Instituição</Form.Label>
                    <Form.Control type="text" placeholder="Matrícula" />
                </Form.Group>
            </div>

            <div className={(pessoa === 'aluno') ? "" : "d-none"}>
                <Form.Group className="mb-3" controlId="formBasicAno">
                    <Form.Label>Ano de ingresso</Form.Label>
                    <Form.Control type="text" placeholder="Ano de Ingresso" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCurso">
                    <Form.Label>Curso</Form.Label>
                    <Form.Control type="text" placeholder="Curso" />
                </Form.Group>
            </div>

            <div className={(pessoa === 'fornecedor') ? "" : "d-none"}>
                <Form.Group className="mb-3" controlId="formBasicNomeFantasia">
                    <Form.Label>Nome Fantasia</Form.Label>
                    <Form.Control type="text" placeholder="Nome Fantasia" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCNPJ">
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control type="text" placeholder="CNPJ" />
                </Form.Group>
            </div>
        </div>
    )
}