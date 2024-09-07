/* eslint-disable react/prop-types */

import FountAwesome from './FountAwesome'

function DaysWeather(props) {
  
  return (
  
      <section key={props.id}>
      <h4>{props.date}</h4>
      <FountAwesome iconname={props.weather_description} {...props} size={props.size} color={"#FFD43B"} />
      <h4>{props.temperature} C</h4>
    </section>

  
  )
}

export default DaysWeather
