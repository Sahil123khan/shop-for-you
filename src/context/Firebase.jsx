import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";

export const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyC-zu9JejF3-ESP7veoyyqKMzTfT75DU38",
    authDomain: "e-commerce-app-93dcb.firebaseapp.com",
    projectId: "e-commerce-app-93dcb",
    storageBucket: "e-commerce-app-93dcb.firebasestorage.app",
    messagingSenderId: "868755185540",
    appId: "1:868755185540:web:64b8b81f325410e9edc7d1"
  };
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

// Function to add all products from an array
export const AddAllProductFirebase = async(arraydata) => {
  try {
  const docref = await addDoc(collection(db,"products"),arraydata)
    console.log("product id",docref.id)
    return docref
  } catch (error) {
    console.log("something went wrong",error);
    throw error;
    
  }
}

// Function to get data from the firebase
export const GetAllData = async() => {
  try {
    const quarysnapshot = await getDocs(collection(db,"products"));
  const products = [];
   quarysnapshot.forEach((doc)=>{
   products.push({
    id:doc.id,
    ...doc.data(),
   });
  });
  return products
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error;    
  }
};

// function to get single product from the firestore
export const GetSingleProduct = async (productId) => {
  try {
    console.log("Trying to fetch product with ID:", productId);
    const docRef = doc(db, "products", productId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const productData = {
        id: docSnap.id,
        ...docSnap.data()
      };
      console.log("Product found:", productData);
      return productData;
    } else {
      console.log("Product not found with ID:", productId);
      throw new Error("Product not found");
    }
  } catch (error) {
    console.error("Error getting single product: ", error);
    throw error;
  }
}

// Function to update a product in firebase
export const UpdateProductFirebase = async (productId, updateData) => {
  try {
    const docRef = doc(db, "products", productId);
    await updateDoc(docRef, updateData);
    console.log("Product updated successfully");
    return true;
  } catch (error) {
    console.error("Error updating product: ", error);
    throw error;
  }
}

// Function to delete a product from firebase
export const DeleteProductFirebase = async (productId) => {
  try {
    const docRef = doc(db, "products", productId);
    await deleteDoc(docRef);
    console.log("Product deleted successfully");
    return true;
  } catch (error) {
    console.error("Error deleting product: ", error);
    throw error;
  }
}

export const FirebaseProvider = (props) => {
    return (
        <FirebaseContext.Provider value={{ 
          AddAllProductFirebase, 
          GetAllData, 
          GetSingleProduct, 
          UpdateProductFirebase, 
          DeleteProductFirebase 
        }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}