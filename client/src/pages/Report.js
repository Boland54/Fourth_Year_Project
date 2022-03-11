import '../App.css';
import React, {useEffect, useState} from 'react';
import { isEmpty } from "../components/helper/validate";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../components/Input2/Input2";
import SiteHeader from '../components/siteHeader';
import Footer from '../components/Footer';

const initialState = {
    description: "",
    location: "",
  };

function Report() {
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState(initialState);
    const { description,location } = data;
  
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
  
    const handleClick = () => {
      setVisible(!visible);
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

          <div className="send">
            <button type="submit">send</button>
          </div>
        </form>
</div>
</div>
        <Footer/>
      </>
    );
  };

export default Report;
