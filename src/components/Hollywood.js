import React, { useContext } from 'react'
import Nav from './nav'
import '../css/container.css'
import '../css/stylesheet.css'
import ContextComp from './context/ContextComp'
import { Link } from 'react-router-dom'

function Hollywood() {
    const a = useContext(ContextComp)

    return (
        <>
            <Nav />
            <div className='container'>
                <div className='compcontainer'>
                    <div className="compcon1">
                        <h1 className='head'>Hollywood</h1>
                        <hr className='hr1' />
                    </div>
                </div>

                <div className="containercontent">
                    <div className="contentcard">
                        <Link to='/Hollywood/Hollyone'>
                            <img src="https://i.ytimg.com/vi/vSKlICmmi98/maxresdefault.jpg" className="bolimg" alt="purple scene" />
                        </Link>
                        <div className='pcontent'>
                            <p className='p1content'>{a.cardfrozen}</p>
                            <p className='p2content'>{a.descfrozen}</p>
                        </div>
                    </div>

                    <div className="contentcard">
                        <Link to='/Hollywood/Hollytwo'>
                            <img src="../magic.jpg" className="bolimg" alt="purple scene" />
                        </Link>
                        <div className='pcontent'>
                            <p className='p1content'>{a.cardmagic}</p>
                            <p className='p2content'>{a.descmagic}</p>
                        </div>
                    </div>

                    <div className="contentcard">
                        <Link to='/Hollywood/Hollythree'>
                            <img src="https://hips.hearstapps.com/seventeen/assets/17/10/1488990903-95fee3b5-9c81-45f9-857d-54cc114e8755.jpg" className="bolimg" alt="purple scene" />
                        </Link>
                        <div className='pcontent'>
                            <p className='p1content'>{a.cardmaze}</p>
                            <p className='p2content'>{a.descmaze}</p>
                        </div>
                    </div>
                </div>

                <div className="anothercontainercontent">
                    <div className="conctnts">
                        <div className="conctnt">
                            <Link to='/Hollywood/Hollyfour'>
                                <img src="../poc-image.jpg" className="bolimg" alt="purple scene" />
                            </Link>
                            <div className='pcontent1'>
                                <p className='p1'>{a.cardpirates}</p>
                                <p className='p2'>{a.descpirates}</p>
                            </div>
                        </div>

                        <div className="conctnt">
                            <Link to='/Hollywood/Hollyfive'>
                                <img src="https://siachenstudios.com/wp-content/uploads/2022/06/Cars-Movie-Characters.jpg" className="bolimg" alt="purple scene" />
                            </Link>
                            <div className='pcontent1'>
                                <p className='p1'>{a.cardcars}</p>
                                <p className='p2'>{a.desccars}</p>
                            </div>
                        </div>
                    </div>
                    <div className="advertise" style={{ height: '600px', marginTop: '270px' }}>
                        <h2>Advertisement</h2>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Hollywood
