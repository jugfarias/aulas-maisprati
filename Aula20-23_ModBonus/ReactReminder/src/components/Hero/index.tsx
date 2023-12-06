import { Container } from "./styles";
import heroImg from "../../assets/images/hero.png";

export function Hero() {
    return <Container>
        <img src={heroImg} alt="Paisagem em tons roxos" />
    </Container>;
}