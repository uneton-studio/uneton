import logo from "../../../assets/logo.svg";
import classNames from "classnames";
import styles from "./MainMenu.module.scss";

function MainMenu() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img src={logo} className="logo" alt="Uneton" />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarMenu"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 gap-4">
            <li className="nav-item text--medium">
              <a className="nav-link" href="#">
                Start
              </a>
            </li>
            <li className="nav-item text--medium">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-ite text--medium">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item text--medium">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
          <button
            className={classNames(
              styles.btn,
              "btn rounded-pill text--medium px-4 ms-4"
            )}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default MainMenu;
