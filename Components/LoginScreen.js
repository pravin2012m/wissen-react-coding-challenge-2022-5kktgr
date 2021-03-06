import React, { useState } from 'react';
import SubmitAddRequest from '../services';
const LoginScreen = ({ setShowHomePage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showInvalidUser, setShowInvalidUser] = useState(false);
  const [apiFaling, setapiFaling] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginloading, setLoginloading] = useState(false);
  const loginSubmit = (e) => {
    e.preventDefault();
    const obj = {
      email: email,
      password: password,
    };
    setLoginloading(true);
    SubmitAddRequest('https://reqres.in/api/login', obj)
      .then((response) => {
        if (response.error) {
          setShowInvalidUser(true);
          setIsChecked(false);
          setLoginloading(false);
        } else {
          setShowHomePage(true);
          setLoginloading(false);
          localStorage.setItem('token', response.token);
        }
      })
      .catch((error) => {
        setapiFaling(true);
        setLoginloading(false);
        setIsChecked(false);
      });
  };

  return (
    <div className="loginWraper">
      {!loading && <p>Loading Logo...</p>}
      <img
        src="https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH"
        alt="logo"
        width="50%"
        style={{
          opacity: !loading ? 0.2 : 1,
          transition: 'opacity .15s linear',
        }}
        onLoad={() => {
          setLoading(true);
        }}
      />
      <p className="heading">Hello there, Sign in to Continue</p>
      {showInvalidUser && (
        <div className="errorMesage">
          <p>Invalid username / password</p>
        </div>
      )}
      {apiFaling && (
        <div className="errorMesage">
          <p>Something went wrong, please check after some time</p>
        </div>
      )}
      <div>
        <form onSubmit={loginSubmit}>
          <div className="inputWraper">
            <p className="inputlabel">Email</p>
            <input
              type="email"
              className="formInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputWraper">
            <p className="inputlabel">Password</p>
            <input
              type="password"
              className="formInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="checkBoxWrap">
            <p className="checkBox">
              <input
                type="checkbox"
                className="checkboxinput"
                onChange={(e) => {
                  setIsChecked(!isChecked);
                  setapiFaling(false);
                }}
                checked={isChecked}
              />
            </p>
            <p className="checkBoxlabel">
              By creating or loging into an account, you are agreeging with our
              <strong> Terms & Conditions </strong>and
              <strong>Privacy Policys</strong>
            </p>
          </div>
          <div>{loginloading && <p>Loading...</p>}</div>

          <div className="inputWraper">
            <button
              className={
                isChecked && email !== '' && password !== ''
                  ? 'buttn-enabled'
                  : 'buttn-disabled'
              }
              disabled={
                isChecked && email !== '' && password !== '' ? false : true
              }
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
