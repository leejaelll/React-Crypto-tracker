import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { fetchCoins } from "../api";

interface CoinInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

function CoinList() {
    // const [coins, setCoins] = useState<CoinInterface[]>([]);
    // const [loading, setLoading] = useState(true);
    // // 렌더링될 때 한번만 코인 리스트를 가져오고 싶다면? : useEffect
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch(
    //             "https://api.coinpaprika.com/v1/coins"
    //         );
    //         const json = await response.json();
    //         setCoins(json.slice(0, 100));
    //         setLoading(false);
    //     }

    //     fetchData();
    // }, []);

    const { isLoading, data } = useQuery<CoinInterface[]>(
        ["allCoins"],
        fetchCoins
    );

    return (
        <Container>
            <Helmet>
                <title>코인코인</title>
            </Helmet>
            <Header>
                <Title>코인코인 리스트 </Title>
            </Header>
            {isLoading ? (
                <Loader>Loading...</Loader>
            ) : (
                <CoinsList>
                    {data?.slice(0, 100).map((coin) => (
                        <Coin key={coin.id}>
                            <Link to={`/${coin.id}`} state={coin.name}>
                                <Img
                                    src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                                />
                                {coin.name} &rarr;
                            </Link>
                        </Coin>
                    ))}
                </CoinsList>
            )}
        </Container>
    );
}

const Container = styled.div`
    padding: 10px 20px;
`;
const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
    background-color: ${(props) => props.theme.btnColor};
    border-radius: 10px;
    margin: 10px 0;
    font-size: 20px;
    text-align: center;
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
    }

    &:hover {
        a {
            color: ${(props) => props.theme.bgColor};
        }
    }
`;
const Title = styled.h1`
    font-size: 48px;
`;
const Loader = styled.span`
    text-align: center;
    display: block;
`;
const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;

export default CoinList;
