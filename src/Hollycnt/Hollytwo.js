import React, { useContext } from 'react'
import '../css/cont.css'
import { Link } from 'react-router-dom'
import ContextComp from '../components/context/ContextComp'

function Hollytwo() {
    const a = useContext(ContextComp)
    return (
        <>
            <Link to='/hollywood'>
                <div className="header">
                    <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
                </div>
            </Link>

            <div className='container'>
                <h2 className='gl'>{a.cardmagic}</h2>
                <hr />
                <div className='insidehead'>
                    <div className='insides'>
                        <div><img src="../profile.png" alt="avatar" className='avatar' /></div>
                        <div>
                            <p>Saya</p>
                            <p className='date'>April 08 2023</p>
                        </div>
                    </div>
                    <img src="https://freepngimg.com/thumb/social_media/74031-instagram-icons-media-youtube-computer-facebook-social-thumb.png" alt="logos" className='logos' />
                </div>
                <img src="../magic.jpg" className="img1" alt="purple scene" />
                <p></p>
            </div>

            <div className='castandmovie'>
                <div className='movie1'>
                    <ul>
                        <li>Movie</li>
                        <li>{a.cardmagic}</li>
                        <li>3-seasons</li>
                    </ul>
                </div>
            </div>
            <div className="h3">
                <h3 style={{ textAlign: 'left', marginLeft: '270px', marginTop: '3%', marginBottom: '1%' }}>The Plot : </h3>
            </div>
            <div className='content'>
                <p>{a.contentmagic}</p>
                <p>{a.contentmagic2}</p>
            </div>

        </>
    )
}

export default Hollytwo