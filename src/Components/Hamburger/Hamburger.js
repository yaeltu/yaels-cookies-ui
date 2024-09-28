import React from 'react';
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";

const Button = styled.button `
    outline: none;
    border: none;
    cursor: pointer;
    width: 3em;
    height: 2em;
    position: relative;
    z-index: 10;
    background-color: transparent;
    background-image: ${(props) => 
            (props.$isopen ? 'url(https://res.cloudinary.com/dnpyq0ocz/image/upload/v1588441892/icon-hamburger-close.svg)'
            : 'url(https://res.cloudinary.com/dnpyq0ocz/image/upload/v1588441892/icon-hamburger.svg)')
};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    -webkit-tap-highlight-color: transparent;
`

const Panel = styled.div `
    max-width: 250px;
    background-color: #000;
    background-size: 117px 188px;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.34, 1.01);
    position: fixed;
    z-index: 5;
    right: ${(props) => props.$isopen ? 0 : '-100%'};
    top: 0;
    height: 100%;
    width: 100%;
    visibility: ${(props) => props.$isopen ? 'visible' : 'hidden'};
    opacity: ${(props) => props.$isopen ? 0.9 : 0};
    padding: 3em;
    display: flex;
`


const Hamburger = ({isSidebarOpen, toggleSidebar}) => {

    return (
        <div>
            <Button
                $isopen={isSidebarOpen}
                onClick={() => toggleSidebar(!isSidebarOpen)}
            />
            <Panel $isopen={isSidebarOpen}>
                <Sidebar />
            </Panel>
        </div>
    )
}

export default Hamburger;