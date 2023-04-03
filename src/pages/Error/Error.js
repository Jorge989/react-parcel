import React from "react";
import ErrorImage from "../../img/404.png";
import "./Error.scss";
const Error = () => {
  return (
    <div className="container-error">
      <h1>Pagina não encontrada!</h1>
      <img className="img-error" src={ErrorImage} alt="404" />
    </div>
  );
};
export default Error;
