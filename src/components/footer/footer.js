import React, { useState, useEffect} from "react"
import axios from 'axios'
import { API_KEY } from '../apikey'

function FooterComp(){
    const [copyright, setCopyright] = useState(null)

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then(res => {
            setCopyright(res.data.copyright)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className = "foot-container">
            <h3 className = 'copyrights'>Copyright: {copyright} </h3>
        </div>
    )
}

export default FooterComp