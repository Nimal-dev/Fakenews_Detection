import React from "react";
import { Link } from "react-router-dom";
function Header(props) {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <>
      <header className="site-header mb-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-12 col-12 d-flex align-items-center">
              <Link
                to="/"
                className="site-header-text d-flex justify-content-center align-items-center me-auto"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                <span>Fake News Detection</span>
              </Link>

              {props?.logout ? (
                <a
                  className="site-header-text d-flex justify-content-center align-items-center me-auto"
                  onClick={() => logout()}
                >
                  <span>Logout</span>
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
