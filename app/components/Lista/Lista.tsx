'use client'
import Link from "next/link";
import { Nav, Table } from "react-bootstrap";



export default function Lista(props) {
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        {props.headers.map((header, index) => {
                            return <th key={index}>{header}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item, index) => {
                        return handleItems(props.tipo, item, index);
                    }, props)}
                </tbody>
            </Table>
        </>
    )
}

function handleItems(tipo, item, index) {
    if (tipo === 'aula') {
        return <tr key={index}>
            <td>{item.turma}</td>
            <td>{item.dataAula}</td>
            <td>{item.anotacao}</td>
            <td><button>Apagar</button> </td>
        </tr>
    } else if (tipo === 'aula_estudante') {
        return (
            <tr key={index}>
                <td>{item.disciplina}</td>
                <td>{item.nome}</td>
                <td>{item.dataAula}</td>
                <td>{(item.tipo === 'online') ? <span className='link'>Acessar aula</span> : item.tipo}</td>
                <td>{item.local}</td>
            </tr>)
    } else {
        return <tr key={index}>
            <td>{item.turma}</td>
            <td>{item.avaliacao}</td>
            <td>{item.aluno}</td>
            <td>{item.nota}</td>
            <td><button>Apagar</button> </td>
        </tr>
    }
}