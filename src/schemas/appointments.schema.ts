import * as yup from "yup";

export const AppointmentSchema = yup.object().shape({
  patient: yup
    .string()
    .typeError("The field 'patientId' must be typeof string!")
    .strict(true)
    .required("'CPF' is a required field!"),
  professional: yup
    .string()
    .typeError("The field 'professionalId' must be typeof string!")
    .strict(true)
    .required("'professionalId' is a required field!"),
  date: yup.date().required("'date' is a required field!"),
  finished: yup
    .boolean()
    .typeError("The field 'finished' must be typeof boolean!")
    .strict(true)
    .oneOf([false], "'false' value required for this field!")
    .required("'finished' is a required field!"),
});
