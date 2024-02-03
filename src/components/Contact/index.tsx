import {
  ContactContainer,
  ContainerForm,
  ContainerInputs,
  ContainerField,
  MessageImage,
  LabelInput,
  InputContact,
  InputTextArea,
  BtnEnviar,
} from "src/styles/components/Contact/Contact.style";
import { Title } from "@/PortfolioUI";
import { ImgMessage } from "src/assets/img/index";

function Contact() {
  return (
    <>
      <ContactContainer>
        <Title text={"Leave a message!"} />
        <ContainerForm>
          <MessageImage src={ImgMessage.src} />
          <ContainerField>
            <ContainerInputs>
              <LabelInput>Name:</LabelInput>
              <InputContact type="text" />
            </ContainerInputs>
            <ContainerInputs>
              <LabelInput>Email:</LabelInput>
              <InputContact type="email" />
            </ContainerInputs>
            <ContainerInputs>
              <LabelInput>Cell:</LabelInput>
              <InputContact type="text" />
            </ContainerInputs>
            <ContainerInputs>
              <LabelInput>Message:</LabelInput>
              <InputTextArea />
            </ContainerInputs>
            <BtnEnviar>SEND</BtnEnviar>
          </ContainerField>
        </ContainerForm>
      </ContactContainer>
    </>
  );
}

export default Contact;
