import React, {useEffect, useState} from 'react';
import '../App.css';
import Footer from '../components/Footer';
import SiteHeader from '../components/siteHeader';
import axios from "axios";
import { toast } from "react-toastify";

function Problems() {
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
                  {
      items.map(item => (
      
        <table>
        <tr>
        <th>
Checkbox
            </th>
          <th>Description</th>
          <th>Location</th>
        </tr>
        <tr>
          <td>              
             <input
                type="checkbox"
                onChange={e => {
                  let value = e.target.checked;
                  setItems(
                    items.map(d => {
                      d.select = value;
                      return d;
                    })
                  );
                }}
              /></td>
          <td>{item.description}</td>
          <td>{item.location}</td>
        </tr>

        </table>
  
                ))
                }
          <div className="deleteItems" onSubmit={deleteTodo}>
            <button type="submit">Delete</button>
          </div>


                </div>
                </div>



  <Footer />
  </>
  )
}

export default Problems;

