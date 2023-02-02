import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddAProduct = () => {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const imageStorage_Key = 'dd8247b94d9772d98db3e5f9b068a8d7'

    const onSubmit = data => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorage_Key}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const description = [data.description]
                    const product = {
                        img,
                        name: data.name,
                        available_quantity: data.available_quantity,
                        minimum_quantity: data.minimum_quantity,
                        price: data.price,
                        description,
                    }

                    fetch('https://manufacture-old.vercel.app/product', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Successfully add product')
                                reset()
                            } else {
                                toast.error('Failed to add product')
                            }

                        })

                }

            })
    }

    return (
        <>
            <h1 className='text-center font-bold mt-5'>Add Product Page</h1>
            <div className='w-4/6 mx-auto border-2 p-10 my-5 rounded-md'>
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3'>
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Product's Name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Product\'s Name is Require'
                                }

                            })} />
                        <label className="label">
                            {errors?.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control">
                        <input
                            type="file"
                            placeholder="Product's image url"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Require'
                                }

                            })} />
                        <label className="label">
                            {errors?.image?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.image.message}</span>}
                        </label>
                    </div>
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Available Quantity"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            {...register("available_quantity", {
                                required: {
                                    value: true,
                                    message: 'Available Quantity is Require'
                                }

                            })} />
                        <label className="label">
                            {errors?.available_quantity?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.available_quantity.message}</span>}
                        </label>
                    </div>
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Minimum Quantity"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            {...register("minimum_quantity", {
                                required: {
                                    value: true,
                                    message: 'Minimum Quantity is Require'
                                }

                            })} />
                        <label className="label">
                            {errors?.minimum_quantity?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.minimum_quantity.message}</span>}
                        </label>
                    </div>
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Price(per unit)"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is Require'
                                }

                            })} />
                        <label className="label">
                            {errors?.price?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.price.message}</span>}
                        </label>
                    </div>
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Description of product(you post more description point.you just follow (' ',' ') like an array)"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-600 dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is Require'
                                }

                            })} />
                        <label className="label">
                            {errors?.description?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.description.message}</span>}
                        </label>
                    </div>
                    <div>
                        <input type="submit" className="btn btn-primary  w-full max-w-xs text-white" value='Submit' />
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddAProduct;