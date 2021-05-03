import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import { DataContext } from "../store/GlobalState";

function Navbar() {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const { auth, cart } = state;

  const isActive = (r) => {
    if (r === router.pathname) {
      return " active";
    } else {
      return "";
    }
  };

  const handleLogout = () => {
    Cookies.remove("refreshtoken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    dispatch({
      type: "NOTIFY",
      payload: { success: "Logged out successfully" },
    });
  };

  const loggedRouter = () => {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            src={auth.user.avatar}
            alt={auth.user.avatar}
            style={{
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              transform: "translateY(-3px)",
              marginRight: "3px",
            }}
          />
          {auth.user.name}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">
            <i class="fas fa-user"></i> Profile
          </a>
          <button className="dropdown-item" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </li>
    );
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <Link href="/">
        <a className="navbar-brand">E-commerce</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/cart">
              <a className={"nav-link" + isActive("/cart")}>
                <i
                  className="fas fa-shopping-cart position-relative"
                  aria-hidden="true"
                >
                  <span
                    className="position-absolute"
                    style={{
                      padding: "3px 6px",
                      background: "#ed143dc2",
                      borderRadius: "50%",
                      top: "-10px",
                      right: "-10px",
                      color: 'white',
                      fontSize: "10px",
                    }}
                  >
                    {cart.length}
                  </span>
                </i>{" "}
                Cart
              </a>
            </Link>
          </li>
          {Object.keys(auth).length === 0 ? (
            <li className="nav-item">
              <Link href="/signin">
                <a className={"nav-link" + isActive("/signin")}>
                  <i className="fas fa-sign-in-alt" aria-hidden="true"></i> Sign
                  In
                </a>
              </Link>
            </li>
          ) : (
            loggedRouter()
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
