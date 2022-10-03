import React, { useEffect, useState } from "react";

import { ACCESS_TOKEN, GITHUB_AUTH_URL } from "../../constants";
import { getCurrentUser } from "../../util/APIUtils";

export default function Login() {
  const [user, setUser] = useState();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getCurrentUser().then(
      (result) => {
        console.log(result);
        setUserName(result["name"]);
        setUser(result["name"]);
      },
      (error) => {
        console.log("Error getting user", error);
      }
    );
  }, []);

  function handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    alert("You're safely logged out!");
  }

  return (
    <>
      <h1>login</h1>
      <h2>GitHub Oauth</h2>
      <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
        Log in with Github
      </a>
      <button onClick={handleLogout}>Logout</button>
      <div>Logged in as: {userName}</div>
    </>
  );
}
