'use client'
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css';
import RadioBtn from './RadioBtn';
import { useState } from 'react';

function Formulario(props) {
    return (props.tipo === 'login') ? Login() : Cadastro()
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

            <Button variant="primary" type="submit" onClick={() => router.push(`/dashboard/${pessoa}`)}>
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

export default Formulario;