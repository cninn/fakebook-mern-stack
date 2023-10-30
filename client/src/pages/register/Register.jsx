import axios from "axios";
import "./register.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();
  

  const handleClick = async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
      passwordAgain.current.setCustomValidity('Girilen şifreler aynı olmalıdır');
    }else{
        const user = {
          username:username.current.value,
          email:email.current.value,
          password:password.current.value,
          /* passwordAgain:passwordAgain.current.value */

        }
        try {
          await axios.post("/auth/register", user);
          navigate('/login');
        } catch (error) {
          console.log(error);
        }
      
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginleft">
          <h3 className="loginLogo">fakebook</h3>
          <span className="loginDesc">
            Arkadaşlarınla buluş ve tüm haberleri takip et tüm beğenileri topla
            ve dahası bir sürü dedikodu
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              name="username"
              placeholder="Kullanıcı Adı"
              className="loginInput"
              ref={username}
              required
            />

            <input
              name="email"
              placeholder="Email Adresi"
              className="loginInput"
              ref={email}
              required
              type="email"
            />
            <input
              name="password"
              placeholder="Şifre"
              className="loginInput"
              ref={password}
              required
              type="password"
              minLength={6}
            />
            <input
              name="passwordAgain"
              placeholder="Şifre Tekrar"
              className="loginInput"
              ref={passwordAgain}
              required
              type="password"
              minLength={6}
            />
            <button className="loginButton" type="submit">Hesap Oluştur</button>
            <div className="forgotBox">
              <span className="loginForgot">Google Hesabın ile Giriş Yap</span>
            </div>

            <div className="registerBox">
              <span className="loginForgot">Zaten bir hesabın var mı?</span>
              <button className="loginRegisterButton">Giriş Yap</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
