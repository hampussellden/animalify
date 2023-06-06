import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 10;

    h1 {
        pointer-events: none;
        font-family: Helvetica, sans-serif;
        font-size: 1.5rem;
        font-weight: 100;
        letter-spacing: 0.25rem;
        color: #d0adf0;
        padding-left: 1rem;
        text-transform: uppercase;
        position: relative;
        z-index: 10;
    }

    h1 > span {
        letter-spacing: 0.2rem;
        font-style: italic;
        transform: translateX(-0.425rem) skewX(-8deg);
        position: absolute;
    }

    > div.hover {
        width: 100%;
        height: 100%;
        z-index: 5;
        background-color: transparent;
        position: absolute;
        top: -100%;
        transition: background-color, top, 0.2s ease-out;
    }

    :hover div.hover {
        background-color: #24242479;
        top: 0;
        backdrop-filter: blur(3px);
    }
`;

const NavBar = styled.ul`
    padding: 1rem;
    display: flex;
    gap: 2rem;
    list-style: none;
`;

const ListItem = styled.li`
    font-size: 1.5rem;
    z-index: 10;

    a {
        color: #d0adf0;
        text-decoration: none;
        letter-spacing: 0.2rem;
    }

    :hover a {
        text-decoration: underline;
    }
`;

const Header = () => {
    return (
        <>
            <StyledHeader>
                <h1>
                    A<span>imalify</span>
                </h1>
                <nav>
                    <NavBar className="navbar">
                        <ListItem className="navbar-item">
                            <a href="#home">HOME</a>
                        </ListItem>
                        <ListItem className="navbar-item">
                            <a href="#mutation">MUTATION</a>
                        </ListItem>
                        <ListItem className="navbar-item">
                            <a href="#">ABOUT</a>
                        </ListItem>
                    </NavBar>
                </nav>
                <div className="hover"></div>
            </StyledHeader>
        </>
    );
};

export default Header;
