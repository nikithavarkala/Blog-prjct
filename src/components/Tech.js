import React, { useContext } from 'react'
import ContextComp from './context/ContextComp'
import Nav from './nav'
import '../css/container.css'
import '../css/stylesheet.css'
import { Link } from 'react-router-dom'


function Tech() {
    const a = useContext(ContextComp)

    return (
        <>
            <Nav />
            <div className='container'>
                <div className='compcontainer'>
                    <div className="compcon1">
                        <h1 className='head'>Technology</h1>
                        <hr className='hr1' />
                    </div>
                </div>

                <div className="containercontent">
                    <div className="contentcard">
                        <Link to='/technology/Techone'>
                            <img src="https://duet-cdn.vox-cdn.com/thumbor/0x0:862x424/2400x1181/filters:focal(431x212:432x213):no_upscale():format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24337857/BMW_color_changing_2.gif" className="bolimg" alt="purple scene" />
                        </Link>
                        <div className='pcontent'>
                            <p className='p1content'>{a.cardtechone}</p>
                            <p className='p2content'>{a.desctechone}</p>
                        </div>
                    </div>

                    <div className="contentcard">
                        <Link to='/technology/Techtwo'>
                            <img src="../Water-Bottle.jpeg" className="bolimg" alt="purple scene" />
                        </Link>
                        <div className='pcontent'>
                            <p className='p1content'>{a.cardtechtwo}</p>
                            <p className='p2content'>{a.desctechtwo}</p>
                        </div>
                    </div>

                    <div className="contentcard">
                        <Link to='/technology/Techthree'>
                            <img src="../Ai-face.jpg" className="bolimg" alt="purple scene" />
                        </Link>
                        <div className='pcontent'>
                            <p className='p1content'>{a.cardtechthree}</p>
                            <p className='p2content'>{a.desctechthree}</p>
                        </div>
                    </div>
                </div>

                <div className="anothercontainercontent">
                    <div className="conctnts">
                        <div className="conctnt">
                            <Link to='/technology/Techfour'>
                                <img src="../tree.jpg" className="bolimg" alt="purple scene" />
                            </Link>

                            <div className='pcontent1'>
                                <p className='p1'>{a.cardtechfour}</p>
                                <p className='p2'>{a.desctechfour}</p>
                            </div>
                        </div>

                        <div className="conctnt">
                            <Link to='/technology/Techfive'>
                                <img src="../dna.jpg" className="bolimg" alt="purple scene" />
                            </Link>
                            <div className='pcontent1'>
                                <p className='p1'>{a.cardtechfive}</p>
                                <p className='p2'>{a.desctechfive}</p>
                            </div>
                        </div>

                        {/* <div className="conctnt">
                            <Link to='/technology/Techsix'>
                                <img src="" className="bolimg" alt="purple scene" />
                            </Link>
                            <div className='pcontent1'>
                                <p className='p1'>{a.cardgeno}</p>
                                <p className='p2'>{a.desccardgeno}</p>
                            </div>
                        </div> */}
                    </div>
                    <div className="advertise" style={{ height: '600px', marginTop: '190px' }}>
                        <h2 className='h2'>Advertisement</h2>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Tech
