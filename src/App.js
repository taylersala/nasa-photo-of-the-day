import React, { useState, useEffect } from "react";
import axios from 'axios'

import "./App.css";

import NasaPhoto from "./components/NasaPhoto";

// const dummyData = {
// date: '2023-05-04',
// explanation: "Bright elliptical galaxy Messier 87 (M87) is home to the supermassive black hole captured in 2017 by planet Earth's Event Horizon Telescope in the first ever image of a black hole. Giant of the Virgo galaxy cluster about 55 million light-years away, M87 is the large galaxy rendered in blue hues in this infrared image from the Spitzer Space telescope.  Though M87 appears mostly featureless and cloud-like, the Spitzer image does record details of relativistic jets blasting from the galaxy's central region. Shown in the inset at top right, the jets themselves span thousands of light-years. The brighter jet seen on the right is approaching and close to our line of sight. Opposite, the shock created by the otherwise unseen receding jet lights up a fainter arc of material. Inset at bottom right, the historic black hole image is shown in context, at the center of giant galaxy and relativistic jets. Completely unresolved in the Spitzer image, the supermassive black hole surrounded by infalling material is the source of enormous energy driving the relativistic jets from the center of active galaxy M87. The Event Horizon Telescope image of M87 has now been enhanced to reveal a sharper view of the famous supermassive black hole.   At NASA: Black Hole Week",
// hdurl: "https://apod.nasa.gov/apod/image/2305/pia23122c-16.jpg",
// title: "The Galaxy, the Jet, and a Famous Black Hole"
// }

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])
  return (
    <div className="App">
      { data && <NasaPhoto photo={data} /> }
    </div>
  );
}

export default App;

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY


