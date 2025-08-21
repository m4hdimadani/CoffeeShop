import { useState } from "react";
import { Products } from "../../helper/helper";
import { motion, AnimatePresence } from "framer-motion";

function Product() {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState("");

  const toggleCartHandler = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);

    if (exists) {
     
      const updated = cartItems.filter((item) => item.id !== product.id);
      setCartItems(updated);
      localStorage.setItem("cartItems", JSON.stringify(updated));
      setMessage(`${product.name} removed from cart ❌`);
    } else {
    
      const updated = [...cartItems, product];
      setCartItems(updated);
      localStorage.setItem("cartItems", JSON.stringify(updated));
      setMessage(`${product.name} added to cart ✅`);
    }


    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="w-[1184px] m-auto">
      <AnimatePresence>
        {message && (
          <motion.div
            key={message}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-xl shadow-lg z-50"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        {Products.map((i, index) => (
          <div className="flex gap-10 mt-20 mb-30" key={index}>
            <div className="w-[300px]">
              <img src={i.src} alt={i.alt} />
            </div>

            <div className="mt-10">
              <h2 className="text-3xl font-bold pb-10">{i.name}</h2>
              <p className="pb-10 w-[444px] h-[132px] font-serif">
                {i.title}
              </p>

              <div className="flex justify-between">
                <p>RM{i.price}</p>
                <div
                  onClick={() =>
                    toggleCartHandler({
                      id: index,
                      name: i.name,
                      price: i.price,
                      src: i.src,
                    })
                  }
                >
                  {cartItems.find((item) => item.id === index) ? (
                    <div className="w-[160px] p-1 text-center border-2 border-[#351C0F] cursor-pointer rounded-2xl hover:bg-[#351C0F] hover:text-white transition-colors duration-300 ease-in-out">
                      <button className="cursor-pointer">Remove Item?</button>
                    </div>
                  ) : (
                    <div className="w-[160px] p-1 text-center border-2 border-[#351C0F] cursor-pointer rounded-2xl hover:bg-[#351C0F] hover:text-white transition-colors duration-300 ease-in-out">
                      <button className="cursor-pointer">Add to Cart</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;