import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";
import "./styleLogin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { hostName, webHost } from "../../global";


const Login = () => {
  const [passShow, setPassShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password is required!", {
        position: "top-center",
      });
    } else if (password.length < 3) {
      toast.error("password must be 4 char!", {
        position: "top-center",
      });
    } else {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);

        const { data } = await axios.post(
          `${hostName}/auth/login`,
          {
            email,
            password,
          },
          config
        );

        console.log("data", data)

        if (data.data !== null) {
          toast.success("User Login Successfuly", {
            position: "top-center",
          });
          localStorage.setItem("data", JSON.stringify(data));
          localStorage.setItem("avatar", JSON.stringify(data.data.userInfo.avatar));
          console.log("user login succesfully done");
          window.location.replace(`${webHost}`);
        }
        else {
          if (data.message === 'Your account is not activate!!!') {
            toast.error(data.message, {
              position: "top-center",
            });
            const { data1 } = await axios.post(
              `${hostName}/auth/send-otp`,
              {
                email
              },
              config
            );
            setTimeout(() => {
              navigate(`/verify/${email}`);
            }, 2000);
          }
          else {
            toast.error(data.message, {
              position: "top-center",
            });
          }


        }

        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        const FError = error.response.data.message;
        console.log(FError);
        toast.error(FError, {
          position: "top-center",
        });
        setLoading(false);
      }
    }
  };
  return (
    <section className="login_section">
      <div style={{ display: "flex" }}>
        <Box className="left_section" elevation={4}>
          <div style={{ marginLeft: "10px" }}>
            <h2>Ưu điểm của Website</h2>

            <p>
              <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} /> Tìm kiếm công việc dễ dàng
            </p>
            <p>
              <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} /> Gợi ý công việc liên quan
            </p>
            <p>
              <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} />{" "}
              Thông tin được gửi nhanh chóng cho bên tuyển dụng
            </p>
            <p>
              <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} />Dễ dàng tạo CV
            </p>
          </div>
          <div style={{ marginLeft: "0%", marginTop: "5%" }}>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <button variant="outlined" style={{ marginLeft: "1%" }}>
                Register For Free
              </button>
            </Link>
          </div>
          <img
            src="https://static.naukimg.com/s/5/105/i/register.png"
            style={{ width: "40%", marginLeft: "45%", marginBottom: "10%" }}
            alt=""
          />
        </Box>
        <div className="form_data">
          <div className="form_heading">
            <p>Welcome Back, Log In</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email/username</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
                placeholder="Enter Your email here "
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  id="password"
                  placeholder="Enter Your password"
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className="btn" style={{ marginTop: "20px" }} onClick={submitHandler}>
              Login
            </button>

            <Link to={`/resetPassword`}>
              <button className="btn1" style={{ marginTop: "20px" }}>Quên tài khoản </button>
            </Link>

          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default Login;
