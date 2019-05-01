import React, { useState, useEffect } from 'react'

const EditUserForm = ({ currentUser, updateUser, setEditing}) => {
    const [user, setUser] = useState(currentUser);

    const handleInputChange = e => {
        const { name, value } = e.target;

        setUser({ ...user, [name]: value });
    }

    useEffect(() => {
        setUser(currentUser);
    }, [currentUser, updateUser, setEditing])

    return (
        <form
            onSubmit={e => {
                e.preventDefault();

                updateUser(user.id, user);
            }}
            className="form-group d-flex flex-column"
        >
            <label htmlFor="name">Name</label>
            <input className="form-control mt-2" type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label htmlFor="username">Username</label>
            <input className="form-control mt-2" type="text" name="username" value={user.username} onChange={handleInputChange} />
            <button className="btn btn-success mt-2" disabled={!user.name.length > 0 || !user.username.length > 0 }>Update user</button>
            <button className="btn btn-warning mt-2" onClick={() => setEditing(false)}>Cancel</button>
        </form>
    )
}

export default EditUserForm
