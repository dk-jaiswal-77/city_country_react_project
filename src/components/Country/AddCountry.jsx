import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCountry(){

    const Navigate = useNavigate();

    const [input, setInput] = useState("");

    function handleChange(e){
        setInput(e.target.value);
    }

    async function saveCountry(country){
        try{
            await fetch("http://localhost:8080/countries", {
                method : "POST",
                body : JSON.stringify(country),
                headers : {
                    "Content-Type" : "application/json"
                }
            });
            setInput("");
        }catch(error){
            console.log(error);
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        let country = {country : input};
        saveCountry(country);
    }

    return(
        <div>
            <button onClick={()=>{
                Navigate("/")
            }}>Go to mainpage</button>
            
            <form onSubmit={handleSubmit}>
                <input type="text" id="country" placeholder="Add country" value={input} onChange={handleChange} />
                <input type="submit" value="Save" />
            </form>
        </div>
    );
}