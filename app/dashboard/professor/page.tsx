'use client'
import React from "react";
import { CardGroup, Container } from "react-bootstrap";
import Cards from "../../components/Cards/Cards";

export default function Page() {
    let cards = [
        { title: "Aula", text: "Área de agendamento de aulas", image: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", slug: "/dashboard/professor/aula" },
        { title: "Nota", text: "Área para cadastro das notas", image: "https://images.pexels.com/photos/5124882/pexels-photo-5124882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", slug: "/dashboard/professor/nota" },
    ];
    return (
        <Container>
            <h2 className="title">Área do Professor</h2>
            <CardGroup>
                {cards.map((card, index) => {
                    return <Cards title={card.title} text={card.text} image={card.image} slug={card.slug} id={"card-" + index} key={index}></Cards>
                })}
            </CardGroup>
        </Container>
    )
}