import React, { useEffect, useState } from 'react'
import './App.css'
import image from './image.png';
import Lottie from "lottie-react";
import ShopLogo from './ShopLogo.json'
import Load from './loading.json'
function App() {
  const [Loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])
  return (
    <div className="App">
      {
        Loading ?
          <div style={{ height: "95vh", width: "94%", }}>
            <Lottie animationData={Load} style={{ width: "100%", height: "100%", marginLeft: "5%" }} />
          </div>
          :
          <>
            <Lottie animationData={ShopLogo} className='ShopLG' />
            <div className='MainApp'>
              <div className='InnerMainDiv1'>
                <div className='Innerh1'>
                  <h1>GetPosh</h1>
                </div>
                <div className='InnerP'>
                  <p>Fashion is a form of self-expression with a specific context, such as time, place and purpose. GetPosh is such a innovative shop that promotes the higher brands for branded People.</p>
                </div>
                <div className='Innerbtn'>
                  <button className='ShopBtn'>Visit Shop</button>
                </div>
              </div>
              <div className='InnerMainDiv2'>
                <img src={image} className='img_to_view' />
              </div>
            </div>
          </>
      }
      {/* <div className='AppInnerDiv'> */}
    </div>
  );
}

export default App;
