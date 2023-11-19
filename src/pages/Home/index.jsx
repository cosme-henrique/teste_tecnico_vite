import { useEffect, useState } from "react"
import api from "../../services/api"
import Header from "../../components/Header"
import Card from "../../components/Card"
import { Container, ContainerItem } from "./script"

function Home() {

    const [cards, setCards] = useState()

    useEffect(() => {

        async function loadData() {
            const {data: {results}} = await api.get('character')

            setCards(results)
            console.log({results})
        }

        loadData()

    }, [])

    return (
        <>
            <Container>
                <Header />
                <ContainerItem>
                   { cards && cards.map((card) => 
                        <Card cardData = {card} key={card.id}/>
                   )}
                </ContainerItem>
            </Container>
            
        </>
    )
}

export default Home