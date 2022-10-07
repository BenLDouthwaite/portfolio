import { ACCESS_TOKEN } from "../../constants";
import { Navigate, useLocation } from "react-router-dom";

function OAuth2RedirectHandler() {
  const location = useLocation();

  const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

    var results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  const token = getUrlParameter("token");
  const error = getUrlParameter("error");

  let returnNavigation = null;

  if (token) {
    localStorage.setItem(ACCESS_TOKEN, token);
    returnNavigation = "/";
  } else {
    returnNavigation = "/login";
  }

  return <Navigate to={returnNavigation} replace />;
}

export default OAuth2RedirectHandler;
