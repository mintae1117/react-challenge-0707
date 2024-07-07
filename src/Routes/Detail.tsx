import { Link, useParams } from "react-router-dom";
import { ICharactersDetail, fetchCharactersDetail } from "../api";
import { useQuery } from "react-query";
import styled from "styled-components";
import { Tilt } from "react-tilt";
import { defaultOptions } from "./Home";

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:20, marginTop:100, marginBottom:100}}>
            { detailLoading ? (<Loader>Loading...</Loader>) : (
                <>
                <p style={{marginBottom:10, color:"tomato"}}>Click The Image!</p>
                <Tilt options={defaultOptions}>
                    <Link to={`${detailData?.sourceUrl}`}>
                        <div style={{backgroundColor:"white"}}>
                            { detailData?.imageUrl ? 
                            <img style={{width:350, margin:20}} src={detailData?.imageUrl}/> :
                            <img src={"../public/no-image.png"} style={{width:300, margin:20}} />
                            }
                        </div>
                    </Link>
                </Tilt>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:15, fontSize:25}}>
                    <p style={{marginTop:20, fontSize:30}}>Name : {detailData?.name}</p>
                    <h3 style={{marginTop:20, marginBottom:20, fontSize:30}}>Related Films</h3>
                    {detailData?.films ? detailData?.films.map(films => (
                        <h3>- {films}</h3>
                    )) : <p>none</p>}
                </div>
                </>
            )}
        </div>
    );
}