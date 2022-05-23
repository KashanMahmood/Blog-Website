import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/index';
import withRouter from '../withRouter';

function SignUp(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authName, setAuthName] = useState('');

  const handleUserName = (event) => {
    setEmail(event.target.value);
  };
  const handleName = (event) => {
    setAuthName(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = async () => {
    if (email.trim().length > 0 && password.trim().length > 0) {
      await props.signupUser({ email, password, authName }, withRouter);
      setEmail('');
      setPassword('');
      setAuthName('');
    }
  };

  return (

    <div className="postCard">
      <input className="authName" placeholder="Type name here" onChange={handleName} />
      <input className="userName " placeholder="Type username here" onChange={handleUserName} />
      <input className="password " placeholder="Type password here" onChange={handlePassword} />
      <button type="button" className="signInButton" onClick={handleSignUp}>SIGN UP</button>
    </div>

  );
}
export default withRouter(connect(null, { signupUser })(SignUp));
