import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Food from "../Food";
import Error from "../Error";
import Home from "../Home";
import Tech from "../Tech";
import Bollywood from "../Bollywood";
import Fitness from "../Fitness";
import Hollywood from "../Hollywood";

import Foodone from "../../Foodcnt/Foodone";
import Foodtwo from "../../Foodcnt/Foodtwo";
import Foodthree from "../../Foodcnt/foodthree";
import Foodfour from "../../Foodcnt/Foodfour";
import Fitfour from "../../Fitcnt/Fitfour";
import Fitone from "../../Fitcnt/Fitone";
import Fittwo from "../../Fitcnt/Fittwo";
import Techone from "../../Techcnt/Techone";
import Techtwo from "../../Techcnt/Techtwo";
import Techthree from "../../Techcnt/Techthree";
import Hollyone from "../../Hollycnt/Hollyone";
import Hollytwo from "../../Hollycnt/Hollytwo";
import Hollyfour from "../../Hollycnt/Hollyfour";
import Bollyone from "../../Bollycnt/Bollyone";
import Bollyfour from "../../Bollycnt/Bollyfour";
import Bollytwo from "../../Bollycnt/Bollytwo";
import Bollythree from "../../Bollycnt/Bollythree";

function RouterComp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hollywood' element={<Hollywood />} />
          <Route path='/fitness' element={<Fitness />} />
          <Route path='/bollywood' element={<Bollywood />} />
          <Route path='/technology' element={<Tech />} />
          <Route path='/food' element={<Food />} />
          <Route path='/*' element={<Error />} />

          <Route path='/food/foodone' element={<Foodone />} />
          <Route path='/food/foodtwo' element={<Foodtwo />} />
          <Route path='/food/foodthree' element={<Foodthree />} />
          <Route path='/food/foodfour' element={<Foodfour />} />

          <Route path="/fitness/Fitone" element={<Fitone />} />
          <Route path="/fitness/Fittwo" element={<Fittwo />} />
          <Route path="/fitness/Fitfour" element={<Fitfour />} />

          <Route path="/technology/Techone" element={<Techone />} />
          <Route path="/technology/Techtwo" element={<Techtwo />} />
          <Route path="/technology/Techthree" element={<Techthree />} />

          <Route path='/hollywood/Hollyone' element={<Hollyone />} />
          <Route path='/hollywood/Hollytwo' element={<Hollytwo />} />
          <Route path='/hollywood/Hollyfour' element={<Hollyfour />} />

          <Route path='/bollywood/Bollyone' element={<Bollyone />} />
          <Route path='/bollywood/Bollytwo' element={<Bollytwo />} />
          <Route path='/bollywood/Bollythree' element={<Bollythree />} />
          <Route path='/bollywood/Bollyfour' element={<Bollyfour />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterComp;