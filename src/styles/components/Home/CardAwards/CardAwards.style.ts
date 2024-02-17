import styled from "styled-components";

export const ContainerCardAwards = styled.div`
margin-top: 30px;
border-radius: 20px;
width: 280px;
height: 300px;
display: grid;
grid-template-columns: 100%;
grid-template-rows: 10% 70% 20%;
justify-content: flex-start;
align-items: flex-start;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const ContainerTexto = styled.div`
padding: 20px;
width: 100%;
height: 100%;
`

export const ConstainerDescricao = styled.div`
padding: 20px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 7px;
`

export const ContainerCompany = styled.div`
width: 100%;
height: 60px;
background-color: rgba(93, 97, 103, 0.36);
padding: 0px 10px 0px 10px;
display: grid;
grid-template-columns: 20% 45% 20%;
justify-content: flex-start;
align-items: center;
gap: 5px;
border-radius: 20px;
`

export const ImgLogoCompany = styled.img`
width: 60px;
height: 60px;
`

export const BtnView = styled.button`
  margin-left: 20px;
  border: none;
  border-radius: 15px;
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  width: 60px;
  padding: 5px 0px 5px 0px;
  transition: all 0.5s;
  background: rgb(27 32 41 / 24%);
  color: #FFF;
  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    background-color: #FFF;
    color: #1b2029;
  }
`
