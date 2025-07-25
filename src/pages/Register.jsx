import logo from "../assets/backgroundiki.jpeg";
import { SignUp } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/backgroundiki.jpeg'')", // değiştir: kendi görselinin yolu
      }}
    >
      <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8">
        <SignUp path="/kayit" routing="path" />
      </div>
    </div>
  );
}
