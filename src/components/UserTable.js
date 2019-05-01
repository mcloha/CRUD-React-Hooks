import React from 'react';

const UserTable = ({ users, deleteUser, editRow, editing }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? (
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button className="btn btn-primary" onClick={() => editRow(user)} disabled={editing}><i className="fas fa-edit"></i></button>
                                <button className="btn btn-danger" onClick={() => deleteUser(user.id)} disabled={editing}><i className="fas fa-trash-alt"></i></button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default UserTable;
