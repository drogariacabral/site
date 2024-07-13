import { HeaderPrimary, Container, HeaderAdmin } from "./styles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebase_config";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import Button from "../button";
import siteLogo from "../../assets/images/site-logo-dc.png";
import MobileMenu from "../mobile-menu";
import { useLocation } from 'react-router-dom';

function SiteHeader() {
  const [userLogged, setUserLogged] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLogged(user.uid);
      } else {
        setUserLogged("");
      }
    });

    return () => unsubscribe();
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
            <img src={siteLogo} />
          </Container>
          <Container className="header-flex-container mobile-hidden">
            <Link to="/admin">Admin</Link>
            <Link to="/admin/add">Adicionar</Link>
            <button onClick={() => {signOut(auth)}}>Sair</button>
          </Container>
          <MobileMenu />
        </div>
      </HeaderAdmin>
    );
  }
}

export default SiteHeader;