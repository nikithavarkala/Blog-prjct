import React, { useContext } from 'react'
import '../css/cont.css'
import ContextComp from '../components/context/ContextComp'
import { Link } from 'react-router-dom'


function Bollyfour() {
    const a = useContext(ContextComp)
    return (
        <>

            <Link to='/bollywood'>
                <div className="header">
                    <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
                </div>
            </Link>

            <div className='container'>
                <h2 className='gl'>{a.cardfarzi}</h2>
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
                <img src="../farzi.jpg" className="img1" alt="purple scene" />
                <p></p>
            </div>

            <div className='castandmovie'>
                <div className='cast1'>
                    <h3>The Cast : </h3>
                    <p className='cc'>Shahid Kapoor as Sunny, a disillusioned artist</p>
                    <p className='cc'>Vijay Sethupathi as Michael Vedanayagam,(CCFART)</p>
                    <p className='cc'>Raashii Khanna as Megha Vyas</p>
                    <p>Kay Kay Menon as Mansoor Dalal</p>
                </div>
                <div className='movie1'>
                    <ul>
                        <li>Movie</li>
                        <li>{a.cardfarzi}</li>
                        <li>Season1::8 episodes</li>
                    </ul>
                </div>
            </div>
            <div className="h3">
                <h3 style={{ textAlign: 'left', marginLeft: '270px', marginTop: '3%', marginBottom: "1%" }}>The Plot : </h3>
            </div>
            <div className='content'>
                <p>{a.contentfarzi}</p>
            </div>

        </>
    )
}

export default Bollyfour