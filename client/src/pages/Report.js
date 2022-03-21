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
import Footer from '../components/Footer';
import Problems from './Problems/Problems';
import { AuthContext } from "../context/AuthContext";
import Map from '../pages/geolocated';



const initialState = {
    description: "",
    location: "",
  };

function Report() {
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState(initialState);
    const { description,location } = data;


    const inputFile = useRef(null);
    const [imagerep, setAvatar] = useState(false);
  
    const handleInput = () => {
      inputFile.current.click();
    };

  
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };

  
    const send = async (e) => {
      e.preventDefault();
      // check fields
      if (isEmpty(description) || isEmpty(location))
        return toast("Please fill in all fields.", {
          className: "toast-failed",
          bodyClassName: "toast-failed",
        });
     

      try {
        const res = await axios.post("/addReport", {
          description,
          location,
          
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
        setAvatar(res.data.url);
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
      setData({ ...data, description: "", location: "" });
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
            text="Location"
            name="location"
            handleChange={handleChange}
          />

<Map />

<br />
            <button type="submit">send</button>
          
        </form>

</div>
</div>

<div>
</div>
        <Footer/>
      </>
    );
  };

export default Report;
