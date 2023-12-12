import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const MainContent = styled.div `
    background: radial-gradient(circle, #FFFFFF, #D5E7F7);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const WarmContainer = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 150px;
`

export const TitleWarm = styled.h1 `
    color: #6D9DD0;
    font-size: 150px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    text-shadow: 
    1px 0px 1px #ccc, 0px 1px 1px #eee, 
    2px 1px 1px #ccc, 1px 2px 1px #eee,
    3px 2px 1px #ccc, 2px 3px 1px #eee,
    4px 3px 1px #ccc, 3px 4px 1px #eee,
    5px 4px 1px #ccc, 4px 5px 1px #eee,
    6px 5px 1px #ccc, 5px 6px 1px #eee,
    7px 6px 1px #ccc;
`

export const SubtitleWarm = styled.h4 `
    color: #1b2029;
    font-size: 24px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 600;
`

export const ImgBrokenLight = styled.img `
    width: 350px;
    height: 350px;
`

export const TextContainer = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const DescriptionWarm = styled.h6 `
    color: #666666;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
`

export const BtnGoHome = styled.button `
    margin-top: 50px;
    padding: 10px 40px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    background-color: #e6e6e6;
    &:hover {
        cursor: pointer;
    }
`

export const ArrowIcon = styled(FontAwesomeIcon) `
    margin-left: 5px;
`