import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCity(){
    
    const [countries, setCountries] = useState([]);

    const Navigate = useNavigate();

    const [form, setForm] = useState(
        {
            country : "select",
            city : "", 
            population : ""
        }
    );

    function handleChange(e){
        setForm(
            {...form, [e.target.id] : e.target.value}
        );
    }

    useEffect(fetchCountries, []);

    function fetchCountries(){
        getCountries();
    }

    async function getCountries(){
        try{
            let res = await fetch("http://localhost:8080/countries");
            let res_data = await res.json();
            setCountries(res_data);
        }catch(error){
            console.log(error);
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        saveCities();
    }

    async function saveCities(){
        try{
            await fetch("http://localhost:8080/cities", {
                method : "POST",
                body : JSON.stringify(form),
                headers : {
                    "Content-Type" : "application/json"
                }
            });
            setForm({
                country : "select",
                city : "", 
                population : ""
            });
        }catch(error){
            console.log(error);
        }
    }

    return(
        <div>
            <button onClick={()=>{
                Navigate("/");
            }}>Go to Main page</button>
            <form onSubmit={handleSubmit}>
                <select id="country" value={form.country} onChange={handleChange}>
                    <option id="" value="select">Select Country</option>
                    {countries.map((country) => {
                        return (
                            <option key={country.id} value={country.country} >{country.country}</option>
                        );
                    })}
                </select>

                <input type="text" id="city" value={form.city} placeholder="enter city name" onChange={handleChange} />

                <input type="number" id="population" value={form.population} placeholder="enter city population" onChange={handleChange} />

                <input type="submit" value="Save" />
            </form>
        </div>
    );
}