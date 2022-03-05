import { Request, Response } from "express";
import { json } from "stream/consumers";
import {
  createMail,
  sendPrescription,
  sendAppointmentEmail,
} from "../services/email.service";
import { PDFGenerator } from "../utils/pdfGenerator";

export class SendEmailController {
  async handle(req: Request, res: Response) {
    const data = req.body;

    try {
      await createMail(data);
      return res.json({ Status: "Email successfully sent!" });
    } catch (error) {
      console.log(error);
    }
  }
}

export class SendPrescriptionEmailController {
  async handle(req: any, res: Response) {
    const data = req.body;
    const attachments = req.file;
    attachments.filename = req.file.originalname;

    try {
      await sendPrescription(data.user, data.medic, data.email, data.specialty);
      return res.json({ Status: "Email successfully sent!" });
    } catch (error) {
      console.log(error);
    }
  }
}

export class TestPdrCreate {
  async handle(req: any, res: Response) {
    PDFGenerator(
      "Paciente",
      "pacient@mail.com",
      "51992883313",
      "tomar asirina",
      "doutor",
      "11111-rs",
      "otorrino",
      "Rua strit"
    );
    return res.json({ message: "gerou" });
  }
}
