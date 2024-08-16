import { useEffect, useState } from "react";
import { Input, Button, Heading, RegistrationInfo } from "../../components"
import { Link } from "react-router-dom";
import { SCRegistrationPage } from "./RegistrationPage.styled";

export const RegistrationPage = () => {
    // const [name_surname, setName_surname] = useState("");
    // const [age, setAge] = useState("");
    // const [city, setCity] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [password, setPAssword] = useState("");

    // const[buttonError, setButtonError] = useState(true);
   
    // useEffect(()=>{
    //     name_surname.length > 0 && age.length > 0 && city.length > 0 && email.length > 0 && phone.length > 0 && password.length >0
    //         ? setButtonError(false)
    //         : setButtonError(true)
    // }, [name_surname, age, city, email, phone, password])
    return (
      <SCRegistrationPage>
      <Heading variant={"h1"} text={"Регистрация"}/>
      <form action="#">
        <Input type={"text"} placeholder={"Имя и фамилия"}/>
        <Input type={"number"} placeholder={"Возраст"}/>
        <Input type={"text"} placeholder={"Город"}/>
        <Input type={"email"} placeholder={"Электроннная почта"}/>
        <Input type={"tel"} placeholder={"Номер телефона"}/>
        <Input type={"password"} placeholder={"Пароль"}/>
        <Button type={"button"} text={"Зарегистрироваться"}/>
      </form>
      </SCRegistrationPage>
    );
};