import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MakeAdmin = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])

    const handleMakeAdmin =async email => {
      fetch(`http://localhost:5000/users/admin/${email}`)
      .then(res=>res.json())
      .then(data=>{
          console.log(data)
      })

    }



    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{user.userName}</td>
                            <td>{user.userEmail}</td>
                            <td>
                                {
                                    user.role ?
                                        <button class="btn btn-sm btn-accent">remove admin</button>
                                        :
                                        <button
                                            onClick={() => handleMakeAdmin(user.userEmail)}
                                            class="btn btn-sm btn-primary">
                                            make admin
                                        </button>


                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;