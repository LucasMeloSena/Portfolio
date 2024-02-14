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
  OverlayLoader,
} from "src/styles/components/Home/Contact/Contact.style";
import { Title } from "@/PortfolioUI";
import { ImgMessage } from "src/assets/img/index";
import { InputMask } from "@react-input/mask";
import { HTMLAttributes, forwardRef, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import Swal from "sweetalert2";
require("dotenv").config();

interface IContact extends HTMLAttributes<HTMLDivElement> {}

const Contact = forwardRef<HTMLDivElement, IContact>((props, ref) => {
  const [celular, setCelular] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");
  const [assunto, setAssunto] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

  const handleSendForm = async () => {
    setLoader(true);
    const endpoint = process.env.ENDPOINT || "";
    await fetch(`${endpoint}/api/v1/email`, {
      method: "POST",
      body: JSON.stringify({
        from: email,
        subject: assunto,
        text: mensagem,
        name: nome,
        cell: celular,
      }),
    })
      .then(async (response) => {
        setLoader(false);
        const result = await response.json();
        Swal.fire({
          title: result.title,
          text: result.message,
          icon: result.icon,
          confirmButtonText: "OK",
        });
      })
      .catch(() => {
        setLoader(false);
        Swal.fire({
          title: "Erro!",
          text: "Ocorreu um erro ao tentar enviar a mensagem! Por favor, se o problema persistir, entre em contato comigo!",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <>
      <ContactContainer {...props} ref={ref}>
        {loader && (
          <OverlayLoader>
            <TailSpin
              height="80"
              width="80"
              color="#6D9DD0"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </OverlayLoader>
        )}

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
