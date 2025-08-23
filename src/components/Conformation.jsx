import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function Conformation() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const deleteHandler = (product) => {
    const deleteProduct = cartItems.filter((i) => i.id !== product.id);
    setCartItems(deleteProduct);
    localStorage.setItem("cartItems", JSON.stringify(deleteProduct));
  };

  return (
    <div className="w-[1184px] h-[600px] m-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-lg text-center">Your cart is empty 🛒</p>
      ) : (
        <div>
          <div className="flex justify-start gap-50 border-b py-4 w-[800px]">
            <h1 className="text-xl font-bold">Product</h1>
            <h1 className="text-xl font-bold">Quality</h1>
            <h1 className="text-xl font-bold">Total Price</h1>
          </div>
          {cartItems.map((item, id) => (
            <div
              key={id}
              className="flex items-center gap-6 border-b py-4  w-[800px]"
            >
              <img src={item.src} alt={item.name} className="w-24 h-24" />
              <div className="flex gap-50 ">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                </div>
                <div>
                  <p className="text-gray-700">RM {item.price}</p>
                </div>
                <div onClick={() => deleteHandler(item)}>
                  <span>X</span>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6 text-right w-[700px] ">
            <h2 className="text-2xl font-bold">Total: RM {total}</h2>
          </div>
        </div>
      )}
      <Link to="/product">
        <button className="flex items-center gap-2 cursor-pointer w-[320px] h-[56px] rounded-4xl justify-center  border-2 border-[#351C0F] hover:bg-[#351C0F] hover:text-white text-xl transition-colors duration-300 ease-in-out">
          {" "}
          <IoIosArrowBack />
          Back to Order
        </button>
      </Link>
    </div>
  );
}

export default Conformation;
