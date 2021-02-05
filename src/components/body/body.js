//ICE 
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_KEY } from '../apikey'
import styled from 'styled-components'


const StyledBody = styled.div`
    padding: 0.5% 10%;

    h1{
        font-size: ${props => props.theme.h1size};
        max-width: 900px;
        margin-left: 20%;
    }

    h1 span{
        text-decoration: ${props=> props.theme.underline}; 
    }

    h1:hover span{
        display: none;
        text-decoration: ${props=> props.theme.disnone};
    }

    h1:hover:before{
        content: '🚀 🪐 LIFT OFF!! 🪐 🚀';
    }
   
    img{
        width: 50%;
        border-radius: 10%;
        padding-bottom: 25px;
        cursor: pointer;
    }

    div{
        width: auto;
        padding: 10px 30px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.4);
        box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);
    }

    h2{
        font-size: ${props => props.theme.h2size}
    }

    p{
        font-weight: 620;
    }
`


function Bodycomp (){

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

    //trying to see if url has an image or video (USE TERNARY OPERATOR ITS BETTER FUTURE ME )
    // let video = false
    // if({url} === 'image'){
    //     video = true
    // }

    return (
        <StyledBody>
            <h1><span>🪐Photo of the Day of {date}🪐</span></h1 >
            <div className = 'description'>
                {/* clicking on the image will open it on a new tab, must interpolate  */}
                {
                    (nasaData.media_type === 'image')
                    ? <img src = {url} onClick={()=> window.open(`${nasaData.hdurl}`, "_blank")} alt = 'nasa img'/> 
                    : <iframe src = {url} title='nasa video'/> 
                }
                <h2>🚀 {title} 🚀</h2>
                <p>{explain}</p>
            </div>
        </StyledBody>
    )

}


export default Bodycomp