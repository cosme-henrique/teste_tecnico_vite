import { Container, TopHeader } from "./style"
import Logo from "../../assets/logo.png"

function Header() {
    return (
        <>
            <TopHeader>
                <a id="logo" href="#"><img src={Logo} alt="logo" /></a>

                <div className="container-links">
                    <a href="#">Docs</a>
                    <a href="#">About</a>
                    <a className="link-btn" href="#">Support us</a>
                </div>
            </TopHeader>

            <Container>
                <h1>The Rick and Morty API</h1>
            </Container>
        </>
    )
}

export default Header