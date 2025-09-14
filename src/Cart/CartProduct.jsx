import { useContext } from "react";
import { ProductDataContext } from "../ContextDataStore/ProductData";

function CartProduct() {
  const { Products, dispatch } = useContext(ProductDataContext);

  function productCountHandle(incrementOrDecrement, index, productID) {
    if (incrementOrDecrement === 1) {
      dispatch({ type: "increment", payload: index });
    } else if (incrementOrDecrement === 0) {
      dispatch({ type: "RemoveFromCart", payload: productID });
    } else {
      dispatch({ type: "decrement", payload: index });
    }
  }
  return (
    <>
      {Products.Cart.map((cartItem, index) => (
        <div
          key={index}
          className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4"
        >
          <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
            <img
              src={cartItem.imgUrl}
              alt={cartItem.productname}
              className="h-full w-auto object-cover"
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between">
              <h3 className="font-medium">{cartItem.productname}</h3>
              <span
                onClick={() => productCountHandle(0, index, cartItem.productID)}
                className="text-red-500 text-lg cursor-pointer select-none"
              >
                ×
              </span>
            </div>
            <p className="text-sm text-gray-500">Size: {cartItem.size}</p>
            <p className="text-sm text-gray-500">Color: {cartItem.color}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="font-bold">${cartItem.price}</p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => productCountHandle(-1, index)}
                  className="w-6 h-6 bg-gray-100 rounded flex items-center cursor-pointer justify-center select-none"
                >
                  −
                </button>
                <span className="text-sm">{cartItem.quantity}</span>
                <button
                  onClick={() => productCountHandle(1, index)}
                  className="w-6 cursor-pointer h-6 bg-gray-100 rounded flex items-center justify-center select-none"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartProduct;
