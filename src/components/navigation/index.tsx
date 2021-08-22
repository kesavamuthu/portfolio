import React, { ReactElement } from "react";
import Button from "../customButton";
import './style.scss';

interface Props {}

function Nav({}: Props): ReactElement {
  const options = [
    "Home",
    "Services",
    "Testimonial",
    "FAQ",
    "Portfolio",
    "Contacts",
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="images/logo.png" alt="logo_image" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <NavSideOptions options={options} />
          </ul>
          <Button text="+91 9047343744" icon={<i className="fas fa-phone" />}/>
        </div>
      </div>
    </nav>
  );
}

function NavSideOptions({
  active,
  options,
}: {
  active?: boolean;
  options: Array<string>;
}) {
  return (
    <>
      {options.map((option, i) => {
        return (
          <li className="nav-item" key={i}>
            <a className="nav-link" href="#">
              {option}
            </a>
          </li>
        );
      })}
    </>
  );
}

export default Nav;