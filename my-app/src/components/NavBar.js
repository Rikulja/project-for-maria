import styled from "styled-components";

const NavBar = () => {
  return (
    <NavStyled>
      <div className="container-navbar">
        <div className="header-inner">
          <div className="logo">
            <img src="/imgs/ampoule-logo.png" alt="ampoule" />
            Ampoules Control
          </div>
          <div class="header-menu">
            <a className="nav-link" href="/">
              Home
            </a>
          </div>
        </div>
      </div>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  background-color: #eeeff2;
  border-bottom: 5px solid #0a0a0a33;
  height: 10vh;
  img {
    margin-right: 0.5rem;
    width: auto;
    height: 30px;
    max-width: 100%;
    vertical-align: middle;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
  .logo {
    font-size: 1.5rem;
    font-family: "Anek Malayalam", sans-serif;
  }
  .container-navbar {
    max-width: 1200px;
    margin-left: 270px;
    padding: 10px 15px;
    overflow: hidden;
  }
  .header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
  }
  .nav-link {
    font-style: normal;
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: flex;
    text-align: center;
    transition: 0.6s;
    -webkit-transition: 0.6s;
    -moz-transition: 0.6s;
    -ms-transition: 0.6s;
    -o-transition: 0.6s;
    padding: 0.5rem;
    margin-right: 25px;
    color: #2c3639;
    text-transform: uppercase;
    transition: color 0.2s linear;
    -webkit-transition: color 0.2s linear;
    -moz-transition: color 0.2s linear;
    -ms-transition: color 0.2s linear;
    -o-transition: color 0.2s linear;
    position: relative;
  }
  .nav-link:last-child {
    margin: 0;
  }
  .nav-link::after {
    content: "";
    display: block;
    height: 3px;
    width: 100%;
    background-color: #2c3639;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 2;
    margin-top: -3px;
    opacity: 0;
    transition: opacity 0.2s linear;
    -webkit-transition: opacity 0.2s linear;
    -moz-transition: opacity 0.2s linear;
    -ms-transition: opacity 0.2s linear;
    -o-transition: opacity 0.2s linear;
  }
  .nav-link:hover::after {
    opacity: 1;
  }
  .nav-link:hover,
  .nav-link:active {
    color: #437a3b;
  }
  .header-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default NavBar;
