export interface User {
  username: string;
  email: string;
}

export interface SignInFormikValues {
  email: string;
  password: string;
  showPassword: boolean;
}
