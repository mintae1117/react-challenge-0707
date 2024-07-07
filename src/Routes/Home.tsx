import { useQuery } from "react-query";
import { fetchCharacters, ICharacters } from "../api"
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";
import { useEffect, useState } from "react";

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
    background-color: tomato;
    height: 400px;
    width: 300px;
    border-radius: 10px;
    background-image: url(/public/card.png);
    background-size: cover;
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const defaultOptions = {
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
    const [page, setPage] = useState(0);

    const { data: charactersData, isLoading: charactersLoading } = useQuery<ICharacters[]>("allCharacters", fetchCharacters);

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
          threshold: 0, //  Intersection Observer의 옵션, 0일 때는 교차점이 한 번만 발생해도 실행, 1은 모든 영역이 교차해야 콜백 함수가 실행.
        });
        // 최하단 요소를 관찰 대상으로 지정함
        const observerTarget = document.getElementById("observer");
        // 관찰 시작
        if (observerTarget) {
          observer.observe(observerTarget);
        }
      }, []);

    return(
        <div>
            {charactersLoading ? (<Loader>Loading...</Loader>) : (
                <>
                <ul style={{display:"flex", flexWrap:"wrap", gap:100, alignItems:"center", justifyContent:"center", paddingTop:50}}>
                    {charactersData?.slice(0, 50 * page).map((characters) => (
                        <Link to={`/character/${characters.id}`}>
                            <Tilt options={defaultOptions}>
                                <CardWrapper>
                                    <li key={characters.id} style={{textAlign:"center"}}>
                                        <div style={{maxWidth:250}}>
                                            { characters.imageUrl ?
                                            <img style={{width:200, height:220, objectFit:"cover"}} src={`${characters?.imageUrl}`} /> :
                                            <img src={"/public/no-image.png"} style={{width:200}} />
                                            }
                                            <h3 style={{marginTop:20, fontSize:20}}>{characters?.name}</h3>
                                        </div>
                                    </li>
                                </CardWrapper>
                            </Tilt>
                        </Link>
                    ))}
                </ul>
                </>
            )}
            <div id="observer" style={{ height: "50px" }}></div>
        </div>
    );
}