import { useParams } from "react-router-dom";
import { ICharactersDetail, fetchCharactersDetail } from "../api";
import { useQuery } from "react-query";
import styled from "styled-components";

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
        <div>
            <h2>Detail!</h2>
            { detailLoading ? (<Loader>Loading...</Loader>) : (
                <>
                <h2>{detailData?.name}</h2>
                {detailData?.imageUrl ? <img src={detailData?.imageUrl}/> : <img src="/public/no-image.png" style={{width:300}} />}
                {detailData?.films ? detailData?.films.map(films => (
                    <h3>{films}</h3>
                )) : null}
                </>
            )}
        </div>
    );
}