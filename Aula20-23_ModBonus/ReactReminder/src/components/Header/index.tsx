import { Container } from "./styles";
import { Button } from "../Button";
import { Logo } from "../Logo";
import { useState } from "react";

export function Header() {

    const [number, setNumber] = useState(0);

    function increment() {
        setNumber(number + 1);
    }

    return <Container>
        <Logo />
        <p> {number} </p>
        <Button title="Adicionar Lembrete" onClick={increment} />
    </Container>
}

