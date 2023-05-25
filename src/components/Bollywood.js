import React, { useContext } from 'react'
import Nav from './nav'
import '../css/stylesheet.css'
import '../css/container.css'
import { Link } from 'react-router-dom'
import ContextComp from './context/ContextComp'


function Bollywood() {
    const a = useContext(ContextComp)

    return (
        <>
            <Nav />
            <div className='container'>
                <div className='containerhead'>
                    <div className="compcon1">
                        <h1 className='head'>Bollywood</h1>
                        <hr className='hr11' />
                    </div>
                </div>

                <div className="containercontent">
                    <div className="contentcard ch1">
                        <Link to='/bollywood/Bollyone'>
                            <img src="../raees2.jpg" className="bolimg" alt="purple scene" />
                        </Link>
                        <div className='pcontent'>
                            <p className='p1content'>{a.cardraees}</p>
                            <p className='p2content'>{a.descraees}</p>
                        </div>
                    </div>

                    <div className="contentcard ch1">
                        <Link to='/bollywood/Bollytwo'>
                            <img src="../phataan.jpg" className="bolimg" alt="purple scene" />
                        </Link>
                        <div className='pcontent'>

                            <p className='p1content'>{a.cardpathaan}</p>
                            <p className='p2content'>{a.descpathaan}</p>
                        </div>
                    </div>

                    <div className="contentcard ch1">
                        <Link to='/bollywood/Bollythree'>
                            <img src="../tjmm.jpg" className="bolimg" alt="purple scene" />
                        </Link>
                        <div className='pcontent'>
                            <p className='p1content'>{a.cardtjmm}</p>
                            <p className='p2content'>{a.desctjmm}</p>
                        </div>
                    </div>
                </div>

                <div className="anothercontainercontent" style={{ marginTop: '30px' }}>
                    <div className="conctnts">
                        <div className="conctnt">
                            <Link to='/bollywood/Bollyfour'>
                                <img src="../farzi.jpg" className="bolimg" alt="purple scene" />
                            </Link>
                            <div className='pcontent1'>
                                <p className='p1'>{a.cardfarzi}</p>
                                <p className='p2'>{a.descfarzi}</p>
                            </div>
                        </div>

                        <div className="conctnt">
                            <Link to='/bollywood/Bollyfive'>
                                <img src="../race.jpg" className="bolimg" alt="purple scene" />
                            </Link>
                            <div className='pcontent1'>
                                <p className='p1'>{a.cardrace}</p>
                                <p className='p2'>{a.descrace}</p>
                            </div>
                        </div>

                    </div>
                    <div className="advertise" style={{ height: '550px', marginTop: '190px' }}>
                        <h2>Advertisement</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bollywood;
