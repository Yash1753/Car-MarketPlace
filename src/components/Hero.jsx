import Search from "./Search.jsx"

function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center p-10 py-20 gap-6 h-150 w-full bg-[#eef0fc]">
        <h2 className="text-lg">Find cars for sales near you</h2>
        <h2 className="text-[60px] font-bold ">Find Your Dream Car</h2>
        <Search/>
        <img src="/tesla.png" alt="tesla"  className="m-5 h-[650px]"/>
      </div>
    </div>
  )
}

export default Hero