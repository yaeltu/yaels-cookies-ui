import styled from "styled-components";

import logo from '../../assets/logo.svg';
import Hamburger from "../Hamburger/Hamburger";
import React from "react";

const HeaderContainer = styled.div `
    height: 100px;
    background-color: #f3ebe4;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 1px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);`

const Logo = styled.img `
    height: 150px;
    width:150px;`

function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const toggleSidebar = (newOpen) => {
        setIsSidebarOpen(newOpen);
    };

    return (
        <HeaderContainer>
           <Logo src={logo} alt={"logo"} />
            {/*<Hamburger*/}
            {/*    isSidebarOpen={isSidebarOpen}*/}
            {/*    toggleSidebar={toggleSidebar}/>*/}
        </HeaderContainer>
    )
}

export default Header;