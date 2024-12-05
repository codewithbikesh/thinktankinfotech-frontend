import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import axios from 'axios';

function Home() {
  const [services, setServices] = useState([]);
  useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/services')
      .then((res)=>{
          console.log(res);
          setServices(res.data.data)
      })
      .catch((error)=>{
       console.error(error);
      })
  },[])

  return (
    <>
      <Card Carddata = {services}/>
    </>
  )
}

export default Home