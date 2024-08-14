import { Input, Button, Heading, RegistrationInfo } from "../../components"
import { Link } from "react-router-dom";
import { SCLoginPage } from "./LoginPage.styled";

export const LoginPage = () => {
  return (
    <SCLoginPage>
      <Heading variant={"h1"} text={"Авторизация"}/>
      <form action="#">
        <Input type={"tel"} placeholder={"Номер телефона"}/>
        <Input type={"password"} placeholder={"Пароль"}/>
        <Link to="/main"><Button type={"button"} text={"Войти"}/></Link>
      </form>
      <Link to="/">Забыли пароль?</Link>
      <RegistrationInfo
      authWithText={"Войти с помощью"}
      hasAccountText={"У вас нет аккаунта?" }
      linkText={"Зарегистрироваться"}/>
    </SCLoginPage>
  );
};
