import React from "react";
import "../styles/notfound.scss";

const NotFound: React.FC = () => {
  return (
    <div className="notfound">
      <div className="content text-center">
        <h1>404</h1>

        <h3>Well... this is awkward.</h3>

        <p>
          The page you’re looking for has either:
          <br />
          • Gone on vacation 🌴
          <br />
          • Been abducted by aliens
          <br />
          • Or never existed in the first place (oops)
        </p>

        <button
          className="btn-home"
          onClick={() => (window.location.href = "/")}
        >
          Take me somewhere safe
        </button>
      </div>
    </div>
  );
};

export default NotFound;