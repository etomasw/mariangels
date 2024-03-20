import React, {useEffect} from 'react'
import './preloader.css'
import { preLoaderAnim } from '../animations'

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim();
    }, [])
    

  return (
    <div className="preloader">
        <div className="texts-container">
            <span>Peru</span>
            <span>Productions</span>
            <span>Presenta</span>
        </div>
    </div>
  )
}

export default PreLoader