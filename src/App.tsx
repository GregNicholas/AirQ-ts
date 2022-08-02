import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import useFetch from "./hooks/useFetch";
const AIR_QUALITY_BASE_API = "https://api.airvisual.com/v2/";
const AQ_API_KEY = "key=7d313426-f697-4075-a211-0dbc09dc9bd2";
const AQ_API_KEY2 = "key=e2491cd6-da4b-49b6-bd92-c0d69d8f8a8d";

export default function App() {
  const [chooseLocation, setChooseLocation] = useState("auto");
  const [locationData, setLocationData] = useState("");
  // const [favorites, setFavorites] = useState<any>(
  //   JSON.parse(window.localStorage.getItem("favoritePlaces")) || []
  // );
  const getLocalData = useFetch(
    `${AIR_QUALITY_BASE_API}nearest_city?${AQ_API_KEY2}`,
    {}
  );
  // useEffect(() => {
  //   getLocalData.doFetch();
  //   console.log("in useEffect: ", getLocalData.data?.data);
  // }, []);
if(getLocalData.data){
  console.log(getLocalData.data)
}
  return (
    <div>
      <Navbar
        chooseLocation={chooseLocation}
        setChooseLocation={setChooseLocation}
        setLocationData={setLocationData}
      />
      {getLocalData.loading ? (
        <p>Loading local data... </p>
      ) : getLocalData.error ? (
        <p>
          Error fetching data: {getLocalData.error.response.data.data.message}
        </p>
      ) : getLocalData.data ? (
        <p>{getLocalData.data.data.city}</p>
      ) : null}
      <button onClick={() => getLocalData.doFetch()}>get Local</button>
    </div>
  );
}
