import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MakeAdmin = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://agile-dawn-56972.herokuapp.com/users', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])

    const handleMakeAdmin = async email => {
        fetch(`https://agile-dawn-56972.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Successfully make an admin')
                }
            })

    }



    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
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
                        users?.map((user, index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{user.userName}</td>
                            <td>{user.userEmail}</td>
                            <td>
                                {
                                    user.role ?
                                        <button className="btn btn-sm btn-accent">remove admin</button>
                                        :
                                        <button
                                            onClick={() => handleMakeAdmin(user.userEmail)}
                                            className="btn btn-sm btn-primary">
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