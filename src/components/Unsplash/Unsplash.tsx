import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

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
    animation: pulse 1.2s ease-out infinite;

    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @keyframes pulse {
        0% {
            color: #f0f0eb;
        }
        50% {
            color: #d0adf0;
        }
        100% {
            color: #f0f0eb;
        }
    }
`;

const ErrorContainer = styled.div`
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8e8e8e;

    div {
        color: #d0adf0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Unsplash = (props: { name: string }) => {
    const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    const name = props.name;

    // const { isLoading, error, data } = useQuery(["unsplash", name], () =>
    //     fetch(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${name}&per_page=1&orientation=landscape`).then((res) => res.json())
    // );

    const { isLoading, isError, error, data } = useQuery({
        queryKey: [`unsplash ${name}`],
        queryFn: async () => {
            return fetch(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${name}&per_page=1&orientation=landscape`)
                .then((res) => res.json())
                .then((cache) => cache);
        },
        refetchOnWindowFocus: false,
    });

    if (isLoading) {
        return (
            <LoadingContainer>
                <div>Loading...</div>
            </LoadingContainer>
        );
    }

    if (isError) {
        return (
            <ErrorContainer>
                <div>{error?.message}</div>
            </ErrorContainer>
        );
    }

    const imageUrl = data.results[0].urls.small;
    const imageAlt = data.results[0].alt_description;

    return <ImageContainer src={imageUrl} alt={imageAlt} loading="lazy" />;
};

export default Unsplash;
