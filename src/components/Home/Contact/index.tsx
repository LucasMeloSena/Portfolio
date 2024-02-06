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
} from "src/styles/components/Home/Contact/Contact.style";
import { Title } from "@/PortfolioUI";
import { ImgMessage } from "src/assets/img/index";
import { InputMask } from "@react-input/mask";
import { HTMLAttributes, forwardRef, useState } from "react";

interface IContact extends HTMLAttributes<HTMLDivElement> {}

const Contact = forwardRef<HTMLDivElement, IContact>((props, ref) => {
  const [celular, setCelular] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [nome, setNome] = useState<string>();
  const [mensagem, setMensagem] = useState<string>();
  const [assunto, setAssunto] = useState<string>();

  const handleSendForm = () => {};

  return (
    <>
      <ContactContainer {...props} ref={ref}>
        <Title text={"Leave a message!"} />
        <ContainerForm>
          <MessageImage src={ImgMessage.src} />
          <ContainerField>
            <ContainerInputs>
              <LabelInput>Name:</LabelInput>
              <InputContact
                type="text"
                maxLength={50}
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />
            </ContainerInputs>
            <ContainerInputs>
              <LabelInput>Email:</LabelInput>
              <InputContact
                type="email"
                maxLength={50}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </ContainerInputs>
            <ContainerInputs>
              <LabelInput>Subject:</LabelInput>
              <InputContact
                type="text"
                maxLength={50}
                value={assunto}
                onChange={(event) => setAssunto(event.target.value)}
              />
            </ContainerInputs>
            <ContainerInputs>
              <LabelInput>Cell:</LabelInput>
              <InputMask
                mask="+__ (__) 9 ____-____"
                replacement={{ _: /\d/ }}
                component={InputContact}
                type="text"
                value={celular}
                onChange={(event) => setCelular(event.target.value)}
              />
            </ContainerInputs>
            <ContainerInputs>
              <LabelInput>Message:</LabelInput>
              <InputTextArea
                value={mensagem}
                onChange={(event) => setMensagem(event.target.value)}
              />
            </ContainerInputs>
            <BtnEnviar onClick={handleSendForm}>SEND</BtnEnviar>
          </ContainerField>
        </ContainerForm>
      </ContactContainer>
    </>
  );
});

export default Contact;
