import React, { useContext } from 'react'
import '../css/cont.css'
import ContextComp from '../components/context/ContextComp'
import { Link } from 'react-router-dom'

function Fitfour() {
    const a = useContext(ContextComp)

    return (
        <>
            <Link to='/fitness'>
                <div className="header">
                    <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
                </div>
            </Link>
            <div className='container'>
                <h2 className='gl'>{a.cardfitfour}</h2>
                <hr />
                <div className='insidehead'>
                    <div className='insides'>
                        <div><img src="../profile.png" alt="avatar" className='avatar' /></div>
                        <div>
                            <p>nikitha</p>
                            <p className='date'>April 08 2023</p>
                        </div>
                    </div>
                    <img src="https://freepngimg.com/thumb/social_media/74031-instagram-icons-media-youtube-computer-facebook-social-thumb.png" alt="logos" className='logos' />
                </div>
                <img src="https://www.verywellfit.com/thmb/IhtvZkrJsA2wT-8JRhVJr3ck0VA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bike-riding-for-cardio-endurance-5105014-Final_Text-010cc13911f24cea83330200283e7357.png" className="img1" alt="purple scene" />
            </div>

            <div className='content'>
                <p>{a.contentfitfour}</p>
            </div>
        </>
    )
}

export default Fitfour