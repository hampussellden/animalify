import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;

    h1 {
        font-family: Helvetica, sans-serif;
        font-size: 1.5rem;
        font-weight: 100;
        letter-spacing: 0.25rem;
        padding-left: 1rem;
        text-transform: uppercase;
        position: relative;
    }

    h1 > span {
        letter-spacing: 0.2rem;
        font-style: italic;
        transform: translateX(-0.425rem) skewX(-8deg);
        position: absolute;
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

    :hover a {
        text-decoration: underline;
    }
    a {
        text-decoration: none;
        letter-spacing: 0.1rem;
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
                            <a href="#">HOME</a>
                        </ListItem>
                        <ListItem className="navbar-item">
                            <a href="#">MUTATION</a>
                        </ListItem>
                        <ListItem className="navbar-item">
                            <a href="#">ABOUT</a>
                        </ListItem>
                    </NavBar>
                </nav>
            </StyledHeader>
        </>
    );
};

export default Header;
