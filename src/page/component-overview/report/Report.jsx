import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import toast from "react-hot-toast";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Report() {
  const [continent, setContinent] = useState([]);
  const [selectedContinentId, setSelectedContinentId] = useState(null);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);
  const [zoom, setZoom] = useState(10);
  const [farm, setFarm] = useState("");
  const [location, setLocation] = useState(null);

  // Initial location state, fallback to default location if not available
  const defaultLocation = { latitude: 37.7749, longitude: -122.4194 };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      toast.error("Geolocation not supported");
    }
  };

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
  };

  const error = () => {
    // toast.error("Unable to retrieve your location, using default location.");
    setLocation(defaultLocation);
  };

  const handleZoom = (event) => {
    setZoom(parseInt(event.target.value, 10));
  };

  const handleChange = (selectedOption) => {
    if (selectedOption) {
      setSelectedContinentId(selectedOption.value);
    }
  };

  const handleChangeCountry = (selectedOption) => {
    const data = countries.find(
      (country) => country.id == selectedOption.value
    );
    setCountry(data);
  };

  useEffect(() => {
    handleLocationClick();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://agriwaveback.vercel.app/countries/"
        );
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const result = await response.json();
        setCountries(result);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (country && country.id) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://agriwaveback.vercel.app/fielddata/${country.id}`
          );
          if (!response.ok) {
            throw new Error("Error fetching data");
          }
          const result = await response.json();
          setFarm(result);
          console.log(result);
        } catch (error) {
          // Handle error
          console.error("Error fetching country data:", error);
        }
      };
      fetchData();
    }
  }, [country]);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedContinentId) {
        try {
          const response = await fetch(
            `https://agriwaveback.vercel.app/countries/${selectedContinentId}`
          );
          if (!response.ok) {
            throw new Error("Error fetching data");
          }
          const result = await response.json();
          setCountries(result);
        } catch (error) {
          // Handle error
        }
      }
    };

    fetchData();
  }, [selectedContinentId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://agriwaveback.vercel.app/continent"
        );
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const result = await response.json();
        setContinent(result);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-2 md:gap-6 max-w-screen-lg mx-auto">
        <div>
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Select Continent</span>
            </label>
            <select
              className="select select-secondary w-full rounded-sm"
              onChange={(e) => handleChange(e.target)}
            >
              <option disabled selected>
                Pick your continent
              </option>
              {continent?.map((con) => (
                <option key={con.id} value={con.id}>
                  {con.name}
                </option>
              ))}
            </select>
          </div>

          {countries.length > 0 && (
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Select Country</span>
              </label>
              <select
                className="select select-secondary w-full rounded-sm"
                onChange={(e) => handleChangeCountry(e.target)}
              >
                <option disabled selected>
                  Pick your country
                </option>
                {countries?.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="label">
            <span className="label-text">Zoom Map</span>
          </label>
          <select
            className="select select-secondary w-full rounded-sm"
            onChange={handleZoom}
          >
            <option disabled selected>
              Zoom Map
            </option>
            <option value={0}>0</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
            <option value={30}>30</option>
            <option value={35}>35</option>
            <option value={40}>40</option>
            <option value={45}>45</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      {country && (
        <div>
          {farm[0] ? (
            <div className="max-w-screen-lg mx-auto">
              <ul>
                <li className="mt-4 ">
                  <span className="text-warning mr-2 mt-2">Crop:</span>
                  {farm[0]?.crop}
                </li>
                <li className="mt-4 ">
                  <span className="text-warning mr-2 mt-2">Humidity:</span>
                  {farm[0]?.humidity}
                </li>
                <li className="mt-4 ">
                  <span className="text-warning mr-2 mt-2">Land:</span>
                  {farm[0]?.land}
                </li>
                <li className="mt-4 ">
                  <span className="text-warning mr-2 mt-2">Soil:</span>
                  {farm[0]?.soil}
                </li>
                <li className="mt-4 ">
                  <span className="text-warning mr-2 mt-2">Temperature:</span>
                  {farm[0]?.temperature}
                </li>
                <li className="mt-4 mb-4">
                  <span className="text-warning mr-2 mt-2">Water:</span>
                  {farm[0]?.water}
                </li>
              </ul>
            </div>
          ) : (
            <h4 className="max-w-screen-lg mx-auto text-center text-warning font-bold mb-4">
              No Data Available For This Country
            </h4>
          )}
        </div>
      )}

      <div
        className="max-w-screen-lg mx-auto"
        style={{ height: "100vh", width: "100%" }}
      >
        {location ? (
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyB2fhQkaC2i03Kov-VNTceVysxC1YOIsxg",
            }}
            center={
              country && country.latitude && country.longitude
                ? { lat: country.latitude, lng: country.longitude }
                : { lat: location.latitude, lng: location.longitude }
            }
            zoom={zoom}
          >
            <AnyReactComponent
              lat={
                country && country.latitude
                  ? country.latitude
                  : location.latitude
              }
              lng={
                country && country.longitude
                  ? country.longitude
                  : location.longitude
              }
              text={country ? country.name : "Your Location"}
            />
          </GoogleMapReact>
        ) : (
          <div className="max-w-screen-md mx-auto">
            Please select a valid country to display the map.
          </div>
        )}
      </div>
    </div>
  );
}
