import { useEffect, useState } from "react"

export const useCharData = () => {
    const [chartData, setChartData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json')
            .then((res) => res.json())
            .then(data => {
                setChartData(data)
                setIsLoading(false);
            });
    }, []);

    return [chartData, setChartData, isLoading];
};