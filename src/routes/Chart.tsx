import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import ApexChart from "react-apexcharts";
import { fetchCoinHistory } from "../api";

interface IHistorical {
    close: number;
    high: number;
    low: number;
    market_cap: number;
    open: number;
    time_close: string;
    time_open: string;
    volume: number;
}

function Chart() {
    const coinId = useOutletContext<string>();
    const { isLoading, data } = useQuery<IHistorical[]>(["ohlvc"], () =>
        fetchCoinHistory(coinId!)
    );

    return (
        <div>
            {isLoading ? (
                "loading..."
            ) : (
                <ApexChart
                    series={[
                        {
                            data:
                                data?.map((price) => {
                                    return {
                                        x: price.time_close,
                                        y: [
                                            price.open.toFixed(2),
                                            price.high.toFixed(2),
                                            price.low.toFixed(2),
                                            price.close.toFixed(2),
                                        ],
                                    };
                                }) ?? [],
                        },
                    ]}
                    type="candlestick"
                    options={{
                        theme: {
                            mode: "dark",
                        },
                        chart: {
                            height: 500,
                            width: 500,
                            toolbar: {
                                show: false,
                            },
                            background: "transparent",
                        },
                        grid: { show: false },
                        xaxis: {
                            type: "datetime",
                        },
                    }}
                />
            )}
        </div>
    );
}

export default Chart;
