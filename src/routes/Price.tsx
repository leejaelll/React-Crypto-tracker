import { fetchCoinHistory } from "../api";
import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import PriceItem from "../PriceItem";

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

function Price() {
    const coinId = useOutletContext<string>();
    const { isLoading, data } = useQuery<IHistorical[]>(
        ["ohlcv", coinId],
        () => fetchCoinHistory(coinId),
        { refetchInterval: 20000 }
    );
    return (
        <div>
            {isLoading ? (
                "Price Loading..."
            ) : (
                <Container>
                    {data?.map((price) => (
                        <PriceItem
                            key={price.time_close}
                            time={price.time_close}
                            open={price.open}
                            high={price.high}
                            low={price.low}
                            close={price.close}
                        ></PriceItem>
                    ))}
                </Container>
            )}
        </div>
    );
}

const Container = styled.div`
    padding: 10px 20px;
`;

export default Price;
