import { useQuery } from "react-query";
import { fetchCharacters, ICharacters } from "../api"
import styled from "styled-components";
import { Link } from "react-router-dom";
//import { useState } from "react";

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home (){
    const { data: charactersData, isLoading: charactersLoading } = useQuery<ICharacters[]>("allCharacters", fetchCharacters);
    //const [tmp, setTmp] = useState([]);

    return(
        <div>
            {charactersLoading ? (<Loader>Loading...</Loader>) : (
                <ul>
                    <h2>home!!!</h2>
                    {charactersData?.slice(0, 100).map((characters) => (
                        <li key={characters.id}>
                            <Link to={`/character/${characters.id}`}>
                                <h2>{characters?.name}</h2>
                                <img src={`${characters?.imageUrl}`} />
                            </Link>
                        </li>
                    ))}
                </ul>
                )}
        </div>
    );
}