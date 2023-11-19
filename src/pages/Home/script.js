import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const ContainerItem = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 600px);
    justify-content: center;
    gap: 16px;
    margin-top: 60px;
    background-color: rgb(32, 35, 41);
    padding: 64px 0px;
`