import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style3.css";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { loadJob } from '../../redux/Job-posting/Action';
import {

  Input,
  Select,
} from "@chakra-ui/react";
import { hostName } from "../../global";

const RoomAdd = () => {

  
  const dispatch = useDispatch();
  useEffect(() => {
    // getData(typeOfProduct).then((res) => setProductArr(res));
    dispatch(loadJob());
  }, []);
  
  const data = useSelector((store) => store.job.data);
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);
  const navigate = useNavigate();

  // =============================================================================================================

  const accessToken = JSON.parse(localStorage.getItem("data")).access_token;
  const [jobName, setJObName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [roomSkill, setRoomSkill] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [linkmeet, setLinkmeet] = useState("");
 
  const handleSubmit2 = async (e) => {

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (jobName === "") {
      toast.warning("Job is required!", {
        position: "top-center",
      });
    }
    else if (roomName === "") {
      toast.warning("room Name is required!", {
        position: "top-center",
      });
    } else if (roomSkill === "") {
      toast.error("room Skill is required!", {
        position: "top-center",
      });
    } 
    else if (roomDescription === "") {
      toast.error("room Description is required!", {
        position: "top-center",
      });
    }
    else if (startDate === "") {
      toast.error("start Date is required!", {
        position: "top-center",
      });
    }
    else if (endDate === "") {
      toast.error("end Date is required!", {
        position: "top-center",
      });
    }
   
    else {
      try {
        let data = JSON.stringify({
         
          "jobPostId":jobName,
          "roomName": roomName,
          "roomSkill":roomSkill,
          "roomDescription": roomDescription,
          "startDate": startDate,
          "endDate": endDate,
          "linkmeet": linkmeet
          
        });
  
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `${hostName}/interview/create-interview`,
          headers: { 
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${accessToken}`
          },
          data : data
        };
        
        axios.request(config)
        .then((response) => {
          console.log("haha");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Upload Room Failed", {
            position: "top-center",
          });
        });
  
        toast.success("Upload Room Successfuly", {
          position: "top-center",
        });
        navigate("/");
      } catch (error) {
       
      }
    }
  }


  return (
    <>
      <session>
        <div className="main">
        
          <div className="form_data1" >
            <div className="form_heading">
              <h2
                style={{
                  color: "#000000",
                  fontSize: "30px",
                }}
              >
               Thêm phòng họp
              </h2>
            </div>

            
            <form>
            
              
              <div className="form_input">
                <label htmlFor="name" style={{display:"block"}}>Tên công việc</label>
                <Select color={'#8292b4'} borderColor={'#8292b4'} placeholder='Tên công việc'  mt="10px" mb="10px"onChange={(e) => 
                 { console.log(e.target.value)
                  setJObName(e.target.value)}}>
              {data.map((i)=>{
                    return <option value={i.id}>{i.name}</option>
                  })
                  }
                  <option></option>
            </Select>
              
              </div>
              

              <div className="form_input">
                <label htmlFor="position">Tên phòng họp</label>
                <input 
                style={{width:"100%"}}
                  type="text"
                  // value={username}
                  onChange={(e) => setRoomName(e.target.value)}
                  name="position"
                  id="position"
                />
              </div>
              <div className="form_input">
                <label htmlFor="position">Kỹ năng (Skill)</label>
                <input
                  style={{width:"100%"}}
                  type="text"
                  // value={username}
                  onChange={(e) => setRoomSkill(e.target.value)}
                  name="position"
                  id="position"
                />
              </div>

              <div className="form_input">
                <label htmlFor="position">Mô tả phòng</label>
                <input
                  type="text"
                  style={{width:"100%"}}
                  // value={username}
                  onChange={(e) => setRoomDescription(e.target.value)}
                  name="position"
                  id="position"
                />
              </div>


              <div className="form_input">
                <label htmlFor="position">Ngày bắt đầu </label>
                <Input 
                    onChange={(e) => setStartDate(e.target.value)}
                  name="startDate"
                  backgroundColor={"#FFFFFF"}
                  minW="100%"
                  placeholder="Room description"
                  type="datetime-local"
                  />
              </div>

              

      

              <div className="form_input">
                <label htmlFor="position">Ngày kết thúc</label>
                <Input 
                    onChange={(e) => setEndDate(e.target.value)}
                  name="startDate"
                  backgroundColor={"#FFFFFF"}
                  minW="100%"
                  placeholder="Room description"
                  type="datetime-local"
                  />
              </div>

              <div className="form_input">
                <label htmlFor="position">Link Meet phòng</label>
                <input
                  style={{width:"100%"}}
                  type="text"
                  // value={username}
                  onChange={(e) => setLinkmeet(e.target.value)}
                  name="position"
                  id="position"
                />
              </div>
             
              <button onClick={handleSubmit} style={{backgroundColor:"#03C9D7"}}className="btn3">
                Thêm phòng
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </session>
    </>
  );
};

export default RoomAdd;
