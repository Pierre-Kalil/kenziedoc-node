import * as yup from "yup";

export const PatientSchema = yup.object().shape({
  cpf: yup
    .string()
    .typeError("The field 'cpf' must be typeof string!")
    .strict(true)
    .required("'CPF' is a required field!"),
  name: yup
    .string()
    .typeError("The field 'name' must be typeof string!")
    .strict(true)
    .required("'name' is a required field!"),
  age: yup
    .number()
    .typeError("The field 'age' must be typeof number!")
    .strict(true)
    .required("'age' is a required field!")
    .positive()
    .integer(),
  sex: yup
    .string()
    .typeError("The field 'sex' must be typeof string!")
    .strict(true)
    .required("'sex' is a required field!"),
  email: yup
    .string()
    .email("Invalid email. Correct format example: 'email@email.com'")
    .required("'email' is a required field!"),
  password: yup
    .string()
    .typeError("The field 'password' must be typeof string!")
    .strict(true)
    .required("'password' is a required field!")
    .min(4, "Minimun 4 digits!"),
  phone: yup
    .string()
    .typeError("The field 'phone' must be typeof string!")
    .strict(true)
    .required("'phone' is a required field!"),
  health_plan: yup
    .string()
    .typeError("The field 'health_plan' must be typeof string!")
    .strict(true)
    .required("'healph_plan' is a required field!"),
});
