
import logo from "../assets/logo/Coffee Shop.png"

function Footer() {
  return (
    <div className="w-[100%] h-[383px] bg-[#351C0F] p-10">
      <div>
        <div className="flex items-center gap-10">
            <img src={logo} alt="logo" />
            <p className="text-white">one Stop | one Heart | one Cup</p>
        </div>
        <div className="flex justify-around  mt-20">
          <div className="bg-[#E9E9E9] w-[343px] h-[75px] rounded-4xl text-center flex justify-center cursor-pointer text-2xl ">
            <button className="cursor-pointer">our Company</button>
          </div>
          <div className="bg-[#E9E9E9] w-[343px] h-[75px] rounded-4xl text-center flex justify-center cursor-pointer text-2xl ">
            <button className="cursor-pointer">our Coffee</button>
          </div>
          <div className="bg-[#E9E9E9] w-[343px] h-[75px] rounded-4xl text-center flex justify-center cursor-pointer text-2xl ">
            <button className="cursor-pointer">our Pastry</button>
          </div>
        </div>
        <div className="pt-20 text-white">
          <p>@2025 By <a href="https://github.com/m4hdimadani">Mahdi Madani</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer