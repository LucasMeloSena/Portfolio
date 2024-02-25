import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  height: auto;
  background: rgba(93, 97, 103, 0.36);
  margin-top: 80px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const ContainerForm = styled.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 150px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
`;

export const ContainerField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
`;

export const InputContact = styled.input`
  width: 400px;
  height: 30px;
  border: 1px solid #fff;
  border-radius: 5px;
  background: transparent;
  color: #fff;
  padding: 2px 8px 2px 8px;
  font-family: Poppins;
  font-weight: 400;
  font-size: 13px;
  transition: all 0.5s;
  &:focus {
    outline: none;
    transition: all 0.5s;
    box-shadow: #fff 0px 0px 8px;
  }
  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const MessageImage = styled.img`
  width: 464px;
  height: 464px;
  @media (max-width: 768px) {
    width: 264px;
    height: 264px;
  }
`;

export const LabelInput = styled.h3`
  font-family: Poppins;
  font-size: 16px;
  color: #fff;
  font-weight: 500;
`;

export const InputTextArea = styled.textarea`
  width: 400px;
  height: 100px;
  border: 1px solid #fff;
  border-radius: 5px;
  background: transparent;
  color: #fff;
  padding: 5px 8px 5px 8px;
  font-family: Poppins;
  font-weight: 400;
  font-size: 13px;
  transition: all 0.5s;
  &:focus {
    outline: none;
    transition: all 0.5s;
    box-shadow: #fff 0px 0px 8px;
  }
  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const BtnEnviar = styled.button`
  align-self: center;
  border: solid 1px #fff;
  background: transparent;
  border-radius: 5px;
  font-family: Poppins;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  width: 120px;
  padding: 5px 0px 5px 0px;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    background: #fff;
    color: #1b2029;
  }
`;

export const OverlayLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #5353537f;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
