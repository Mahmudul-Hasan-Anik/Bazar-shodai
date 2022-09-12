import React, { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";
import Forgot from "./Forgot";

const Auth = () => {
  const [login, setLogin] = useState(true);
  const [registration, setRegistration] = useState(false);
  const [forget, setForget] = useState(false);

  return (
    <>
      {login ? (
        <Login
          registration={registration}
          setRegistration={setRegistration}
          setLogin={setLogin}
        />
      ) : (
        <Registration
          login={login}
          setRegistration={setRegistration}
          setLogin={setLogin}
        />
      )}
    </>
  );
};

export default Auth;
