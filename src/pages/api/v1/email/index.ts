import { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "src/infra/email";

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    try {
      const { from, subject, text, name, cell } = JSON.parse(req.body);

      if (!from || from.toString().trim() == "") {
        throw new Error("Empty email field!");
      }
      if (!subject || subject.toString().trim() == "") {
        throw new Error("Empty subject field!");
      }
      if (!text || text.toString().trim() == "") {
        throw new Error("Empty message field!");
      }
      if (!name || name.toString().trim() == "") {
        throw new Error("Empty name field!");
      }
      if (!cell || cell.toString().trim() == "") {
        throw new Error("Empty cell field!");
      }

      await transporter.sendMail({
        from: `"${name}" <${from}>`,
        to: "melolucasena@gmail.com",
        subject: subject,
        text: text,
        html: `Olá Lucas! <br> Meu nome é ${name} - Meu celular é ${cell} - Meu email é ${from} <br> <br> <b>Mensagem: </b>${text}`,
      });

      res
        .status(200)
        .send({
          message: "Email successfully sent!",
          title: "Success!",
          icon: "success",
        });
    } catch (error) {
      res
        .status(500)
        .send({
          message: (error as Error).message,
          title: "Error!",
          icon: "error",
        });
    }
  } else {
    res.status(405).end();
  }
}

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  sendEmail(req, res);
}
