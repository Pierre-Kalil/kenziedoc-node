import nodemailer from "nodemailer";
import hbs, {
  NodemailerExpressHandlebarsOptions,
} from "nodemailer-express-handlebars";
import path from "path";

interface EmailBody {
  to: string;
  subject: string;
  text: string;
}

export const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "kenziedoc.app@gmail.com",
    pass: "123456@Az",
  },
});

export const mailOptions = (to: string, subject: string, text: string) => {
  return {
    from: "no-reply@kenziedoc.com",
    to,
    subject,
    text,
  };
};

export const mailTemplateOptions = (
  to: string,
  subject: string,
  template: string,
  context: any
) => {
  return {
    from: "no-reply@kenziedoc.com",
    to,
    subject,
    template,
    context,
  };
};

export const attachmentEmailTemplateOptions = (
  to: string,
  subject: string,
  template: string,
  context: any
) => {
  return {
    from: "no-reply@kenziedoc.com",
    to,
    subject,
    template,
    context,
    attachments: [
      {
        filename: "receita.pdf",
        path: path.resolve(__dirname, "..", "utils/tmp/receita.pdf"),
      },
    ],
  };
};

export const createMail = (body: EmailBody) => {
  const { to, subject, text } = body;

  const email = mailOptions(to, subject, text);

  transport.sendMail(email, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
  return email;
};

export const sendAppointmentEmail = async (
  user: string | undefined,
  email: string | undefined,
  medic: string | undefined,
  specialty: string | undefined,
  date: string,
  hour: string
) => {
  const subject = "Marcação de consulta";

  const handlebarOption: NodemailerExpressHandlebarsOptions = {
    viewEngine: {
      partialsDir: path.resolve(__dirname, "..", "templates"),
      defaultLayout: undefined,
    },
    viewPath: path.resolve(__dirname, "..", "templates"),
  };

  transport.use("compile", hbs(handlebarOption));

  date = date.split("-").reverse().join("-");

  const message = mailTemplateOptions(email || "", subject, "appointment", {
    user,
    medic,
    specialty,
    date,
    hour,
  });
  console.log(message);
  transport.sendMail(message, function (err, info) {
    if (err) {
      return console.log(err);
    } else {
      console.log(info);
    }
  });
};

export const sendCancelationEmail = async (
  user: string,
  medic: string,
  email: string,
  specialty: string,
  date: string,
  hour: string
) => {
  const subject = "Cancelamento de consulta";

  const handlebarOption: NodemailerExpressHandlebarsOptions = {
    viewEngine: {
      partialsDir: path.resolve(__dirname, "..", "templates"),
      defaultLayout: undefined,
    },
    viewPath: path.resolve(__dirname, "..", "templates"),
  };

  transport.use("compile", hbs(handlebarOption));

  specialty = specialty.toLowerCase();

  const message = mailTemplateOptions(email, subject, "cancel.appointment", {
    user,
    medic,
    specialty,
    date,
    hour,
  });

  transport.sendMail(message, function (err, info) {
    if (err) {
      return console.log(err);
    } else {
      console.log(info);
    }
  });
};

export const sendPrescription = async (
  user: string,
  email: string,
  medic: string,
  specialty: string
) => {
  const subject = "Prescrição Médica";

  const handlebarOption: NodemailerExpressHandlebarsOptions = {
    viewEngine: {
      partialsDir: path.resolve(__dirname, "..", "templates"),
      defaultLayout: undefined,
    },
    viewPath: path.resolve(__dirname, "..", "templates"),
  };

  transport.use("compile", hbs(handlebarOption));

  specialty = specialty.toLocaleLowerCase();

  const message = attachmentEmailTemplateOptions(
    email,
    subject,
    "prescription",
    {
      user,
      medic,
      specialty,
    }
  );

  transport.sendMail(message, function (err, info) {
    if (err) {
      return console.log(err);
    } else {
      console.log(info);
    }
  });
};
