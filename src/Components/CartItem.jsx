import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { remove } from '../Redux/Slices/CartSlice'
import toast from 'react-hot-toast'

const CartItem = ({ item, itemIndex }) => {

  const dispatch = useDispatch()
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (

    <div className='md:flex justify-start items-start mb-8 md:space-x-10 border-b-2 '>

      <div>
        <img src={item.image} alt="img" width="260" className=' m-2' />
      </div>


      <div>

        <h1 className=' text-gray-700 font-semibold text-xl text-left'>{item.title}</h1>
        <h1 className=' text-gray-400 font-normal text-lg text-left mt-5 '>{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>


        <div className=' flex justify-between items-center mt-5 mb-5 ' >
          <p className='text-green-600 font-semibold text-xl '>${item.price}</p>

          <div onClick={removeFromCart} className='bg-red-300 text-xl text-red-500 rounded-full p-2 hover:cursor-pointer shadow-xl hover:scale-110 transition-all duration-300'>
            <AiTwotoneDelete />
          </div>
        </div>
      </div>

    </div>

  )
}

export default CartItem
