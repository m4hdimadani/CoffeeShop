import { Link } from "react-router-dom";
import Logo from "../assets/logo/Coffee Shop.png";


function Header() {
  return (
    <div className="flex justify-between p-5 m-auto bg-[#351C0F] ">
      <Link to='/'>
        <img src={Logo} alt="logo" className="w-[280px] h-[50px] pl-5" />
      </Link>
      <div className="text-white flex gap-8 pr-5">
        <div>
          <Link className="text-xl font-thin cursor-pointer hover:text-amber-100" to="/product">
           Product
          </Link>
        </div>
        <div>
          <Link className="text-xl font-thin cursor-pointer hover:text-amber-100" to="/conformation">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
