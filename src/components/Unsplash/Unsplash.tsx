import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { Animal } from "../../types";

const ImageContainer = styled.img`
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

const LoadingContainer = styled.div`
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8e8e8e;
    animation: pulse 0.9s ease-out infinite;

    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @keyframes pulse {
        0% {
            background-color: #8e8e8e;
        }
        50% {
            background-color: #787070;
        }
        100% {
            background-color: #8e8e8e;
        }
    }
`;

const Unsplash = (props: { name: string }) => {
    const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    const name = props.name;

    const { isLoading, error, data } = useQuery(["unsplash", name], () =>
        fetch(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${name}&per_page=1&orientation=landscape`).then((res) => res.json())
    );

    // const { isLoading, error, data } = useQuery<Animal[]>({
    //     queryKey: ["unsplash-image"],
    //     queryFn: async () => {
    //         return fetch(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${name}&per_page=1&orientation=landscape`).then((res) => res.json());
    //     },
    //     refetchOnWindowFocus: false,
    // });

    if (isLoading) {
        return (
            <LoadingContainer>
                <div>Loading...</div>
            </LoadingContainer>
        );
    }

    if (error) {
        return (
            <LoadingContainer>
                <div>Error: {error.message}</div>
            </LoadingContainer>
        );
    }

    if (data && data.results && data.results.length > 0) {
        const imageUrl = data.results[0].urls.small;
        const imageAlt = data.results[0].alt_description;

        return <ImageContainer src={imageUrl} alt={imageAlt} loading="lazy" />;
    }

    return null;
};

export default Unsplash;
