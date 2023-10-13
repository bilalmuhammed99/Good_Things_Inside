import { useDispatch, useSelector } from "react-redux"
import "./Cart.css"
import React from 'react'
import { removeItemFromCart } from "../../Store/Slices/CartSlice";

const Cart = () => {

  const cartDetails = useSelector(state => state.cart);
  const dispatch = useDispatch();
  let totalCost = 0 ;
  let calcTotalPrice = (()=>{
    cartDetails.forEach(element => {
     return totalCost +=  element.price *element.quanitiy ;
     
    });
  })()

  return (
    <div className="table-responsive container-fluid ">
      <h1 className="text-center me-4 d-inline my-3">Shoping Cart</h1>
      <h4 className="text-center d-inline text-success">Total Cost : {totalCost.toFixed(2)} $ </h4>
  <table className="table table-striped
  table-hover	
  table-borderless
  table-dark
  align-middle">
    <thead className="table-light">
    </thead>
    <tbody><tr>
        <th></th>
        <th>Product</th>
        <th>Rating</th>
        <th>Price </th>
        <th>Quantity</th>
        <th />
      </tr>
    </tbody>
    <tbody className="table-group-divider">
      {cartDetails.map((cart) => <tr key={cart.id} className="table-primary">
        <td scope="row"> <img className="rounded rounded-3" src={cart.image} style={{width:60}}  /> </td>
        <td scope="row" className="h5">{cart.title}</td>
        <td> {cart.rating.rate} </td>
        <td> {cart.price * cart.quanitiy} $</td>
        <td> {cart.quanitiy} </td>
        <td>  <button onClick={()=>{dispatch(removeItemFromCart(cart))}} className="btn     btn-danger w-100 ">Remove</button> </td>
      </tr>  )}
     
      {/* <tr className="table-primary">
        <td scope="row">Item</td>
        <td>Item</td>
        <td>Item</td>
        <td>Item</td>
      </tr> */}
    </tbody>
    <tfoot>
    </tfoot>
  </table>
</div>

    
  )
}

export default Cart