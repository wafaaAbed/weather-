/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake, faSun } from "@fortawesome/free-regular-svg-icons";
import {
  faCloudBolt,
  faCloudRain,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
function FountAwesome(props) {
  const statusOfWeather = {
    "Cloudy":faCloud,
    "Cloud": faCloud,
    "cloudy-rain": faCloud,
    "Clear sky": faCloud,
    "Sunny": faSun,
    "Partly cloudy": faCloud,
    "Rain showers": faCloudRain,
    "Rain": faCloudRain,
    "thunder": faCloudBolt,
    "Snow":faSnowflake,
    "Rainy":faCloudRain
  };
const status= statusOfWeather[props.iconname];


  return (
    <FontAwesomeIcon
      icon={status}
      {...props}
      style={{ color: `${props.iconname ==='Sunny' ? "#FFD43B" : "#74C0FC"}`, height: `${props.size}`}}
      />
  );
}

export default FountAwesome;

