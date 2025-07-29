import * as Yup from "yup";

const signUpFormSchema = Yup.object({
  username: Yup.string().required().label("Username"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/gm,
      "Password should be minimum of 8 characters, at least one uppercase, one lowercase, number and one special character."
    ),
});

export default signUpFormSchema;
