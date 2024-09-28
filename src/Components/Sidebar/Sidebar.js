import styled from "styled-components";

const StyledList = styled.ul`
    margin: 65px 0 auto auto;
`

const StyledItem = styled.li`
    list-style: none;
    font-size: 1.5em;
    text-align: right;

    & + li {
        margin-top: 1em;
    }
`

const StyledAnchor = styled.a`
    text-decoration: none;
    color: white;

    &:hover {
        color: #7a6ffb;
    }`


const Sidebar = () => {

    return (
        <StyledList>
            <StyledItem>
                <StyledAnchor href="/">עוגות בחושות</StyledAnchor>
            </StyledItem>
            <StyledItem>
                <StyledAnchor href="/">מארזי שי</StyledAnchor>
            </StyledItem>
            <StyledItem>
                <StyledAnchor href="/">אודות</StyledAnchor>
            </StyledItem>
        </StyledList>
    )

}

export default Sidebar;