import { useState, useEffect } from "react";
import { auth } from "../../services/firebase_config";
import { onAuthStateChanged } from "firebase/auth/web-extension";
import { signOut } from "firebase/auth";
import { HeaderPrimary, HeaderContainer } from "./styles";
import siteLogo from "../../assets/images/site-logo-dc.png";

function Admin(){
    
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

    if (userLogged === null) {
        return <div>Loading...</div>;
    }

    if (userLogged) {
        return (
            <>
                <div className="section-boxed-thin w-100 flex-container">
                    <h1>Home</h1>
                    
                </div>
            </>
        );
    } else if (userLogged === "") {
        window.location.assign("/login");
    }

    
}

export default Admin;