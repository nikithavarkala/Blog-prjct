import React, { useContext } from 'react'
import '../css/cont.css'
import ContextComp from '../components/context/ContextComp'
import { Link } from 'react-router-dom'

function Techone() {
    const a = useContext(ContextComp)
    return (
        <>
            <Link to='/technology'>
                <div className="header">
                    <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
                </div>
            </Link>

            <div className='container'>
                <h2 className='gl'>{a.cardtechone}</h2>
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
                <img src="https://duet-cdn.vox-cdn.com/thumbor/0x0:862x424/2400x1181/filters:focal(431x212:432x213):no_upscale():format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24337857/BMW_color_changing_2.gif" className="img1" alt="purple scene" />
            </div>
            <div className='content'>
                <p>{a.contenttechone}</p>
            </div>

        </>
    )
}

export default Techone