import { Link } from "react-router-dom";
import { Paragraph, Span, Image } from "../../components";


interface RegistrationInfo {
  linkText: string;
  hasAccountText: string;
  authWithText: string;
  navigatePath: string;
}

const RegistrationInfo = ({linkText, hasAccountText, authWithText, navigatePath}: RegistrationInfo)=> {
    return (
        <div className="registration">
        <Span>
         {hasAccountText} <Link to={navigatePath}>{linkText}</Link>
        </Span>
        {/* p & img заменить на компоненты */}
        <Paragraph>{authWithText}</Paragraph>
        <div className="icons-wrapper">
          <Link className="reg__link google-link" to="/">
          <Image src={"./img/icons/google.svg"} alt={"Google"}/>
            {/* <img src="./img/icons/google.svg" alt="Google" /> */}
          </Link>
          <Link className="reg__link google-plus-link" to="/">
          <Image src={"./img/icons/google.svg"} alt={"Google Plus"}/>
            {/* <img src="./img/icons/google-plus.svg" alt="Google Plus" /> */}
          </Link>
          <Link className="reg__link yandex-link" to="/">
          <Image src={"./img/icons/yandex.svg"} alt={"Yandex"}/>
            {/* <img src="./img/icons/yandex.svg" alt="Yandex" /> */}
          </Link>
          <Link className="reg__link mail-ru-link" to="/">
          <Image src={"./img/icons/mail-ru.svg"} alt={"Mail.ru"}/>
            {/* <img src="./img/icons/mail-ru.svg" alt="Mail.ru" /> */}
          </Link>
        </div>
      </div>
    );
};
export default RegistrationInfo