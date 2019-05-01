import React, { useState } from 'react';

const AddUserForm = ({ addUser }) => {
    const initialFormState = { id: null, name: '', username: '' };
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = e => {
        const { name, value } = e.target;

        setUser({ ...user, [name]: value });
    }

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                if (!user.name || !user.username) return;
                addUser(user);
                setUser(initialFormState);
            }}
            className="form-group d-flex flex-column"
        >
            <label htmlFor="name">Name</label>
            <input className="form-control mt-2" type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label htmlFor="username">Username</label>
            <input className="form-control mt-2" type="text" name="username" value={user.username} onChange={handleInputChange} />
            <button className="btn btn-success mt-2">Add new user</button>
        </form>
    )
}

export default AddUserForm;
