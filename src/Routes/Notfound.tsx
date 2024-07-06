import styled from "styled-components";

const Wrapper = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 90vh;
`

const NotfoundTitle = styled.h2`
    font-size: 40px;
    margin: 10px;
`;

export default function Notfound(){
    return(
        <Wrapper>
            <NotfoundTitle>Pedro Pedro Pedro Not Found!!</NotfoundTitle>
            <NotfoundTitle>He's cute though... right?!</NotfoundTitle>
            <img src="https://media1.tenor.com/m/ZAMoMuQgf9UAAAAd/mapache-pedro.gif"></img>
        </Wrapper>
    );
}