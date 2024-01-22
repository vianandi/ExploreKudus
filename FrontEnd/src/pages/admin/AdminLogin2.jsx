import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../component/AuthContext";
import { Button } from "@material-tailwind/react";

const AdminLogin2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn, setToken } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "/api/api/admin/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setIsLoggedIn(true);
      setToken(response.data.token); // Assuming the token is in the response data

      // Save the token in localStorage
      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);

      navigate("/admin2/tourdata");
    } catch (error) {
      if (error.response && error.response.data) {
        console.error("Login failed:", error.response.data.message);
      } else {
        console.error("Login failed:", error.message);
      }
    }
  };

  return (
    <section className="min-h-screen min-w-screen bg-[url(https://res.cloudinary.com/dbmiqiqf4/image/upload/v1700743741/unsplash_VowIFDxogG4_liyxvu.png)] bg-cover bg-no-repeat bg-center">
      <div className="absolute w-full sm:w-2/3 h-2/3 sm:h-screen bottom-0 sm:right-0 bg-white rounded-t-lg sm:rounded-l-lg">
        <div className="w-full h-full flex flex-col gap-2 sm:gap-4 justify-center items-center py-4 px-5 sm:px-[320px]">
          <img
            src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1700662610/logooo_kuunpm.png" // Ganti dengan path atau URL gambar Anda
            alt="Explore Kudus Logo"
            className="h-[100px] " // Sesuaikan tinggi gambar sesuai kebutuhan Anda
          />
          <form
            className="w-full flex flex-col gap-4 sm:gap-6 mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <input
              className="w-full py-2 px-2.5 border-b-[1px] border-slate-400"
              type="text"
              placeholder="Email anda"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full py-2 px-2.5 border-b-[1px] border-slate-400"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <Link to="/">
                <p className="text-[#004AAD] cursor-pointer">Kembali</p>
              </Link>
            </div>
            <div className="flex items-center">
              <Button
                className="flex items-center text-center box-border w-[100px] h-[30px] bg-[#004AAD] rounded-[3px] text-white text-xs transition"
                onClick={handleLogin}
                disabled={!email || !password}
              >
                Masuk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin2;
