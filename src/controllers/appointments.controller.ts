import { Request, Response } from "express";

import {
  CreateAppointmentService,
  AppointmentsListService,
  UpdateAppointmentService,
  DeleteAppointmentService,
  AppointmentByPatientService,
  AppointmentByProfessionalService,
  AppointmentsTomorrowService,
  WaitListService,
} from "../services/appointment.service";
import ErrorHandler from "../utils/errors";
import { IAppointmentData } from "../types";

export class CreateAppointmentController {
  async handle(req: Request, res: Response) {
    const createAppointmentService = new CreateAppointmentService();
    const data = req.body;
    console.log(data);
    const { professional, patient, date, finished }: IAppointmentData = data;
    try {
      if (!professional || !patient || !date) {
        throw new ErrorHandler(
          "One or more of the body fields is missing!",
          400
        );
      }

      if (
        typeof professional !== "string" ||
        typeof patient !== "string" ||
        typeof date !== "string"
      ) {
        throw new ErrorHandler("This field must be typeof string!", 400);
      }
      if (typeof finished !== "boolean") {
        throw new ErrorHandler(
          "This field must be typeof boolean or it is missing!",
          400
        );
      }

      const appointment = await createAppointmentService.execute(data);

      res.status(201).json(appointment);
    } catch (error: any) {
      return res.status(error.statusCode).json({ message: error.message });
    }
  }
}

export class AppointmentsListController {
  async handle(req: Request, res: Response) {
    try {
      const appointmentsListService = new AppointmentsListService();
      const list = await appointmentsListService.execute();

      return res.status(200).json(list);
    } catch (err: any) {
      return res.status(err.statusCode).json(err.message);
    }
  }
}

export class UpdateAppointmentController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    const updateAppointmentService = new UpdateAppointmentService();
    try {
      const toUpdate = updateAppointmentService.execute(id, data);
      return res.status(200).json(toUpdate);
    } catch (err: any) {
      return res.status(err.statusCode).json({ message: err.message });
    }
  }
}

export class DeleteAppointmentController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deleteAppointmentService = new DeleteAppointmentService();

      const toDelete = deleteAppointmentService.execute(id);
      return res.status(204).json(toDelete);
    } catch (err: any) {
      return res.status(err.statusCode).json({ message: err.message });
    }
  }
}

export class AppointmentByPatientController {
  async handle(req: Request, res: Response) {
    const appointmentByPatientService = new AppointmentByPatientService();
    const { cpf } = req.params;

    try {
      const appointments = await appointmentByPatientService.execute(cpf);

      return res.status(200).json(appointments);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
export class AppointmentByProfessionalController {
  async handle(req: Request, res: Response) {
    const appointmentByProfessionalService =
      new AppointmentByProfessionalService();
    const { crm } = req.params;

    try {
      const appointments = await appointmentByProfessionalService.execute(crm);

      return res.status(200).json(appointments);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}

export class AppointmentsTomorrowController {
  async handle(req: Request, res: Response) {
    const appointmentsTomorrowService = new AppointmentsTomorrowService();

    try {
      const appointments = await appointmentsTomorrowService.execute(
        "2022-02-20"
      );

      return res.status(200).json(appointments);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
export class WaitListController {
  async handle(req: Request, res: Response) {
    const waitListService = new WaitListService();
    const { crm } = req.params;

    try {
      const waitListSize = await waitListService.execute(crm);

      return res
        .status(200)
        .json({ message: `wait list size is: ${waitListSize}` });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
