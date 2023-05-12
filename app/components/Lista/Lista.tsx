'use client'
import Link from "next/link";
import { Nav, Table } from "react-bootstrap";



export default function Lista({tipo, items, headers, handleDelete }) {
    
    function formatItems(tipo, item, handleDelete) {
    if (tipo === 'aula') {
        return <tr key={item.id}>
            <td>{item.turma}</td>
            <td>{item.dataAula}</td>
            <td>{item.anotacao}</td>
            <td>
                <button value={item.id}
                    onClick={handleDelete}
                >Apagar</button>
            </td>
        </tr>
    } else if (tipo === 'aula_estudante') {
        return (
            <tr key={item.id}>
                <td>{item.disciplina}</td>
                <td>{item.nome}</td>
                <td>{item.dataAula}</td>
                <td>{(item.tipo === 'online') ? <span className='link'>Acessar aula</span> : item.tipo}</td>
                <td>{item.local}</td>
            </tr>)
    } else {
        return <tr key={item.id}>
            <td>{item.turma}</td>
            <td>{item.avaliacao}</td>
            <td>{item.aluno}</td>
            <td>{item.nota}</td>
            <td>
                <button value={item.id}
                    onClick={handleDelete}
                >Apagar</button>
            </td>
        </tr>
    }
    }
    
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        {headers.map((header, index) => {
                            return <th key={index}>{header}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return formatItems(tipo, item, handleDelete);
                    }, items)}
                </tbody>
            </Table>
        </>
    )
}

