import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function DataTable() {
    const [value, setValue] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const getdata = () => {
        axios.get('https://mytravels.store/api.php')
        .then((data1) => {
            console.log(data1.data, "Show Data");
            setValue(data1.data);
        })
        .catch((error) => {
            console.log(error, " Getting Error");
        });
    }

    useEffect(() => {
        getdata();
    }, []);

    const deleted = (id) => {
        axios.get('https://mytravels.store/api.php', {
            params: {
                id: id,
                action: "delete"
            }
        })
        .then(() => {
            alert("Deleted");
            getdata();
        })
        .catch((error) => {
            console.log(error, " Getting Error");
            alert("Error");
        });
    }

    const edit = (data) => {
        setName(data.name);
        setEmail(data.email);
        setIsEditing(true);
        setEditId(data.id);
    }

    const handlesubmit = (event) => {
        event.preventDefault();

        if (isEditing) {
            axios.get("https://mytravels.store/api.php", {
                params: {
                    id: editId,
                    name: name,
                    email: email,
                    action: "update"
                }
            })
            .then(() => {
                alert("Updated");
                getdata();
                resetForm();
            })
            .catch((error) => {
                console.log(error, " Getting Error");
                alert("Error");
            });
        }
    }

    const resetForm = () => {
        setName("");
        setEmail("");
        setIsEditing(false);
        setEditId(null);
    }

    return (
        <div className="container">
            <h1>Show All Users</h1>
            <Link to="/">Add Data</Link>
            
            <table className="table table-bordered m-3">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {value.map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>{d.created_at}</td>
                            <td>
                                <button onClick={() => edit(d)}>Edit</button>
                                <button onClick={() => deleted(d.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isEditing && (
                <div className="container">
                    <h2>Edit Data</h2>
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

                        <input type="submit" value="Update" />
                    </form>
                </div>
            )}
        </div>
    );
}
