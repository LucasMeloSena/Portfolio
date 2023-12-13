import styled from "styled-components";

export const MainContent = styled.header `
    width: 100%;
    height: 10vh;
    background: #FFF;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: grid;
    grid-template-columns: 68% 8% 8% 8% 8%;
    grid-template-rows: 10vh;
    align-items: center;
`

export const Logo = styled.img `
    width: 150px;
    height: 150px;
    margin-left: 30px;
`

export const Pages = styled.h4 `
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    &:hover {
        cursor: pointer;
    }
`