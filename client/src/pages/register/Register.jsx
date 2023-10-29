import "./register.css";

export default function Register() {
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
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="City/Country" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Hesap Oluştur</button>
            <div className="forgotBox">
              <span className="loginForgot">Google Hesabın ile Giriş Yap</span>
            </div>

            <div className="registerBox">
              <span className="loginForgot">Zaten bir hesabın var mı?</span>
              <button className="loginRegisterButton">Giriş Yap</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
