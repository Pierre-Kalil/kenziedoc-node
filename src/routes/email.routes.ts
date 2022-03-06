import { Router } from "express";
import {
  SendEmailController,
  SendPrescriptionEmailController,
} from "../controllers/email.controller";

const emailRouter = Router();

const sendMailController = new SendEmailController();
const sendPrescriptionEmailController = new SendPrescriptionEmailController();

emailRouter.post("/", sendMailController.handle);
emailRouter.post("/prescription", sendPrescriptionEmailController.handle);

export default emailRouter;
