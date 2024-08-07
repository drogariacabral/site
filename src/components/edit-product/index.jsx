import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../../services/firebase_config';
import { Container, DeleteButton, EditButton, FormContainer, FormInput } from './styles';

function EditProductForm({ product, onSave, onCancel }) {
  const [productName, setProductName] = useState(product.name);
  const [productPrice, setProductPrice] = useState(product.price);
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();

    const productRef = doc(db, 'produtos', product.id);

    let imageUrl = product.imageUrl;

    if (imageFile) {
      const storageRef = ref(storage, product.imageUrl)
      await deleteObject(storageRef)
      setUploading(true);
      const imageRef = ref(storage, `products/${imageFile.name}`);
      const uploadTask = uploadBytesResumable(imageRef, imageFile);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle progress, etc.
        },
        (error) => {
          console.error('Error uploading image: ', error);
        },
        async () => {
          imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
          await updateProduct(productRef, productName, productPrice, imageUrl);
          setUploading(false);
          onSave();
        }
      );
    } else {
      await updateProduct(productRef, productName, productPrice, imageUrl);
      onSave();
    }
  };

  const updateProduct = async (productRef, name, price, imageUrl) => {
    await updateDoc(productRef, {
      name,
      price,
      imageUrl,
    });
  };

  return (
      <Container>
          <FormContainer onSubmit={handleSave}>
          <img src={product.imageUrl} />
              <FormInput
                  type="text"
                  placeholder="Nome do Produto"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
              />
              <FormInput
                  type="number"
                  placeholder="Preço do Produto"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  required
              />
              <FormInput
                  type="file"
                  onChange={(e) => setImageFile(e.target.files[0])}
              />
              <EditButton type="submit" disabled={uploading}>
                  Salvar
              </EditButton>
              <DeleteButton type="button" onClick={onCancel}>
                  Cancelar
              </DeleteButton>
          </FormContainer>
        </Container>
  );
}

export default EditProductForm;