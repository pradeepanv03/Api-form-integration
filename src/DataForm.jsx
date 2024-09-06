import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './DataForm.css';
export default function DataForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handlesubmit = (event) => {
        event.preventDefault();

        axios.get("https://mytravels.store/api.php", {
            params: {
                name: name,
                email: email,
                action: "create"
            }
        })
        .then(() => {
            alert("Added");
            setName("");
            setEmail("");
            navigate("/table");
        })
        .catch((error) => {
            console.log(error, " Getting Error");
            alert("Error");
        });
    }

    return (
        <>
        <div className="container">
            <h2>Add Data</h2>
            <form onSubmit={handlesubmit}>
                <label>Name: </label>
                <input type="text" placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <br /><br />

                <label>Email: </label>
                <input type="text" placeholder="Enter Email Id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <br /><br />

                <input type="submit" value="Submit" />
            </form>
        </div>
        </>
    );
}