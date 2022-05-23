import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../actions/index';
import withRouter from '../withRouter';

function SignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserName = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSignIn = async () => {
    if (email.trim().length > 0 && password.trim().length > 0) {
      await props.signinUser({ email, password }, withRouter);
      setEmail('');
      setPassword('');
    }
  };

  return (

    <div className="postCard">
      <input className="userName" placeholder="Type username here" onChange={handleUserName} />

      <input className="password" placeholder="Type password here" onChange={handlePassword} />
      <button type="button" className="signInButton" onClick={handleSignIn}>SIGN IN</button>
    </div>

  );
}
export default withRouter(connect(null, { signinUser })(SignIn));
