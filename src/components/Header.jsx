import Logo from "../assets/logo/Coffee Shop.png"



function Header() {
  return (
    <div className="flex justify-between p-5 m-auto bg-amber-950">
      <div>
      <img src={Logo} alt="logo" className="w-[280px] h-[50px] pl-5"/>
      </div>
      <div className="text-white flex gap-8 pr-5">
        <div>
            <h1 className="text-xl font-thin cursor-pointer">Products</h1>
        </div>
        <div>
            <h1 className="text-xl font-thin cursor-pointer">Checkout</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
