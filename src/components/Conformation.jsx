import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import imgOne from "../assets/imge/3.png";
import imgTow from "../assets/imge/2.png";
import imgTree from "../assets/imge/1.png";

function Conformation() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCart = savedCart.map((item) => ({
      ...item,
      quantity: item.quantity && item.quantity > 0 ? item.quantity : 1,
    }));
    setCartItems(updatedCart);
  }, []);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const deleteHandler = (product) => {
    const updatedCart = cartItems.filter((i) => i.id !== product.id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (product, value) => {
    const newQty = Math.max(1, Number(value));
    const updatedCart = cartItems.map((i) =>
      i.id === product.id ? { ...i, quantity: newQty } : i
    );

    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <>
      <div className="flex  items-center">
        <div className="w-[1184px] h-[600px] m-auto mt-10">
          <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <p className="text-lg text-center">Your cart is empty 🛒</p>
          ) : (
            <div>
              <div className="flex justify-between border-b py-4 w-[800px]">
                <h1 className="text-xl font-bold">Product</h1>
                <h1 className="text-xl font-bold">Quantity</h1>
                <h1 className="text-xl font-bold">Total Price</h1>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b py-4 w-[800px]"
                >
                  <div className="flex items-center gap-4">
                    <img src={item.src} alt={item.name} className="w-20 h-20" />
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                  </div>

                  <div>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item, e.target.value)
                      }
                      className="w-16 px-2 py-1 border rounded text-center"
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-gray-700">
                      RM {(item.price * item.quantity || 1).toFixed(2)}
                    </p>
                    <button
                      onClick={() => deleteHandler(item)}
                      className=" text-gray-800 font-bold cursor-pointer"
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}

              <div className="mt-6 text-right w-[700px]">
                <h2 className="text-2xl font-bold">
                  Total: RM {total.toFixed()}
                </h2>
              </div>
            </div>
          )}

          <Link to="/product">
            <button className="flex items-center gap-2 cursor-pointer w-[320px] h-[56px] rounded-4xl justify-center border-2 border-[#351C0F] hover:bg-[#351C0F] hover:text-white text-xl transition-colors duration-300 ease-in-out">
              <IoIosArrowBack />
              Back to Order
            </button>
          </Link>
        </div>
        <div className="bg-[#351C0F] w-[324px] h-[453px] mr-10 rounded-4xl">
          <h1 className="text-5xl font-bold text-center p-10 text-white">
            Pay By
          </h1>
          <div className="m-10">
            <Link to="#">
              <img
                src={imgOne}
                alt="imgOne"
                className="w-[248px] h-[69px] mb-5 "
              />
              <img
                src={imgTree}
                alt="imgTree"
                className="w-[248px] h-[69px] mb-5 "
              />
              <img src={imgTow} alt="imgTow" className="w-[248px] h-[69px] " />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conformation;
