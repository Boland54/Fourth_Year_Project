import React, {useEffect, useState} from 'react';
import '../../App.css';
import SiteHeader from '../../components/siteHeader';
import axios from "axios";
import { toast } from "react-toastify";


const Problems = (props) => {
  useEffect( () => {
      fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  
  const handleChange = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };


  const deleteItems = async (e) => {
    e.preventDefault();
    // check field
  
      const res = await axios.post("/reports/delete", {
        
        
      });
      toast(res.data.msg, {
        className: "toast-success",
        bodyClassName: "toast-success",
      });
    }

    const deleteTodo = async (e, id) => {
      try {
        e.stopPropagation();
        await axios.post("/reports/delete");
        setItems(items.filter(({ _id: i }) => id !== i));
      } catch (err) {}
    };


  const fetchItems = async () => {
      const data = await fetch('/reports');
      const items = await data.json();
      setItems(items);
  };

 

  return (
    <>
<SiteHeader />

    <div align="center">
      <div className="tble123">

      
        <table>

        <tr>
          <th>Description</th>
          <th>Location (Latitude, Longitude)</th>
          <th>Image</th>

        </tr>

        {
      items.map(item => (
        <>
        <tr>
        
          <td>{item.description}</td>
          <td>{item.latitude} , {item.longitude} </td>
          <td><a href={item.imagerep} target="_parent">
        <button
          className='butns1'
          buttonStyle='butn--primary'
          buttonSize='butn--large'
          onClick={console.log('hey')}
        >
          Photo <i className='far fa-play-circle' />
        </button>
        </a> </td>
          
        </tr>
  </>
  ))
}
        </table>


                </div>
                </div>


  </>
  )
}

export default Problems;

