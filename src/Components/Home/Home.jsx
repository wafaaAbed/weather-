import "./homeStyle.css";
import Select from "react-select";


import DaysWeather from "../daysWeather";
import useHome from "./useHome";
function Home() {
const {indexOfSelctedCity,selectedCountry,optionsOfCountry,optionsOfcity,weatherOFCity,setselectedCountry,setIndexOfSelctedCity}=useHome();
  return (
    <main className="mainContainer">
      <div className="selectCity">
        <Select
          className="selecting"
          value={selectedCountry}
          options={optionsOfCountry}
          onChange={setselectedCountry}
          placeholder="Selcet Country..."
        />
        <Select
        
          className="selecting"
          value={indexOfSelctedCity}
          options={optionsOfcity}
          onChange={setIndexOfSelctedCity}
          placeholder="Selcet City..."
        />
            </div>

      {weatherOFCity && (
        <div className="content" key={weatherOFCity.id}>
          <>
            <div className="sunImage">
              <h1>Weather Today </h1>
            </div>
            <div className="weatherInfo">
              <p>Today </p>
              <i className="fa-solid fa-sun fa-beat"></i>
              <h2>
                {weatherOFCity.country} - {weatherOFCity.city}
              </h2>
              <p>Temreture: {weatherOFCity.temperature}</p>
              <p>{weatherOFCity.weather_description}</p>
            </div>
            <div className="days">
              {weatherOFCity.forecast &&
                weatherOFCity.forecast.map((el) => (
                  <DaysWeather
                    key={el.id}
                    date={el.date}
                    size="xl"
                    beat
                    temperature={el.temperature}
                    weather_description={el.weather_description}
                  />
                ))}
            </div>
          </>
        </div>
      )}
    </main>
  );
}

export default Home;
