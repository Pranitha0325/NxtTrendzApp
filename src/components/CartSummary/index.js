import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      const orderConformed = () => (
        <p>Your order has been placed successfully</p>
      )

      const changeOption = () => {}

      const disable = true

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <Popup
              model
              trigger={
                <button type="button" className="checkout-button d-sm-none">
                  Checkout
                </button>
              }
            >
              {close => (
                <>
                  <label htmlFor="dropDown">Payment Method</label>
                  <select id="dropDown" onChange={changeOption}>
                    <option value="option1" disabled={disable}>
                      Card
                    </option>
                    <option value="option2" disabled={disable}>
                      Net Banking
                    </option>
                    <option value="option3" disabled={disable}>
                      UPI
                    </option>
                    <option value="option4" disabled={disable}>
                      Wallet
                    </option>
                    <option value="option5">Cash on Delivery</option>
                  </select>
                  <p>
                    Number of items: {cartList.length} Total Price: {total}
                  </p>
                  <button
                    type="button"
                    onClick={() => close()}
                    onClick={orderConformed}
                  >
                    Conform Order
                  </button>
                </>
              )}
            </Popup>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
