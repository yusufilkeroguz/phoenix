import React, { useState } from "react";

import { doSignInWithEmailAndPassword } from "../Firebase";
import { withAuthorization } from "../Session";

import "../../styles/signIn.scss";
import Logo from "../Logo";

function onSubmit(e, { email, pass, errorHandle }) {
  e.preventDefault();

  doSignInWithEmailAndPassword(email, pass)
    .catch(e => errorHandle(e))
}

function onInputChange(e, callback) {
  return callback(e.target.value);
}

function SignIn() {
  const [email, changeEmail] = useState(null);
  const [pass, changePass] = useState(null);
  const [error, changeErrorStatus] = useState(null);

  const isInvalid = (pass === '' || pass === null) || (email === '' || email === null);

  return (
    <React.Fragment>
      <div className="sign-in">
        <form
          action={'#'}
          method={'POST'}
          className={"sign-in-form"}
          onSubmit={e => onSubmit(e, { email, pass, errorHandle: changeErrorStatus })}
        >
          <div className="sign-in-form__logo">
            <Logo width={204} height={140}/>
          </div>
          <input
            type="text"
            placeholder="Email"
            id="email"
            className={"sign-in-form__input"}
            onChange={e => onInputChange(e, changeEmail)}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className={"sign-in-form__input"}
            onChange={e => onInputChange(e, changePass)}
          />
          <button disabled={isInvalid} type="submit" className={"sign-in-form__submit"}>
            Sign In
          </button>

          {error && <p className="error">{error.message}</p>}
        </form>
      </div>
    </React.Fragment>
  )
}

const condition = authUser => !authUser;

export default withAuthorization(condition)(SignIn);