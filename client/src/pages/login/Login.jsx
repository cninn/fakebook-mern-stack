import "./login.css";
import { useRef } from "react";
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
 
  };
  console.log(user);
 
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
              type="email"
              name="email"
              placeholder="Email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              minLength={6}
              className="loginInput"
              ref={password}
            />
            <button className="loginButton">
              {isFetching ? <CircularProgress color="inherit" size="20px"/> : "Giriş Yap"}
            </button>
            <div className="forgotBox">
              <span className="loginForgot">Şifreni mi Unuttun ?</span>
              <span className="loginForgot">Google Hesabın ile Giriş Yap</span>
            </div>

            <div className="registerBox">
              <span className="loginForgot">Henüz bir hesabın yok mu?</span>
              <button className="loginRegisterButton">  {isFetching ? <CircularProgress color="inherit" size="20px"/> : "Hesap oluştur"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
