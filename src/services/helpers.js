import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../firebase/firebaseConfig";

const collectionName = "users";

export const validateAdmin = async(email)=>{
        const userCollection = collection(database, collectionName);
        const q = query(userCollection, where("email", "==", email));
        const user = []
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) =>{
              user.push({
                id: doc.id,
                ...doc.data()
              })
            });
            return user[0]
        } catch (error) {
            console.log(error);
            return {}
        }
    
}