import React, { Component, useEffect } from "react";
import { ACCESS_TOKEN } from "../../constants";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function OAuth2RedirectHandler() {
  useEffect(() => {
    console.log("Did we navigate? 2");

    // TODO This seems to work, but doesn't seem to allow for calling 'user' endpoint
    navigate("/login");
  }, []);

  const location = useLocation();

  let navigate = useNavigate();

  const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

    // console.log("Processing getUrlParameter: ", name);
    var results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  console.log("OAUTH REDIRECT NOW");
  const token = getUrlParameter("token");
  const error = getUrlParameter("error");

  console.log("TOKEN", token);
  console.log("ERROR", error);

  let returnNavigation = null;

  if (token) {
    console.log("Save Access Token: ", token);
    localStorage.setItem(ACCESS_TOKEN, token);
    console.log("Redirect to '/'");
    navigate("/");
    console.log("Did we navigate?");
  } else {
    console.log("No token found");
    navigate("/login");
  }
}

export default OAuth2RedirectHandler;
