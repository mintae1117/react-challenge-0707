import { Link, useParams } from "react-router-dom";
import { ICharactersDetail, fetchCharactersDetail } from "../api";
import { useQuery } from "react-query";
import styled from "styled-components";
import { Tilt } from "react-tilt";
import { defaultOptions } from "./Home";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding-top: 70px;
    padding-bottom: 100px;
    background-image: url(/disney.jpg);
    background-attachment: fixed;
    background-size: cover;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgWrapper = styled.div`
    background-color: rgb(65,171,246, 0.6);
    &:hover{
        background-color: #41abf6;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    font-size: 25px;
    background-color: rgb(65,171,246, 0.6);
    padding: 50px;
    border-radius: 20px;
    margin-top: 10px;
`;


interface RouteParams{
    id: number;
}

export default function Detail(){
    const { id } = useParams() as unknown as RouteParams;
    const { data: detailData, isLoading: detailLoading } = useQuery<ICharactersDetail>(
        ["detail", id], () => fetchCharactersDetail(id)
    );

    return(
        <Wrapper>
            { detailLoading ? (<Loader>Loading...</Loader>) : (
                <>
                <p style={{fontSize:20, marginBottom:10, color:"tomato"}}>Click The Image!</p>
                <Tilt options={defaultOptions}>
                    <Link to={`${detailData?.sourceUrl}`}>
                        <ImgWrapper>
                            { detailData?.imageUrl ? 
                            <img style={{width:350, margin:20}} src={detailData?.imageUrl}/> :
                            <img src={"/no-image.png"} style={{width:300, margin:20}} />
                            }
                        </ImgWrapper>
                    </Link>
                </Tilt>
                <TextWrapper>
                    <p style={{fontSize:30}}>Name : {detailData?.name}</p>
                    <h3 style={{marginTop:20, marginBottom:20, fontSize:30}}>Related Films</h3>
                    {detailData?.films ? detailData?.films.map(films => (
                        <h3>- {films}</h3>
                    )) : <p>none</p>}
                </TextWrapper>
                </>
            )}
        </Wrapper>
    );
}