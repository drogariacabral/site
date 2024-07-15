import { HeaderPrimary, Container, HeaderAdmin } from "./styles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import siteLogo from "../../assets/images/site-logo-dc.png";
import MobileMenu from "../mobile-menu";
import { useLocation } from 'react-router-dom';
import { logOut, verifyLogin } from "../../hooks/auth";

function SiteHeader() {
  const [userLogged, setUserLogged] = useState(null);

  const location = useLocation();

  useEffect(() => {
    verifyLogin(setUserLogged)
  }, []);

  if (userLogged === null || userLogged === "" || location.pathname === "/") {
    return (
      <HeaderPrimary>
        <div className="header-boxed header-flex-container">
          <Container>
            <img src={siteLogo} />
          </Container>
          <Container>
            <Button />
          </Container>
        </div>
      </HeaderPrimary>
    );
  } else if (userLogged) {
    return (
      <HeaderAdmin>
        <div className="header-boxed header-flex-container header-flex-container-2">
          <Container>
            <a href="/admin"><img src={siteLogo} /></a>
            
          </Container>
          <Container className="header-flex-container mobile-hidden">
            <button className="mobile-hidden" onClick={() => logOut()}>Sair</button>
          </Container>
          <MobileMenu />
        </div>
      </HeaderAdmin>
    );
  }
}

export default SiteHeader;