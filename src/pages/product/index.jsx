import React, { useEffect, useState } from 'react';
import { auth, db, storage } from '../../services/firebase_config';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';


function ProductAdmin() {
  const [userLogged, setUserLogged] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLogged(user.uid);
        fetchProducts();
      } else {
        setUserLogged("");
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, 'produtos'));
    const productsList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setProducts(productsList);
  };

  const handleDelete = async (id, imageUrl) => {
    try {
      await deleteDoc(doc(db, 'produtos', id));

      if (imageUrl) {
        const storageRef = ref(storage, imageUrl);
        console.log(storageRef);
        await deleteObject(storageRef);
      }

      setProducts(products.filter(product => product.id !== id));
      alert('Produto deletado com sucesso!');
    } catch (error) {
      console.error('Erro ao deletar produto: ', error);
    }
  };

  const handleEdit = (id) => {
    // Lógica de edição de produto
    alert(`Editar produto com id: ${id}`);
  };

  if (userLogged === null) {
    return <div>Loading...</div>;
  }

  if (userLogged) {
    return (
      <div className="section-boxed flex-container">
        <h1>Lista de Produtos</h1>
        <div className="grid-container-3 w-65 gap-50">
        {products.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Preço: {product.price}</p>
            {product.imageUrl && <img src={product.imageUrl} alt={product.name} style={{ width: '100px', height: '100px' }} />}
            <br />
            <button onClick={() => handleEdit(product.id)}>Editar</button>
            <button onClick={() => handleDelete(product.id, product.imageUrl)}>Excluir</button>
          </div>
        ))}
        </div>
      </div>
    );
  } else {
    window.location.assign("/login");
  }
}

export default ProductAdmin;