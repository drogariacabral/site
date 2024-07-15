import React, { useState } from 'react';
import { MobileMenuContainer, MenuButton, MenuContent } from "./styles";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase_config";


function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MobileMenuContainer>
      <MenuButton  onClick={toggleMenu}>
        <GiHamburgerMenu size={20} style={{marginBottom: "-4px"}} />
      </MenuButton>
      {isOpen && (
        <MenuContent className="menu-content">
          
            <button onClick={() => {signOut(auth)}}>Sair</button>
          
        </MenuContent>
      )}
    </MobileMenuContainer>
  );
}

export default MobileMenu;
