import { useEffect, useState } from "react"

export const useCharData = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetch('chartData.json')
            .then((res) => res.json())
            .then(data => setChartData(data));
    }, []);

    return [chartData, setChartData];
};