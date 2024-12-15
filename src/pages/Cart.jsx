import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../Components/CartItem'

const Cart = () => {

  const { cart } = useSelector((state) => state)
  const [totalAmount, settotalAmount] = useState();

  useEffect(() => {
    settotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart]);

  return (
    <div className='h-[80vh] '>
      {
        cart.length > 0 ?
          (<div className='max-w-6xl md:flex justify-evenly items-start  mb-10 md:space-x-0 p-5 mx-auto'>
            <div className='md:w-[50%]'>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>

            <div className='flex flex-col justify-between h-full space-y-60 mt-10'>
              <div>
                <div className='text-2xl font-semibold text-green-600 capitalize'>Your Cart</div>
                <div className='text-5xl font-semibold text-green-600 mb-3'>Summary</div>
                <p>
                  <span className='text-xl font-medium'> Total item :{cart.length}</span>
                </p>
              </div>

              <div className='w-full'>
                <p className='text-xl font-medium'>Total Amount : ${totalAmount}</p>
                <button className='bg-green-600 text-white font-semibold px-3 py-2
               rounded-md mt-5 w-full '>Checkout Now</button>
              </div>
            </div>

          </div>)
          : (<div className='flex flex-col items-center'>
            <h2 className='text-xl font-semibold'>Cart Empty</h2>
            <Link to="/">
              <button className='bg-green-600 text-white font-semibold px-3 py-2
               rounded-md mt-5'>Shop Now</button>
            </Link>
          </div>)
      }
    </div>
  )
}

export default Cart
