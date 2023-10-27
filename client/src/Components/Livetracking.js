import React,{useEffect,useState} from 'react'
import axios from 'axios';
const API_endpoint=`https://api.openweathermap.org/data/2.5/weather?`;
const API_key=`70353d78bbffa40f17c7687c5c4d91db`
const Livetracking = () => {
    const [latitude,setLatitude] = useState('');
    const [longitude,setLongitude]=useState('');
    const [responseData,setResponseData]=useState({});
    useEffect(()=>{
       navigator.geolocation.getCurrentPosition((position)=>{
         setLatitude(position.coords.latitude)
         setLongitude(position.coords.longitude)
       })
      
    //    console.log(`${ API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_key}`)
       const finalAPIEndPoint=`${ API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`
       console.log(finalAPIEndPoint)
    //    axios.get(finalAPIEndPoint)
    //    .then((response)=>{
    //     console.log(response.data)
    //    })

    // lagging is in axios
    },[])


  return (
    <div>
        <h1>{responseData.name}</h1>
    </div>
  )
}

export default Livetracking