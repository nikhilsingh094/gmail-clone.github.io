import { signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/appSlice";

function Login() {
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      dispatch(
        setUser({
          displayName: res.user.displayName,
          email: res.user.email,
          photo: res.user.photoURL,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-500">
      <div className="p-8 bg-white flex flex-col gap-3 rounded-md">
        <h1 className="text-center text-xl font-medium mb-5">Login here</h1>
        <GoogleButton onClick={signInWithGoogle}></GoogleButton>
      </div>
    </div>
  );
}

export default Login;
