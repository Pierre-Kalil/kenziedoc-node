// import { TDocumentDefinitions } from "pdfmake/interfaces";
// import fs from "fs";
// import PdfPrinter from "pdfmake";

// export const PDFGenerator = async (
//   name: any,
//   email: any,
//   phone: any,
//   prescription: any,
//   medicName: any,
//   crm: any,
//   specialty: any,
//   address: any
// ) => {
//   const fonts = {
//     Courier: {
//       normal: "Courier",
//       bold: "Courier-Bold",
//       italics: "Courier-Oblique",
//       bolditalics: "Courier-BoldOblique",
//     },
//   };
//   const printer = new PdfPrinter(fonts);

//   const docDefinitions: TDocumentDefinitions = await {
//     defaultStyle: { font: "Courier" },
//     content: [
//       {
//         text: [
//           `\n\n \n\n`,
//           "Clinica ",
//           { text: "KenzieDoc", color: "blue" },
//           `\n\n`,
//         ],
//         style: "header",
//       },
//       {
//         text: [`\n\n \n\n Nome: ${name}\n\n`],
//         style: "subheader",
//       },
//       {
//         text: [`Email: ${email} \n\n`, `Telefone: ${phone}`],
//         style: "subheader",
//       },
//       { text: [`\n\n \n\n \n\n`] },
//       {
//         text: ["Prescrição: ", { text: `${prescription}`, italics: true }],
//         style: "bigger",
//         italics: false,
//       },
//       { text: [`\n\n \n\n \n\n`] },
//       {
//         text: [
//           `\n\n Doutor: ${medicName} `,
//           `\n\n CRM: ${crm}`,
//           `\n\n Especialidade: ${specialty}`,
//           `\n\n Endereço: ${address} `,
//         ],
//         style: "subheader",
//         bold: false,
//       },
//     ],
//     styles: {
//       header: {
//         fontSize: 18,
//         bold: true,
//       },
//       subheader: {
//         fontSize: 14,
//         bold: true,
//         margin: [20, 0, 40, 0],
//       },
//       bigger: {
//         fontSize: 15,
//         italics: true,
//         background: "#ccc",
//         margin: [20, 0, 40, 0],
//       },
//     },
//   };
//   const pdfDoc = printer.createPdfKitDocument(docDefinitions);

//   pdfDoc.pipe(fs.createWriteStream("src/utils/tmp/receita.pdf"));

//   pdfDoc.end();
// };
