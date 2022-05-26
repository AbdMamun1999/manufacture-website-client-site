import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import Order from '../Order/Order';

const MyOrder = () => {
  const [user,loading] = useAuthState(auth)

  const { data: orders, isLoading, refetch} = useQuery(['orders',user], () =>
    fetch(`http://localhost:5000/orders/${user?.email}`).then(res =>
      res.json()
    )
  )
  if (isLoading || loading) {
    return <Loading></Loading>
  }


  return (
    <div className='grid grid-cols-1 gap-5 lg:px-10 py-10'>
      {
        orders?.map(order => <Order
          key={order._id}
          order={order}
          refetch={refetch}
        ></Order>)
      }
    </div>
  );
};

export default MyOrder;