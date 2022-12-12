import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, database } from "../../firebase/firebaseConfig";
import { validateAdmin } from "../../services/helpers";
import { userTypes } from "../types/usersType";

const collectionName = "users";

export const actionRegisterAsync = ({ email, password, name }) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        console.log(user);
        const { accessToken } = user.auth.currentUser;
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        const docRef = await addDoc(collection(database, collectionName), {
          name,
          email,
          accessToken,
          admin: false,
          provider: "emailPassword",
        });
        sessionStorage.setItem("user", JSON.stringify({
          id: docRef.id,
          email,
          name,
          accessToken,
          admin: false,
          provider: "emailPassword",
          error: false,
        }));
        dispatch(
          actionRegisterSync({
            id: docRef.id,
            email,
            name,
            accessToken,
            admin: false,
            provider: "emailPassword",
            error: false,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        dispatch(actionRegisterAsync({ error: true, errorMessage }));
      });
  };
};

const actionRegisterSync = (user) => {
  return {
    type: userTypes.USER_REGISTER,
    payload: {
      ...user,
    },
  };
};

export const actionLoginAsync = ({ email, password }) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        const { displayName, accessToken } = user.auth.currentUser;
        const userAdmin = await validateAdmin(email);
        console.log(userAdmin);
        console.log(user.auth.currentUser);
        sessionStorage.setItem("user", JSON.stringify(userAdmin));
        dispatch(
          actionLoginSync({
            email,
            admin: userAdmin.admin,
            name: displayName,
            accessToken,
            error: false,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        dispatch(actionLoginSync({ email, error: true, errorMessage }));
      });
  };
};

const actionLoginSync = (user) => {
  return {
    type: userTypes.USER_LOGIN,
    payload: {
      ...user,
    },
  };
};

export const actionLogoutAsync = () => {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch(actionLogoutSync());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const actionLogoutSync = () => {
  return {
    type: userTypes.USER_LOGOUT,
  };
};

// export const loginProviderAsync = (provider) => {
//   return (dispatch) => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//         const { displayName, accessToken, photoURL, phoneNumber } =
//           user.auth.currentUser;
//         dispatch(
//           actionLoginSync({
//             email: user.email,
//             name: displayName,
//             accessToken,
//             avatar: photoURL,
//             phoneNumber,
//             error: false,
//           })
//         );
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.customData.email;
//         console.log(error);
//         console.log(errorCode);
//         console.log(errorMessage);
//         dispatch(actionLoginSync({ email, error: true, errorMessage }));
//       });
//   };
// };
