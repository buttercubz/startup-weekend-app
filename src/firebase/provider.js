import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Auth } from "./init";

export async function GoogleAuth() {
  try {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(Auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);

    const token = credential.accessToken;
    const user = result.user;

    if (token !== null && user !== null) {
      console.log("login");
      //   const docRef = doc(FireStoreDB, "Users", result.user.uid);
      //   const docData = await getDoc(docRef);

      //   if (!docData.exists()) {
      //     await AddUser({
      //       uid: user.uid,
      //       email: user.email,
      //       favorites: [],
      //       name: user.displayName,
      //       picture: user.photoURL,
      //       workspaces: [],
      //     });

      //     await EmailNewUser({
      //       to_email: user?.email,
      //       to_name: user?.displayName,
      //     });
      //   }

      //   setTimeout(() => {
      //     const url = decodeURIComponent(
      //       window.location.search.replace("?redirect=", "")
      //     ).trim();

      //     if (url) {
      //       isLogged.set({ state: true });
      //       window.location.href = url;
      //     } else {
      //       isLogged.set({ state: true });
      //       navigate("/workspaces", { replace: false });
      //     }
      //   }, 900);
    }
  } catch (error) {
    console.log(error);
    // return Toast.Error("Failed to login");
  }
}
