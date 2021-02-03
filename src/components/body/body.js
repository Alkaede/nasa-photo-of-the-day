//ICE 
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_KEY } from '../apikey'


function Bodycomp (){
    // not sure if i need this nasaData slice of state but I'm keeping it in here anyways
    const [nasaData, setNasaData] = useState([])
    const [date, setDate] = useState(null)
    const [explain, setExplain] = useState(null)
    const [title, setTitle] = useState(null)
    const [url, setUrl] = useState(null)


    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then(res => {
            console.log(res.data);
            setNasaData(res.data)
            setDate(res.data.date)
            setExplain(res.data.explanation)
            setTitle(res.data.title)
            setUrl(res.data.url)
            
        })
        .catch(err => console.log(err))
    }, [])

    //trying to make a button function to make the day go back and also another one to move forward
    // const backOneDay = () =>{
    //     setDate()
    // }

    return (
        <div className = 'body-container'>
           <div className = "head-container">
               <h1>🪐Photo of the Day of {date}🪐</h1>
           </div>
           <iframe src = {url} className = 'video-player'/> 
           {/* current date of the api (02/03/2021 has a video so i implemented a video player) */}
           <img src = {url}  className = 'image off'/>
            <div className = 'description'>
                <h2>🚀 {title} 🚀</h2>
                <p>{explain}</p>
                <div className = 'button-div'>
                <button>Forward a day!</button>
                <button>Back a day!</button>
                </div>
            </div>
        </div>
    )

}


export default Bodycomp