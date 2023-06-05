import styled, { useTheme } from "styled-components";
import Unsplash from "../Unsplash/Unsplash";
import { Animal } from "../../types";
import React, { useState } from "react";

const ListItem = styled.li`
    box-sizing: border-box;
    min-width: 15.625rem;
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
    box-shadow: 0 0.35rem 0.35rem #00000033;

    :hover {
        cursor: pointer;
        transform: translateY(0.25rem);
        box-shadow: 0 0.15rem 0.4rem #0000009c;
    }

    :hover img {
        filter: saturate(0.9);
        scale: 1.05;
    }

    h3,
    span {
        padding: 0 0.5rem;
    }

    h3 {
        width: 100%;
        font-size: 1.75rem;
        letter-spacing: 0.03rem;
        font-weight: 100;
    }

    span {
        width: 100%;
        font-size: 1rem;
        letter-spacing: 0.1rem;
        font-weight: 200;
        letter-spacing: 0.08;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    span > ul {
        display: flex;
        gap: 0.35rem;
        list-style: none;
        li {
            text-transform: capitalize;
        }
    }

    img {
        overflow: hidden;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: bottom;
        filter: saturate(0.2);
        transition: scale 0.15s ease-in;
    }

    img {
        opacity: 0;
    }

    &.visible img {
        opacity: 1;
        transition: opacity 2s ease-out, scale 0.15s ease-in;
    }

    /* Indicator for selected card */
    &.selected {
        transform: translateY(0.25rem);
        filter: saturate(1);
        box-shadow: 0 0 10px #e395f2d6;
    }
`;
const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    position: relative;
`;

const Indicator = styled.div`
    display: none;
    min-width: 15.625rem;
    min-height: 2rem;
    background-color: #d0adf0b1;
    bottom: 0;
    position: absolute;

    /* Indicator for selected card */
    &.selected {
        font-size: 2rem;
        font-weight: 200;
        letter-spacing: 0.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
    }
`;

type SelectListItemProps = {
    animals: Animal[];
    onClick: React.Dispatch<React.SetStateAction<Animal | undefined>>;
    handleSelected: string | undefined;
};

const AnimalListItem = (props: SelectListItemProps) => {
    const { animals, onClick, handleSelected } = props;
    const [scrollLimit, setScrollLimit] = useState<boolean>(false);

    const handleClick = (value: Animal) => {
        onClick(value);
    };

    const handleClassSelected = (animal: Animal) => {
        if (handleSelected === animal.name) {
            return "selected";
        }
    };

    const handleClassScrollLimit = () => {
        window.addEventListener("scroll", () => {
            let scrollPos = Math.floor(document.documentElement.scrollTop);
            if (scrollPos > 60) {
                setScrollLimit(true);
            }
        });
        if (scrollLimit) {
            return "visible";
        }
    };

    return (
        <>
            {animals.map((animal, i) => {
                return (
                    <ListItem
                        onClick={() => {
                            handleClick(animal);
                        }}
                        // className={handleSelected === animal.name ? "selected" : ""}
                        className={`${handleClassSelected(animal)} ${handleClassScrollLimit()}`}
                        key={i}
                        value={animal.name}
                    >
                        <ImageWrapper>
                            <Unsplash name={animal.name} />
                            <Indicator className={`indicator ${handleClassSelected(animal)}`}>Selected</Indicator>
                        </ImageWrapper>
                        <h3>{animal.name}</h3>
                        <span>
                            <p>Vertebrate: {animal.animalGroup}</p>
                            <ul>
                                Habitat:
                                {animal.location.map((habitat, i) => {
                                    return <li key={i}>{habitat}</li>;
                                })}
                            </ul>
                        </span>
                    </ListItem>
                );
            })}
        </>
    );
};
export default AnimalListItem;
