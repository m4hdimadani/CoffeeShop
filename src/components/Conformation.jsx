import { useEffect, useState } from "react";

function Conformation() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="w-[1184px] m-auto mt-10">
    <h1 className="text-3xl font-bold mb-6">Checkout Page</h1>

    {cartItems.length === 0 ? (
      <p className="text-lg">Your cart is empty 🛒</p>
    ) : (
      <div>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 border-b py-4"
          >
            <img src={item.src} alt={item.name} className="w-24 h-24" />
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-700">RM {item.price}</p>
            </div>
          </div>
        ))}

        <div className="mt-6 text-right">
          <h2 className="text-2xl font-bold">Total: RM {total}</h2>
        </div>
      </div>
    )}
  </div>
  );
}

export default Conformation;
