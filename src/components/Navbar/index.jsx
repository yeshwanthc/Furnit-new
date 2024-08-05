/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const menuItems = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/about" },
  { label: "Services", link: "/services" },
  { label: "Products", link: "/products" },
  { label: "Gallery", link: "/gallery" },
  { label: "Contact Us", link: "/contact" },
];

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const handleMobileDropdown = () => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };

  return (
    <>
      <nav className="navbar change navbar-expand-lg" ref={navbarRef}>
        <div className="container">
          <Link href="/">
            <a className={`logo ${logoClass && logoClass}`}>
              <img src={appData.lightLogo} alt="logo" ref={logoRef} width={140} />
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={handleMobileDropdown}
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {menuItems.map((item) => (
                <li className="nav-item" key={item.label}>
                  <Link href={item.link}>
                    <a className="nav-link">{item.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
