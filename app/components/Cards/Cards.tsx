'use client'
'use client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cards.css';
import { useRouter } from 'next/navigation';

function Cards(props) {
    const router = useRouter();
    return (
        <Card style={{ width: '18rem' }} className='cards'>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Button variant="primary" onClick={() => router.push(`${props.slug}`)}>Acessar</Button>
            </Card.Body>
        </Card>
    );
}

export default Cards;