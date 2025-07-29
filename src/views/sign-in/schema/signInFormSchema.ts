import * as Yup from "yup";

const signInFormSchema = Yup.object({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("Password"),
});

export default signInFormSchema;
