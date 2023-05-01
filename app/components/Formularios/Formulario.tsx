'use client'
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css';
import RadioBtn from './RadioBtn';

function Formulario(props) {
    return (props.tipo === 'login') ? Login() : Cadastro()
}

function Login() {
    const router = useRouter();
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

            <Button variant="primary" type="submit" onClick={() => router.push('/dashboard')}>
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