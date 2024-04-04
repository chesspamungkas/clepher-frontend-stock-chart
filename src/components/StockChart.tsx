import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { format } from 'date-fns';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
    TooltipItem,
} from 'chart.js/auto';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface StockDataResponse {
    'Meta Data': {
        '1. Information': string;
        '2. Symbol': string;
        '3. Last Refreshed': string;
        '4. Output Size': string;
        '5. Time Zone': string;
    };
    'Time Series (Daily)': {
        [date: string]: {
            '1. open': string;
            '2. high': string;
            '3. low': string;
            '4. close': string;
            '5. volume': string;
        };
    };
}

const StockChart: React.FC = () => {
    const [stockData, setStockData] = useState<StockDataResponse | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const response = await axios.get<StockDataResponse>(
                    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${process.env.REACT_APP_API_KEY}`
                );

                setStockData(response.data);
            } catch (error) {
                setError('Error fetching stock data');
                console.error('Error fetching stock data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStockData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const chartData: ChartData<'line'> = {
        labels: stockData ? Object.keys(stockData['Time Series (Daily)']).reverse() : [],
        datasets: [
            {
                label: 'Closing Price',
                data: stockData ? Object.values(stockData['Time Series (Daily)']).map((data) => parseFloat(data['4. close'])).reverse() : [],
                backgroundColor: 'rgba(75, 192, 192, 0.4)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: `Stock Closing Price - ${stockData?.['Meta Data']['2. Symbol']}`,
            },
            tooltip: {
                callbacks: {
                    label: (context: TooltipItem<'line'>) => {
                        const price = context.parsed.y;
                        const date = context.label;
                        return `Price: $${price?.toFixed(2)} | Date: ${format(new Date(date || ''), 'MMM d, yyyy')}`;
                    },
                },
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Closing Price',
                },
            },
        },
    };

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Stock Chart</h2>
                {stockData ? (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold">
                                {stockData['Meta Data']['2. Symbol']} - {stockData['Meta Data']['1. Information']}
                            </h3>
                            <p className="text-gray-500">
                                Last Refreshed: {format(new Date(stockData['Meta Data']['3. Last Refreshed']), 'MMM d, yyyy')}
                            </p>
                        </div>
                        <div className="w-full">
                            <Line data={chartData} options={options} />
                        </div>
                    </div>
                ) : (
                    <p>No stock data available.</p>
                )}
            </div>
        </section>
    );
};

export default StockChart;