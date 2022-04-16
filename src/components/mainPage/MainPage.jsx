import {useState, useEffect} from "react";

import cityAction from "../../redux/cities/action";
import { useSelector, useDiapatch, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Main(){

    const dispatch = useDispatch();

    const Navigate = useNavigate();

    let cities = useSelector((state) => state.cities.cities);
    // console.log(cities);

    async function getCities(){
        try{
            let res = await fetch("http://localhost:8080/cities");
            let res_data = await res.json();
            dispatch(cityAction(res_data));
        }catch(error){
            console.log(error);
        }
    }

    function fetchCities(){
        getCities();
    }

    useEffect(fetchCities, []);

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Population</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cities.map(city => {
                        return (
                            <tr key={city.id}>
                                <td>{city.id}</td>
                                <td>{city.country}</td>
                                <td>{city.city}</td>
                                <td>{city.population}</td>
                                <td onClick={()=>{
                                    Navigate("/add-city");
                                }}>Edit</td>
                                <td>Delete</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}