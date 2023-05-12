'use client'
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css';
import RadioBtn from './RadioBtn';
import { useState } from "react";

function Formulario(props) {
    switch (props.tipo) {
        case 'login':
            return Login();
        case 'cadastro_nota':
            return CadadastrarNota(props);
        case 'cadastro_aula':
            return CadadastrarAula(props);
        default:
            return Cadastro();
    }
}

function Login() {
    const router = useRouter();
    const [pessoa, setPessoa] = useState("")

    return (
        <Form className='form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Entre com seu e-mail" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <div key={`inline-radio`} className="mb-3">
                <Form.Check inline label="Professor" name="pessoa" type='radio' id={`inline-radio-1`} value="professor" checked={pessoa === 'professor'} onChange={(e) => setPessoa(e.currentTarget.value)} />
                <Form.Check inline label="Aluno" name="pessoa" type='radio' id={`inline-radio-2`} value="aluno" checked={pessoa === 'aluno'} onChange={(e) => setPessoa(e.currentTarget.value)} />
                <Form.Check inline label="Fornecedor" name="pessoa" type='radio' id={`inline-radio-3`} value="fornecedor" checked={pessoa === 'fornecedor'} onChange={(e) => setPessoa(e.currentTarget.value)} />
            </div>


            <Button variant="primary" type="submit" onClick={() => {
                router.push(`/dashboard/${pessoa}`)
            }}>
                Login
            </Button>
        </Form >
    );
}

function Cadastro() {
    const router = useRouter();
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nome / Razão Social</Form.Label>
                <Form.Control type="text" placeholder="Entre Nome / Razão Social" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Entre e-mail" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="text" placeholder="Senha" />
            </Form.Group>

            <RadioBtn></RadioBtn>

            <Button variant="primary" type="submit" onClick={() => router.push('/dashboard')}>
                Cadastro
            </Button>
        </Form>
    );
}

function CadadastrarNota(props) {
    return (
        <Form onSubmit={props.handleAdd}>
            <Form.Group className='mb-6'>
                <Form.Label>Turma</Form.Label>
                <Form.Select aria-label="Selecione uma Turma" name="turma">
                    <option value="Turma 1">Turma 1</option>
                    <option value="Turma 2">Turma 2</option>
                    <option value="Turma 3">Turma 3</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className='mb-6'>
                <Form.Label>Avaliação</Form.Label>
                <Form.Select aria-label="Selecione uma Avaliação" name="avaliacao">
                    <option value="Avaliação 1">Avaliação 1</option>
                    <option value="Avaliação 2">Avaliação 2</option>
                    <option value="Avaliação 3">Avaliação 3</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className='mb-12'>
                <Form.Label>Aluno</Form.Label>
                <Form.Select aria-label="Selecione um Aluno" name="aluno">
                    <option value="Aluno 1">Aluno 1</option>
                    <option value="Aluno 2">Aluno 2</option>
                    <option value="Aluno 3">Aluno 3</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className='mb-12'>
                <Form.Label>Nota</Form.Label>
                <Form.Control type="number" min="0" max="10" step=".1" placeholder="Entre com a nota decimal" name="nota"/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Cadastrar
            </Button>
        </Form >
    );
}

function CadadastrarAula(props) {
    return (
        <Form onSubmit={props.handleAdd}>
            <Form.Group className='mb-6'>
                <Form.Label>Turma</Form.Label>
                <Form.Select aria-label="Selecione uma Turma" name="turma">
                    <option value="Turma 1">Turma 1</option>
                    <option value="Turma 2">Turma 2</option>
                    <option value="Turma 3">Turma 3</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className='mb-6'>
                <Form.Label>Data</Form.Label>
                <Form.Control type="date" name="date" />
                <Form.Label>Hora</Form.Label>
                <Form.Control type="time" name="time"/>
            </Form.Group>
            <Form.Group className='mb-12'>
                <Form.Label>Anotações</Form.Label>
                <Form.Control as="textarea" rows={3} name="anotacoes"/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Cadastrar
            </Button>
        </Form >
    );
}


export default Formulario;