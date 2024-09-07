import axios from "axios";
import { useEffect, useState } from "react";

  
function useHome() {
      // To get all weather of country
      const [weather, setWeather] = useState([]);
      // after select city all  information of city in {weatherOFCity}
      const [weatherOFCity, setweatherOFCity] = useState({});
      // to save all cauntry
      const [country, setCountry] = useState([]);
      // to save the seclected os city
      const [cities, setCities] = useState([]);
      // to save the seclected of Country
      const [selectedCountry, setselectedCountry] = useState("");
      // to save the id of selected city
      const [indexOfSelctedCity, setIndexOfSelctedCity] = useState(0);
    
    // to render 
      const [next, setnext] = useState(false);
      
      const getData = async () => {
        try {
          // eslint-disable-next-line no-unused-vars
          const response = await axios
            .get("https://freetestapi.com/api/v1/weathers")
            .then((res) => {
              return setWeather(res.data);
            });
        } catch (error) {
          return console.log(error);
        } finally {
          setnext(true);
        }
      };
    
      const getSingleData = async (id) => {
        try {
          // eslint-disable-next-line no-unused-vars
          const response = await axios
            .get(`https://freetestapi.com/api/v1/weathers/${id}`)
            .then((res) => {
            
              return setweatherOFCity(res.data);
            });
        } catch (error) {
          return console.log(error);
        }
      };
      useEffect(() => {
        getData();
        const allCountries = weather
          .map((el) => el.country)
          .reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), []);
          
          setCountry(allCountries);
            setCities([
          ...weather.filter((el) => el.country === selectedCountry.value),
        ]);
        
        indexOfSelctedCity && getSingleData(indexOfSelctedCity.value)
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [next, selectedCountry,indexOfSelctedCity]);
    
      const optionsOfCountry =
        country && country.map((el) => ({ value: el, label: el }));
      const optionsOfcity =
        cities && cities.map((el) => ({ value: el.id, label: el.city }));
  return {indexOfSelctedCity,selectedCountry,weather,optionsOfCountry,optionsOfcity,weatherOFCity,setselectedCountry,setIndexOfSelctedCity}
}

export default useHome
