import { useOutletContext } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";

function Chart() {
    const coinId = useOutletContext<string>();
    const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
        fetchCoinHistory(coinId)
    );

    console.log(data);

    return (
        <>
            <h1>Chart</h1>
        </>
    );
}

export default Chart;
