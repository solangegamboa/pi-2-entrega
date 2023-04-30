import React from "react";
import './globals.css';

export const metadata = {
    title: 'Projeto Integrador - 2',
    description: 'Fluxo do sistema',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body>
                <header>Nome do sistema</header>
                Layout geral
                {children}
            </body>
        </html>
    );
}
