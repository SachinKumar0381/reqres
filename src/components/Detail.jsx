import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Detail = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        const getdata=async()=>{
          let r=await axios.get("https://reqres.in/api/users?page=1")
          setData(r.data.data);
        }
        getdata();
    },[])
    data.map((dot)=>{
        console.log(dot)
    })

  return (
    <div>
        {data.map((dot)=>(
            <div>
                <img src={dot.avatar} alt="" />
                <h3>{dot.first_name}</h3>
                <h4>{dot.email}</h4>
            </div>
        ))}
    </div>
  )
}

export default Detail