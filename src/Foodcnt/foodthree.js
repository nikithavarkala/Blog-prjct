import React, { useContext } from 'react'
import '../css/cont.css'
import ContextComp from '../components/context/ContextComp';
import { Link } from 'react-router-dom'

function Foodthree() {
    const a = useContext(ContextComp);

    return (
        <>
            <Link to='/food'>
                <div className="header">
                    <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
                </div>
            </Link>

            <div className='container'>
                <h2 className='gl'>{a.cardsouthindia}</h2>
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
                <img src="https://skyviewbyempyrean.com/wp-content/uploads/2022/09/Weekend-south-Indian-food-promotion.jpg" alt="india" className="img1" />
            </div>

            <div className='content'>
                <p>{a.contentsouth}</p>
            </div>
        </>
    )

}

export default Foodthree;