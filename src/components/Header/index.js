import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { AuthUserContext } from "../Session";
import Logo from "../Logo";
import SignOut from "../SignOut";

library.add(faUser);

function Header() {
  return (
    <AuthUserContext.Consumer>
      {
        authUser => (
          <div className={'header'}>
            <div className="header__logo">
              <Logo />
            </div>
            <div className="header__user">
              <FontAwesomeIcon icon={faUser} />

              <div className="header__user-options">
                <div className="header__user-option">
                  {authUser.email}
                </div>

                <div className="header__user-option--sign-out">
                  <SignOut />
                </div>
              </div>
            </div>
          </div>
        )
      }
    </AuthUserContext.Consumer>
  )
}

export default Header;