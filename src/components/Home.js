import React, { useContext } from 'react'
import Nav from './nav';
import '../css/container.css'
import ContextComp from './context/ContextComp'
import { Link } from 'react-router-dom'

function Home() {
  const a = useContext(ContextComp)
  return (
    <>
      <Nav />
      <div className='imgcon'>
        <div>
          <Link to='/hollywood/hollyone'>
            <img src="https://i.ytimg.com/vi/vSKlICmmi98/maxresdefault.jpg" alt="frozen" className='image' />
          </Link>
        </div>
        <div>
          <Link to='/technology/techone'>
            {/* <img src="https://static.designboom.com/wp-content/uploads/2021/11/bmw-concept-xm-domagoj-dukec-art-basel-miami-2021-designboom700-400x320-22b08q85r397.gif" alt="purple scene" className='image1' /> */}
            <img src="https://duet-cdn.vox-cdn.com/thumbor/0x0:862x424/2400x1181/filters:focal(431x212:432x213):no_upscale():format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24337857/BMW_color_changing_2.gif" alt="purple scene" className='image1' />
          </Link>
        </div>

        <div>
          <Link to='/bollywood/bollyfour'>
            <img src="../farzi.jpg" alt="purple scene" className='image2' />
          </Link>
        </div>
      </div>

      <div className='container'>
        <br />
        <h1 className='head'>Latest Articles</h1>
        <hr className='hr1' />
        <hr className="no" style={{ width: '68%' }} />

        <div className="midcon">
          <div className='midcon1'>
            <div className="midcons">
              {/* grey card */}
              <Link to='/bollywood/bollyone'>
                <img src="../raees2.jpg" className="img" alt="purple scene" />
              </Link>
              <div className='cardcontent'>
                {/* content */}
                <h3 className='card1'>{a.cardraees}</h3>
                <p className='card1para'>{a.descraees}</p>
                <p className='card1footer'>Bollywood <span className='light'>/ April 08 2023</span></p>
              </div>
            </div>

            <div className="midcons">
              <Link to='/Hollywood/Hollytwo'>
                <img src="../magic.jpg" className="img" alt="purple scene" />
              </Link>
              <div className='cardcontent'>
                <h3 className='card1'>{a.cardmagic}</h3>
                <p className='card1para'>{a.descmagic}</p>
                <p className='card1footer'>Hollywood <span className='light'>/ April 08 2023</span></p>
              </div>
            </div>
            <div className="midcons">
              <Link to='/food/Foodtwo'>
                <img src="https://cdn.eathappyproject.com/wp-content/uploads/2021/10/Chinese-Cuisine.jpg" className="img" alt="purple scene" />
              </Link>
              <div className='cardcontent'>
                <h3 className='card1'>{a.cardchinese}</h3>
                <p className='card1para'>{a.descchinese}</p>
                <p className='card1footer'>Food <span className='light'>/ April 08 2023</span></p>
              </div>
            </div>
            <div className="midcons">
              <Link to='/technology/techtwo'>
                <img src="../Water-Bottle.jpeg" className="img" alt="purple scene" />
              </Link>
              <div className='cardcontent'>
                <h3 className='card1'>{a.cardtechtwo}</h3>
                <p className='card1para'>{a.desctechtwo}</p>
                <p className='card1footer'>Technology <span className='light'>/ April 08 2023</span></p>
              </div>
            </div>
          </div>

          <div className="midcon2">
            {/* grey ad container */}
            <div className='add'>
              Advertisement
            </div>

          </div>
        </div>

        <h1 className='head left'>Top Posts</h1>
        <hr className='hr1 hrleft' />
        <Link to='/food/Foodfour'>
          <img src="../food1.jpg" className="img11" alt="purple scene" />
        </Link>
        <div className='cardcontent1'>
          <h3 className='card1' style={{ fontSize: "xx-large" }}>{a.cardnorthindia}</h3>
          <p className='card1footer'>Food <span className='light'>/ April 08 2023</span></p>
        </div>
      </div>

      <div className='lastimg'>
        <Link to='/technology/Techthree'>
          <img src="https://elearningindustry.com/wp-content/uploads/2022/11/shutterstock_1798672534.jpg" className="imagee" alt="purple scene" />
        </Link>
        <h3 className='cardctnt'>{a.cardtechthree}</h3>
        <p className='cardfooter'>Technology <span className='light'>/ April 08 2023</span></p>
      </div>

      <div className='small small1'>
        <Link to='/fitness/Fitone'>
          <img src="../yoga.png" className="imgright" alt="purple scene" />
        </Link>
        <div className='ctnt'>
          <h3 className='cardctntright'>{a.cardfitone}</h3>

          <p className='cardfooterright'>Fitness <span className='light'>/ April 08 2023</span></p>
        </div>
      </div>

      <div className='small small1'>
        <Link to='/fitness/Fitfour'>
          <img src="https://media.istockphoto.com/id/1359291135/vector/sport-road-cyclists.jpg?s=612x612&w=0&k=20&c=3wNqA5gh5wVNwjnjRuG7yhey8jNbTWKmmT5dky8wtkI=" className="imgright2" alt="purple scene" />
        </Link>
        <div className='ctnt1'>
          <h3 className='cardctntright1'>{a.cardfitfour}</h3>
        </div>
        <div className='fit'>
          <p className='cardfooterright1'>Fitness <span className='light'>/ April 08 2023</span></p>
        </div>
      </div>
      <div className='small small2'>
        <Link to='/fitness/Fittwo'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGm_P8b0mNx2Hx3NKuI1ZcNEFDsOhxyjOPMA&usqp=CAU" className="imgright2" alt="purple scene" />
        </Link>
        <div className='ctnt2'>
          <h3 className='cardctntright2'>{a.cardfittwo}</h3>
        </div>
        <div className='foot'>
          <p className='cardfooterright2'>Fitness <span className='light'>/ April 08 2023</span></p></div>
      </div>


    </>
  )
}

export default Home;
