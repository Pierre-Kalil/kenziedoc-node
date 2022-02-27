import { TDocumentDefinitions } from "pdfmake/interfaces";
import fs from "fs";

export const PDFGenerator = async (
  name: any,
  email: any,
  phone: any,
  prescription: any,
  medicName: any,
  crm: any,
  specialty: any,
  address: any
) => {
  const docDefinitions: TDocumentDefinitions = await {
    defaultStyle: { font: "Courier" },
    content: [
      {
        text: [
          `\n\n \n\n`,
          "Clinica ",
          { text: "KenzieDoc", color: "blue" },
          `\n\n`,
        ],
        style: "header",
      },
      {
        text: [`\n\n \n\n Nome: ${email} \n\n`],
        style: "subheader",
      },
      {
        text: [`Email: ${name} \n\n`, `Telefone: ${medicName}`],
        style: "subheader",
      },
      { text: [`\n\n \n\n \n\n`] },
      {
        text: ["Prescrição: ", { text: ` ${specialty}`, italics: true }],
        style: "bigger",
        italics: false,
      },
      { text: [`\n\n \n\n \n\n`] },
      {
        text: [
          `\n\n Doutor: ${crm} `,
          `\n\n CRM: ${address} `,
          `\n\n Especialidade: ${prescription}`,
          `\n\n Endereço: ${phone}`,
        ],
        style: "subheader",
        bold: false,
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
      subheader: {
        fontSize: 14,
        bold: true,
        margin: [20, 0, 40, 0],
      },
      bigger: {
        fontSize: 15,
        italics: true,
        background: "#ccc",
        margin: [20, 0, 40, 0],
      },
    },
  };
};
