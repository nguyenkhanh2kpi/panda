import React, { useState } from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Both.css";
import { hostName, webHost } from "../../global";
const Signup = () => {
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);
  const navigate = useNavigate();

  // =============================================================================================================

  const [email, setEmail] = useState("");
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [picMessage, setPicMessage] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "") {
      toast.warning("name is required!", {
        position: "top-center",
      });
    } else if (email === "") {
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
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-center",
      });
      alert("add password more than 6");
    } else if (confirmpassword === "") {
      toast.error("confirmPassword is required!", {
        position: "top-center",
      });
    } else if (confirmpassword.length < 6) {
      toast.error("confirm password must be 6 char!", {
        position: "top-center",
      });
    } else if (password !== confirmpassword) {
      toast.error("pass and conformPass are not matching!", {
        position: "top-center",
      });
    } 
    else {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);

        const { data } = await axios.post(
          `${hostName}/auth/register`,
          { username, email, password },
          config
        );
        console.log(data);
        setTimeout(() => {
          navigate(`/verify/${email}`);
     }, 2000);
      } catch (error) {
        setError(error.response.data.message);
        const FError = error.response.data.message;
        console.log(FError);
        toast.success(FError, {
          position: "top-center",
        });
        setLoading(false);
      }
    }
  };

  return (
    <>
      <session>
        <div className="main">
          <div className="left_sessionSingUp">
            <div
              style={{
                marginTop: "1px",
              }}
            >
              <img
                style={{ marginTop: "-80px", marginLeft: "70px" }}
                src="https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg"
                alt=""
              />
              <h3>On Register You can</h3>
              <div
                style={{
                  display: "flex",
                  marginTop: "12px",
                }}
              >
                <CheckCircleOutlineOutlinedIcon
                  style={{ color: "#18c1a3", marginTop: "12px" }}
                />
                <p
                  style={{
                    color: "#445578",
                    lineHeight: "18px",
                    fontSize: "17px",
                    textAlign: "start",
                    marginLeft: "10px",
                    marginTop: "5%",
                  }}
                >
                  Build your profile and let recruiters find you
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "13px",
                }}
              >
                <CheckCircleOutlineOutlinedIcon
                  style={{ color: "#18c1a3", marginTop: "10px" }}
                />
                <p
                  style={{
                    color: "#445578",
                    lineHeight: "18px",
                    fontSize: "17px",
                    textAlign: "start",
                    marginLeft: "10px",
                    marginTop: "5%",
                  }}
                >
                  Get job postings delivered right to your email
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "13px",
                }}
              >
                <CheckCircleOutlineOutlinedIcon
                  style={{ color: "#18c1a3", marginTop: "7px" }}
                />
                <p
                  style={{
                    color: "#445578",
                    lineHeight: "18px",
                    fontSize: "17px",
                    textAlign: "start",
                    marginLeft: "10px",
                    marginTop: "5%",
                  }}
                >
                  Find a job and grow your career as well
                </p>
              </div>
            </div>
          </div>
          <div className="form_data3" >
            <div className="form_heading">
              <h2
                style={{
                  color: "#000000",
                  fontSize: "30px",
                  marginLeft: "-40%",
                }}
              >
                Find a job & grow your career
              </h2>
            </div>
            <form>
              <div className="form_input_name">
                <label htmlFor="name">Please Enter Full Name</label>
                <input
                  type="name"
                  value={username}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  id="name"
                  placeholder="Enter Your Name "
                />
              </div>
              
              <div className="form_input">
                <label htmlFor="email">Email/username</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="Email"
                  placeholder="Enter Your email here "
                />
                
              </div>

              <div className="form_input">
                <label htmlFor="password">Password</label>
                <div className="two">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={!passShow ? "password" : "text"}
                    name="password"
                    id="password1"
                    placeholder="Enter Your password"
                  />
                  <div
                    className="showpass1"
                    onClick={() => setPassShow(!passShow)}
                  >
                    {!passShow ? "Show" : "Hide"}
                  </div>
                </div>
               
              </div>
              <div className="form_input">
                <label htmlFor="password1">Conform Password</label>
                <div className="two">
                  <input
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type={!cpassShow ? "password" : "text"}
                    name="cpassword"
                    id="password"
                    placeholder="Enter Your password"
                  />
                  <div
                    className="showpass1"
                    onClick={() => setCPassShow(!cpassShow)}
                  >
                    {!cpassShow ? "Show" : "Hide"}
                  </div>
                </div>
               
              </div>
             
              <button onClick={handleSubmit} className="btn3">
                Register Now
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </session>
    </>
  );
};

export default Signup;
