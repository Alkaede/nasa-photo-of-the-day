import React from 'react'
import BodyComp from './body/body'
import FooterComp from './footer/footer'
// considering all the imports, it might just make it easier to just import this file to make the imports on App() not as crowded


function MainComp (){
    return(
        <>
        <BodyComp />
        <FooterComp />
        </>
    )
}

export default MainComp