import { SelectListItemProps } from "../../types";
import styled from "styled-components";
import Unsplash from "../Unsplash/Unsplash";

const ListItem = styled.li`
    box-sizing: border-box;
    width: 10rem;
    min-width: 10rem;
    min-height: 10rem;
    padding: 0 0 0.5rem 0;
    border-radius: 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
    overflow: hidden;
    background-color: #120605b9;
    transition: transform, 0.15s linear;
    filter: saturate(0.1);
    box-shadow: 0 0.35rem 0.35rem rgba(0, 0, 0, 0.2);

    :hover {
        cursor: pointer;
        filter: saturate(0.9);
        transform: translateY(0.25rem);
        box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.4);
    }

    :hover img {
        scale: 1.05;
    }

    &.selected {
        transform: translateY(0.25rem);
        filter: saturate(1);
        box-shadow: 0 0 10px #e395f2;
        outline: #e395f2 1px solid;
    }

    h2,
    span {
        padding: 0 0.5rem;
    }

    h2 {
        width: 100%;
        font-size: 1rem;
    }

    span {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;
    }

    img {
        overflow: hidden;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: bottom;
        transition: scale 0.15s ease-in;
    }
`;
const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const AnimalListItem = (props: SelectListItemProps) => {
    const { animals, onClick, handleSelected } = props;

    const handleClick = (value: object) => {
        onClick(value);
    };

    return (
        <>
            {animals.map((animal, i) => {
                return (
                    <ListItem
                        onClick={() => {
                            handleClick(animal);
                        }}
                        className={handleSelected === animal.name ? "selected" : ""}
                        key={i}
                        value={animal.name}
                    >
                        <ImageWrapper>
                            <Unsplash name={animal.name} />
                        </ImageWrapper>
                        <h2>{animal.name}</h2>
                        <span>
                            <p>{animal.animalGroup}</p>
                            <p>{animal.location}</p>
                        </span>
                    </ListItem>
                );
            })}
        </>
    );
};
export default AnimalListItem;
