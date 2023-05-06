'use client'
import React from "react";
import { Container, CardGroup } from "react-bootstrap";
import Cards from "../../components/Cards/Cards";

export default function Page() {
    let cards = [
        { title: "Material", text: "Área para cadastrar material", image: "https://images.pexels.com/photos/159644/art-supplies-brushes-rulers-scissors-159644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", slug: "/dashboard/fornecedor/material" },
    ];
    return (
        <Container>
            <h2 className="title">Área do Fornecedor</h2>
            <CardGroup>
                {cards.map((card, index) => {
                    return <Cards title={card.title} text={card.text} image={card.image} slug={card.slug} id={"card-" + index}></Cards>
                })}
            </CardGroup>
        </Container>
    )
}