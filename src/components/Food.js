import React, { useContext } from 'react'
import Nav from './nav';
import { Link } from 'react-router-dom'
import ContextComp from './context/ContextComp'
import '../css/container.css'
import '../css/stylesheet.css'

function Food() {
  const a = useContext(ContextComp);
  // console.log(a);

  return (
    <>
      <Nav />
      <div className='container'>
        <div className='compcontainer'>
          <div className="compcon1">
            <h1 className='head'>Food</h1>
            <hr className='hr1' />
          </div>
        </div>

        <div className="containercontent">
          <div className="contentcard">
            <Link to='/food/Foodone'>
              <img src="https://cdn.eathappyproject.com/wp-content/uploads/2021/10/Indian-Cuisine-1536x1024.jpg" className="bolimg" alt='Indian' />
            </Link>
            <div className='pcontent'>
              <p className='p1content'>{a.cardindian}</p>
              <p className='p2content'>{a.descindian}</p>
            </div>
          </div>

          <div className="contentcard">
            <Link to='/food/Foodtwo'>
              <img src="https://cdn.eathappyproject.com/wp-content/uploads/2021/10/Chinese-Cuisine.jpg" className="bolimg" alt='Chinese' />

              {/* <img src="https://img.onmanorama.com/content/dam/mm/en/food/features/images/2022/1/11/north-indian-cuisine.jpg" className="bolimg" alt='North inadia'/> */}
            </Link>
            <div className='pcontent'>
              <p className='p1content'>{a.cardchinese}</p>
              <p className='p2content'>{a.descchinese}</p>
            </div>
          </div>

          <div className="contentcard">
            <Link to='/food/Foodthree'>
              <img src="https://skyviewbyempyrean.com/wp-content/uploads/2022/09/Weekend-south-Indian-food-promotion.jpg" className="bolimg" alt='South India' />
            </Link>
            <div className='pcontent'>
              <p className='p1content'>{a.cardsouthindia}</p>
              <p className='p2content'>{a.descsouth}</p>
            </div>
          </div>
        </div>

        <div className="anothercontainercontent">
          <div className="conctnts">
            <div className="conctnt">
              <Link to='/food/Foodfour'>
                <img src="https://img.onmanorama.com/content/dam/mm/en/food/features/images/2022/1/11/north-indian-cuisine.jpg" className="bolimg" alt='North inadia' />
              </Link>
              <div className='pcontent1'>
                <p className='p1'>{a.cardnorthindia}</p>
                <p className='p2'>{a.descnorth}</p>
              </div>
            </div>

            <div className="conctnt">
              <Link to='/food/Foodfive'>
                <img src="https://www.shutterstock.com/shutterstock/photos/1690553083/display_1500/stock-photo-arabic-cuisine-middle-eastern-traditional-lunch-it-s-also-ramadan-iftar-the-meal-eaten-by-1690553083.jpg" className="bolimg" alt='Arabic' />
              </Link>
              <div className='pcontent1'>
                <p className='p1'>{a.cardarab}</p>
                <p className='p2'>{a.descarab}</p>
              </div>
            </div>

            <div className="conctnt">
              <Link to='/food/Foodsix'>
                <img src="https://cdn.eathappyproject.com/wp-content/uploads/2021/10/Japanese-Cuisine.jpg" className="bolimg" alt='japenese' />
              </Link>
              <div className='pcontent1'>
                <p className='p1'>{a.cardjapan}</p>
                <p className='p2'>{a.descjapan}</p>
              </div>
            </div>

            <div className="conctnt">
              <Link to='/food/Foodsev'>
                <img src="https://cdn.eathappyproject.com/wp-content/uploads/2021/10/Italian-Cuisine.jpg" className="bolimg" alt='Italian' />
              </Link>
              <div className='pcontent1'>
                <p className='p1'>{a.carditalian}</p>
                <p className='p2'>{a.descitalian}</p>
              </div>
            </div>
          </div>
          <div className="advertise">
            <h2>Advertisement</h2>
          </div>
        </div>


      </div>
    </>
  )
}

export default Food;
