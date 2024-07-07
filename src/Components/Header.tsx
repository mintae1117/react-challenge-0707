import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 100px;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    height: 120px;
    position: sticky;
    top: 0;
    background-color: black;
    z-index: 10;
    margin-top: 20px;
`;

const ReadmeLink = styled.div`
    position: absolute;
    right: 120px;
    text-align: center;
    @media (max-width: 710px) {
        right: 20px;
        font-size: 15px;
    }
`;

const HomeLink = styled.div`
    position: absolute;
    left: 120px;
    text-align: center;
    @media (max-width: 710px) {
        left: 20px;
        font-size: 15px;
    }
`;

export default function Header(){
    return(
        <>
        <HeaderWrapper>
            <div>
            <img style={{width:150}} src={'/disney-logo.png'} />
            </div>
            <ReadmeLink>
                <Link to="https://github.com/mintae1117/react-challenge-0707">Look Github's<br></br>README!</Link>
            </ReadmeLink>
            <HomeLink>
                <Link to="/">Return to the<br></br>Home screen!</Link>
            </HomeLink>
        </HeaderWrapper>
        <Outlet />
        </>
    );
}