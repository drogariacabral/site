import { HeaderPrimary, Container } from "./styles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebase_config";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import Button from "../button";
import siteLogo from "../../assets/images/site-logo-dc.png";

function SiteHeader() {
  const [userLogged, setUserLogged] = useState(null);

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

  if (userLogged === null || userLogged === "") {
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
      <HeaderPrimary>
        <div className="header-boxed header-flex-container">
          <Container>
            <img src={siteLogo} />
          </Container>
          <Container>
            <Link to="/admin">Admin</Link>
            <Link to="/admin/add">Add</Link>
            <Link to="/admin/product">Produtos</Link>
            <button onClick={() => {signOut(auth)}}>Sair</button>
          </Container>
        </div>
      </HeaderPrimary>
    );
  }
}

export default SiteHeader;