'use client'
import React from "react";
import { Container, CardGroup } from "react-bootstrap";
import Cards from "../../components/Cards/Cards";

export default function Page() {
    let cards = [
        { title: "Aula", text: "Área para assistir aulas agendadas e gravadas", image: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", slug: "/dashboard/aluno/aula" },
        { title: "Matrícula", text: "Área para matricular nas disciplinas", image: "https://images.pexels.com/photos/4560083/pexels-photo-4560083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", slug: "/dashboard/aluno/matricula" },
        { title: "Material", text: "Área para solicitar material", image: "https://images.pexels.com/photos/159644/art-supplies-brushes-rulers-scissors-159644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", slug: "/dashboard/aluno/material" },
    ];
    return (
        <Container>
            <h2 className="title">Área do Aluno</h2>
            <CardGroup>
                {cards.map((card, index) => {
                    return <Cards title={card.title} text={card.text} image={card.image} slug={card.slug} id={"card-" + index}></Cards>
                })}
            </CardGroup>
        </Container>
    )
}