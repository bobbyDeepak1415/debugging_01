import React, { useEffect } from 'react'

function About() {

  useEffect(()=>{
   const timer= setInterval(() => {
      console.log("interval from about")
    }, 1200);

    return ()=>{
      clearInterval(timer)
    }

  })

  return (
    <div>
      <h1>About</h1>



    </div>
  )
}

export default About
