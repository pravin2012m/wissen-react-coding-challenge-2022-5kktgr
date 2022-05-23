import React, { useState } from 'react';
import SubmitAddRequest from '../services';
const LoginScreen = ({ setShowHomePage }) => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [isChecked, setIsChecked] = useState(false);
  const [showInvalidUser, setShowInvalidUser] = useState(false);
  const [apiFaling, setapiFaling] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const loginSubmit = (e) => {
    e.preventDefault();
    const obj = {
      email: email,
      password: password,
    };
    setLoading(true);
    SubmitAddRequest('https://reqres.in/api/login', obj)
      .then((response) => {
        if (response.error) {
          setShowInvalidUser(true);
          setIsChecked(false);
          setLoading(false);
        } else {
          setShowHomePage(true);
          localStorage.setItem('token', response.token);
          setLoading(false);
        }
      })
      .catch((error) => {
        setapiFaling(true);
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
              <strong> Terms & Conditions </strong>and{' '}
              <strong>Privacy Policys</strong>
            </p>
          </div>

          <div className="inputWraper">
            <button
              className={
                isChecked && email !== null && password !== null
                  ? 'buttn-enabled'
                  : 'buttn-disabled'
              }
              disabled={
                isChecked && email !== null && password !== null ? false : true
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
