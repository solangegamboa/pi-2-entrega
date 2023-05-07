import React from "react";
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavGeral from "./components/Nav";

export const metadata = {
    title: 'Projeto Integrador - 2, Primeiro semestre',
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
                <NavGeral></NavGeral>
                {children}
            </body>
        </html>
    );
}
