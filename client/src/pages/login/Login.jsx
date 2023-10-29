import './login.css'

export default function Login() {
  return (
    <div className='login'>

        <div className="loginWrapper">
            <div className="loginleft">
                <h3 className='loginLogo'>fakebook</h3>
                <span className="loginDesc">Arkadaşlarınla buluş ve tüm haberleri takip et tüm beğenileri topla ve dahası bir sürü dedikodu</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <button className="loginButton">Giriş Yap</button>
                    <div className="forgotBox">
                    <span className="loginForgot">Şifreni mi Unuttun ?</span>
                    <span className="loginForgot">Google Hesabın ile Giriş Yap</span>
                    </div>
                   
                   <div className="registerBox">
                   <span className="loginForgot">Henüz bir hesabın yok mu?</span>
                   <button className="loginRegisterButton">Hesap Oluştur</button>
                   </div>
                
                </div>
            </div>
        </div>

    </div>
  )
}
