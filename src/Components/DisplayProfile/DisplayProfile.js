import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const DisplayProfile = () => {
    const [users, setUsers] = useState({})
    const [user, loading] = useAuthState(auth)

    useEffect(() => {
        fetch(`https://manufacture-old-production.up.railway.app/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users,user])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='w-2/4 lg:mt-20 ml-5'>
                <h5 className='text-xl mt-2'>Name: <span>{user?.displayName}</span></h5>
                <h5 className='text-xl mt-2'>Email: <span>{user?.email}</span></h5>
                <h5 className='text-xl mt-2'>Educational LeveL: <span>{users?.educationLevel}</span></h5>
                <h5 className='text-xl mt-2'>Name of Educational Institute: <span>{users?.educationalInstitute}</span></h5>
                <h5 className='text-xl mt-2'>Phone: <span>{users?.phone}</span></h5>
                <h5 className='text-xl mt-2'>Location: {users?.location}</h5>
                <h5 className='text-xl mt-2'>Linkdin  Link: {users.linkdinLink}</h5>
            </div>

        </div>
    );
};

export default DisplayProfile;