import React, { useEffect, useState } from "react";

const Tempapp = () =>{

    const [city, setCity] = useState("Kathmandu");
    const [search, setSearch] = useState("Kathmandu");

    useEffect(()=>{
        const fetchApi = async ()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a4229c046a8180f4705e9ea6baf2bf51`;
            console.log(url);
            const response = await fetch(url);

            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])
    return(
        <div className="box">
            <div className="inputData">
                <input
                type = "search"
                value={search}
                className="inputField"
                onChange={(event)=>{
                     setSearch(event.target.value)
                }} />
            </div>

            {!city ?(
                <p>No Data Found</p>
            ) : (
                <div className="info">
                <h2 className="location">
                <i className="fas fa-street-view"></i>{search}
                </h2>
                <h1 className="temp">
                    {city.temp}&deg;cel 
                </h1>
                <h3 className="tempmin_max"> Min : {city.temp_min}&deg;cel | Max : {city.temp_max}&deg;cel</h3>
                <div className="wave-one"></div>
                <div className="wave-two"></div>
                <div className="wave-three"></div>
            </div>
            )
            }
        </div>
    );
}

export default Tempapp;