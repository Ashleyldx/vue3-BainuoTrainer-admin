export interface LoginForm {
  phone: string
  password: string
}

export class LoginData{
  formData: LoginForm = {
    phone: "",
    password:""
  }
}