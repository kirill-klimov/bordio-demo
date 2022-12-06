import styled from "styled-components";
import Board from "../Board";
import BoardHeader from "../BoardHeader";

const Container = styled.div`
    flex-grow: 1;

    display: grid;
    grid-template-columns: 1;
    grid-template-rows: max-content 1fr;
`; 

export default function MainView() {
    return (
        <Container>
            <BoardHeader />
            <Board />
        </Container>
    )
}