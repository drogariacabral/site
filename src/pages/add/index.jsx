import { useState, useEffect } from "react";
import { auth, storage, db } from "../../services/firebase_config";
import { onAuthStateChanged } from "firebase/auth";
import { FormContainer, FormInput, FormButton } from "./styles";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import DOMPurify from "dompurify";
import { collection, addDoc } from "firebase/firestore";

function AddProduct() {
    const [userLogged, setUserLogged] = useState(null);
    const [imageURL, setImageURL] = useState("");
    const [progress, setProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");

    //Verificar LOGIN
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


    //Upload arquivos
    const handleFileUpload = (file) => {
        const storageRef = ref(storage, `products/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        setIsUploading(true);
    
        uploadTask.on('state_changed', 
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
          }, 
          (error) => {
            console.error(error);
            setIsUploading(false);
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImageURL(downloadURL);
              saveProductData(downloadURL);
              setIsUploading(false);
            });
          }
        );
      };
    
      const saveProductData = async (imageUrl) => {
        try {
          await addDoc(collection(db, 'produtos'), {
            name: productName,
            price: productPrice,
            imageUrl: imageUrl,
          });
          setProductName('');
          setProductPrice('');
          setImageURL('');
          alert('Produto adicionado com sucesso!');
        } catch (error) {
          console.error("Erro ao adicionar produto: ", error);
        }
      };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const file = e.target.elements.image.files[0];
        if (file) {
          handleFileUpload(file);
        } else {
          alert('Por favor, selecione uma imagem.');
        }
    };

    if (userLogged === null) {
        return <div>Loading...</div>;
    }

    if (userLogged) {
        return (
            <>
                <div className="section-boxed-thin w-100 flex-container">
                    <h1>Adicionar produto</h1>
                    <FormContainer onSubmit={handleSubmit}>
                        <FormInput
                            type="text"
                            placeholder="Produto"
                            id="product_name"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                        />
                        <FormInput
                            type="number"
                            placeholder="Preço"
                            id="product_price"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            required
                        />
                        <FormInput
                            type="file"
                            name="image"
                            required
                        />
                        <FormButton type="submit">Adicionar</FormButton>
                        {isUploading && <p>Progresso: {progress}%</p>}
                    </FormContainer>
                </div>
            </>
        );
    } else if (userLogged === "") {
        window.location.assign("/login");
    }
}

export default AddProduct;
