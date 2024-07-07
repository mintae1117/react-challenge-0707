import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 100px;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    height: 120px;
    position: sticky;
    top: 0;
    background-color: black;
    z-index: 10;
    margin-top: 20px;
`;

export default function Header(){
    return(
        <>
        <HeaderWrapper>
            <div>
            <img style={{width:150}} src={"./public/disney-logo.png"} />
            </div>
            <div style={{position:"absolute", right:120, textAlign:"center"}}>
                <Link to="https://github.com/mintae1117/react-challenge-0707">Look Github's<br></br>README!</Link>
            </div>
            <div style={{position:"absolute", left:120, textAlign:"center"}}>
                <Link to="/">Return to the<br></br>Home screen!</Link>
            </div>
        </HeaderWrapper>
        <Outlet />
        </>
    );
}