import { useEffect, useState } from "react"

export const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('reviews.json')
            .then((res) => res.json())
            .then(data => {
                setReviews(data)
                setIsLoading(false);
            });
    }, []);

    return [reviews, setReviews, isLoading];
}