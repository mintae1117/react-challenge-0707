import { useQuery } from "react-query";
import { fetchCharacters, ICharacters } from "../api"
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export default function Home (){
    const { data: charactersData, isLoading: charactersLoading } = useQuery<ICharacters[]>("allCharacters", fetchCharacters);

    return(
        <div>
            {charactersLoading ? (<Loader>Loading...</Loader>) : (
                <>
                <h2>home!!!</h2>
                <ul style={{display:"flex", flexWrap:"wrap", gap:100, alignItems:"center", justifyContent:"center"}}>
                    {charactersData?.slice(0, 100).map((characters) => (
                        <Link to={`/character/${characters.id}`}>
                            <Tilt options={defaultOptions} style={{ height: 400, width: 300, backgroundColor:"blue" }}>
                                <li key={characters.id}>
                                    <img src={`${characters?.imageUrl}`} />
                                    <h3>{characters?.name}</h3>
                                </li>
                            </Tilt>
                        </Link>
                    ))}
                </ul>
                </>
            )}
        </div>
    );
}