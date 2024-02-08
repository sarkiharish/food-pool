import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodItem from './FoodItem'
import { clearCart } from '../utils/cartSlice'

function Cart() {
    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        cartItems.length === 0 ? (
            <h1>😀 No items are added to cart‼</h1>
        ) : (
            <div className='bg-amber-200'>
               <div className='flex'>
               <h1> Cart Items - {cartItems.length}</h1>
                <button className="p-1 m-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300" onClick={
                        () => handleClearCart()
                    }>Clear Cart</button>
               </div>
                <div className='flex flex-wrap space-x-4'>
                    {
                        cartItems.map((item) => (
                            <FoodItem key={item.id} {...item} />
                        ))
                    }
                </div>
            </div>
        )
    );
}

export default Cart;
