import React, {useState} from "react";

const Users = () => {
    const [users, setUsers] = useState([
        {
            id:1,
            name:'Vrushabh',
            email:'exam@gmail.com'
        },
        {
            id:2,
            name:'rohan',
            email:'rohan@gmail.com'
        },
        {
            id:3,
            name:'Jayesh',
            email:'Jayesh@gmail.com'
        },
        {
            id:4,
            name:'Kiran',
            email:'Kiran@gmail.com'
        },
    ])
    return (
    <table className="table table-dark">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                
            </tr>
        </thead>
        <tbody>
            {
                users.map(user => {
                    return (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    )
}

export default Users;