import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signoutUser } from '../actions/index';
import withRouter from '../withRouter';

function NavBar(props) {
  const handleSignOut = async () => {
    await props.signoutUser(withRouter);
  };

  const renderNavBar = () => {
    if (props.auth) {
      return (<li><NavLink to="/" onClick={handleSignOut}>Sign Out</NavLink></li>);
    } else {
      return (
        <div className="SignIn/Out">
          <li><NavLink to="/signIn"> Sign In</NavLink></li>
          <li><NavLink to="/signUp">Sign Up</NavLink></li>
        </div>
      );
    }
  };

  return (
    <nav>
      <ul className="navLinks">
        <li><NavLink exact to="/"><i className="fa-solid fa-house fa-2xl" /></NavLink></li>
        <li><NavLink to="/posts/new"><i className="fa-solid fa-square-plus fa-2xl" /></NavLink></li>
        {renderNavBar()}
      </ul>
    </nav>
  );
}
const mapStateToProps = (state) => (
  {
    auth: state.auth.authenticated,
  }
);
export default withRouter(connect(mapStateToProps, { signoutUser })(NavBar));
