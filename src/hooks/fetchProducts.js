import { db } from '../services/firebase_config';
import { collection, getDocs } from 'firebase/firestore';

export async function fetchProducts(setProducts){
    const querySnapshot = await getDocs(collection(db, 'produtos'));
        const productsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setProducts(productsList)
}