import styled from "styled-components";

const StyledList = styled.ul`
    width: 100%;
    max-width: 100vw;
    padding: 0.5rem 1rem 1rem 1rem;
    display: flex;
    justify-content: start;
    gap: 1rem;
    overflow: hidden;
    overflow: scroll;
    list-style: none;
    background-color: transparent;
`;

type SelectListProps = {
    children: React.ReactNode,
}

const AnimalSelectList: React.FC<SelectListProps> = ({ children }) => {
    return (
        <>
            <StyledList>{children}</StyledList>
        </>
    );
};
export default AnimalSelectList;
