import React, { useContext } from 'react'
import '../css/cont.css'
import ContextComp from '../components/context/ContextComp'
import { Link } from 'react-router-dom'


function Bollythree() {
    const a = useContext(ContextComp)
    return (
        <>

            <Link to='/bollywood'>
                <div className="header">
                    <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
                </div>
            </Link>

            <div className='container'>
                <h2 className='gl'>{a.cardtjmm}</h2>
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
                <img src="../tjmm.jpg" className="img1" alt="purple scene" />
                <p></p>
            </div>

            <div className='castandmovie'>

                <div className='cast1'>
                    <h3>The Cast : </h3>
                    <p className='cc'>{a.casttjmm1}</p>
                    <p className='cc'>{a.casttjmm2}</p>
                    <p>{a.casttjmm3}</p>
                </div>
                <div className='movie1'>
                    <ul>
                        <li>Movie</li>
                        <li>{a.cardtjmm}</li>
                        <li>2h 43m</li>
                    </ul>
                </div>
            </div>
            <div className="h3">
                <h3 style={{ textAlign: 'left', marginLeft: '270px', marginTop: '3%', marginBottom: "1%" }}>The Plot : </h3>
            </div>
            <div className='content'>
                <p>{a.contenttjmm}</p>
            </div>

        </>
    )
}

export default Bollythree