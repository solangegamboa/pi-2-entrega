import Link from "next/link";
import React from "react";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Projeto Integrador - 2</title>
            </head>
            <body>
                menu lateral
                <Link href="/dashboard"></Link>
                {children}
            </body>
        </html>
    );
}