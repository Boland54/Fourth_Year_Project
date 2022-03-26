import '../App.css';
import Imagerep from "../components/Imagerep/Imagerep";
import { Link } from 'react-router-dom';
import { AiFillCamera } from "react-icons/ai";
import { useContext, useRef, useState } from "react";
import { isEmpty } from "../components/helper/validate";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../components/Input2/Input2";
import SiteHeader from '../components/siteHeader';
import Map from '../pages/geolocated';



const initialState = {
    description: "",
    latitude: "",
    longitude: "",
  };

function Report() {
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState(initialState);
    const loca = useContext(Map);

    const { description, longitude, latitude } = data;


    const inputFile = useRef(null);
    const [imagerep, setImagerep] = useState(false);
 

  
    const handleInput = () => {
      inputFile.current.click();
    };

  
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };

  
    const send = async (e) => {
      e.preventDefault();
      // check fields
      if (isEmpty(description) || isEmpty(latitude) || isEmpty(longitude))
        return toast("Please fill in all fields.", {
          className: "toast-failed",
          bodyClassName: "toast-failed",
        });
     

      try {
        const res = await axios.post("/addReport", {
          imagerep,
          description,
          latitude,
          longitude,
          user: localStorage.getItem("currentUser")
          
        });
        toast(res.data.msg, {
          className: "toast-success",
          bodyClassName: "toast-success",
        });
      } catch (err) {
        toast(err.response.data.msg, {
          className: "toast-failed",
          bodyClassName: "toast-failed",
        });
      }
      handleReset();
    };
    const changeImage = async (e) => {
      e.preventDefault();
      try {
        // get file
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append("imagerep", file);
  
        // upload to cloudinary
        const res = await axios.post("/api/upload", formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
          onUploadProgress: (x) => {
            if (x.total < 1024000)
              return toast("Uploading", {
                className: "bg-upload",
                bodyClassName: "bg-upload",
                autoClose: 7000,
              });
          },
        });
        setImagerep(res.data.url);
      } catch (err) {
        toast(err.response.data.msg, {
          className: "toast-failed",
          bodyClassName: "toast-failed",
        });
      }
    };

  
    const handleReset = () => {
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
      setData({ ...data, description: "", latitude: "" , longitude: ""});
    };
  
    return (
      <>
      <SiteHeader />

      <div className="reportss">
        <div className="gggg">
        <form onSubmit={send}>
        <div className="profile_imagerep">
          <div className="profile_imagerep-wrapper" onClick={handleInput}>
            <Imagerep imagerep={imagerep} />
            <AiFillCamera />
          </div>
          <input
            type="file"
            name="imagerep"
            ref={inputFile}
            className="profile_imagerep-input"
            onChange={changeImage}
          />
        </div>
          
          <Input
            type="text"
            text="Description"
            name="description"
            handleChange={handleChange}
          />
                    <Input
            type="text"
            text="Latitude"
            name="latitude"
            handleChange={handleChange}
          />

<Input
            type="text"
            text="Longitude"
            name="longitude"
            handleChange={handleChange}
          />
<Map type="text" text="latitude" name="latitude" />


<br />
            <button type="submit">send</button>
          
        </form>

</div>
</div>

<div>
</div>      </>
    );
  };

export default Report;
