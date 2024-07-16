import React, { useEffect, useState } from "react";
import {
    EditButton,
    ProductName,
    ProductPrice,
    ProductContainer,
} from "./styles";
import EditProductForm from "../../components/edit-product";
import { verifyLogin } from "../../hooks/auth";
import { fetchProducts } from "../../hooks/fetchProducts";
import { formatCurrency } from "../../hooks/formatCurrency";

function Admin() {
    const [userLogged, setUserLogged] = useState(null);
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        verifyLogin(setUserLogged, () => fetchProducts(setProducts));
    }, []);

    const handleEdit = (product) => {
        setEditingProduct(product);
    };

    const handleSave = () => {
        setEditingProduct(null);
        fetchProducts(setProducts);
    };

    const handleCancel = () => {
        setEditingProduct(null);
    };

    if (userLogged === null) {
        return <div>Loading...</div>;
    }

    if (userLogged) {
        return (
            <>
                <div className="section-boxed-thin flex-container">
                    <h2>Lista de Produtos</h2>
                    {editingProduct ? (
                        <EditProductForm
                            product={editingProduct}
                            onSave={handleSave}
                            onCancel={handleCancel}
                        />
                    ) : (
                        <div className="grid-container-3">
                            {products.map((product) => (
                                <ProductContainer key={product.id}>
                                    {product.imageUrl && (
                                        <img
                                            src={product.imageUrl}
                                            alt={product.name}
                                            style={{
                                                width: "200px",
                                                height: "200px",
                                            }}
                                        />
                                    )}
                                    <div>
                                        <ProductName>
                                            {product.name}
                                        </ProductName>
                                        <ProductPrice>
                                            Preço:{" "}
                                            {formatCurrency(product.price)}
                                        </ProductPrice>
                                    </div>
                                    <EditButton
                                        className="mb-10"
                                        onClick={() => handleEdit(product)}
                                    >
                                        Editar
                                    </EditButton>
                                </ProductContainer>
                            ))}
                        </div>
                    )}
                </div>
            </>
        );
    } else if (userLogged === "") {
        window.location.assign("/login");
    }
}

export default Admin;
