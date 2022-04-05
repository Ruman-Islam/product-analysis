import { useEffect, useState } from "react"

export const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://raw.githubusercontent.com/programming-hero-web-course-4/product-analysis-website-Ruman-Islam/main/public/reviews.json?token=GHSAT0AAAAAABQCBOL23KBMVYAZUPEMZ7TCYSMER5A')
            .then((res) => res.json())
            .then(data => {
                setReviews(data)
                setIsLoading(false);
            });
    }, []);

    return [reviews, setReviews, isLoading];
}