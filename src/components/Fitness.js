import React, { useContext } from 'react'
import Nav from './nav'
import '../css/container.css'
import '../css/stylesheet.css'
import ContextComp from './context/ContextComp'
import { Link } from 'react-router-dom'

function Fitness() {
    const a = useContext(ContextComp)
    return (
        <>
            <Nav />
            <div className='container'>
                <div className='compcontainer'>
                    <div className="compcon1">
                        <h1 className='head'>Fitness</h1>
                        <hr className='hr1' />
                    </div>
                </div>

                <div className="containercontent">
                    <div className="contentcard">
                        <Link to='/fitness/Fitone'>
                            <img src="../yoga.png" className="bolimg" alt="purple scene" />
                        </Link>
                        <div className='pcontent'>
                            <p className='p1content'>{a.cardfitone}</p>
                            <p className='p2content'>{a.descfitone}</p>
                        </div>
                    </div>

                    <div className="contentcard">
                        <Link to='/fitness/Fittwo'>
                            <img src="https://www.babywisemom.com/wp-content/uploads/2015/10/5reasonshealthysleephabits.jpg" className="bolimg" alt="purple scene" />
                        </Link>
                        <div className='pcontent'>
                            <p className='p1content'>{a.cardfittwo}</p>
                            <p className='p2content'>{a.descfittwo}</p>
                        </div>
                    </div>

                    <div className="contentcard">
                        <Link to='/fitness/Fithree'>
                            <img src=".//indian-Diet.jpg" className="bolimg" alt="purple scene" />
                        </Link>
                        <div className='pcontent'>
                            <p className='p1content'>{a.cardfitthree}</p>
                            <p className='p2content'>{a.descfitthree}</p>
                        </div>
                    </div>
                </div>

                <div className="anothercontainercontent">
                    <div className="conctnts">
                        <div className="conctnt">
                            <Link to='/fitness/Fitfour'>
                                <img src="https://www.verywellfit.com/thmb/IhtvZkrJsA2wT-8JRhVJr3ck0VA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bike-riding-for-cardio-endurance-5105014-Final_Text-010cc13911f24cea83330200283e7357.png" className="bolimg" alt="purple scene" />
                            </Link>
                            <div className='pcontent1'>
                                <p className='p1'>{a.cardfitfour}</p>
                                <p className='p2'>{a.descfitfour}</p>
                            </div>
                        </div>

                        <div className="conctnt">
                            <Link to='/fitness/Fitfive'>
                                <img src="https://media.istockphoto.com/id/1346624734/vector/child-boy-in-sportswear-running-fast-flat-cartoon-vector-illustration-isolated.jpg?s=170667a&w=0&k=20&c=VmsXRxNqidqMpSDlAMm6BwN0kR-mmHVmVC-8SUfW7PU=" className="bolimg" alt="purple scene" />
                            </Link>
                            <div className='pcontent1'>
                                <p className='p1'>Running: Health Benefits</p>
                                <p className='p2'>Running can deliver a host of both physical and mental health benefits</p>
                            </div>
                        </div>

                    </div>
                    <div className="advertise" style={{ height: '550px', marginTop: '80px' }}>
                        <h2>Advertisement</h2>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Fitness
