import { Separator } from "./ui/separator.jsx"
import { LuFuel } from "react-icons/lu";
import { BsSpeedometer2 } from "react-icons/bs";
import { TbManualGearboxFilled } from "react-icons/tb";
import { MdOutlineOpenInNew } from "react-icons/md";

function CarListItem({car}) {
  return (
    <div className="rounded-xl bg-white border  hover:shadow-md cursor-pointer">
        <h2 className="absolute m-2 bg-green-400 rounded-full text-sm pb-1 px-2 text-white">New</h2>
        <img src={car?.image} alt="image" width={300} height={250}  className="rounded-t-xl w-full"/>
        <div>
            <h2 className='font-bold text-black text-lg mb-2 p-4'>{car?.name}</h2>
            <Separator/>
            <div className="grid grid-cols-3 mt-5 ">
                <div  className="flex flex-col items-center" >
                    <LuFuel  className="text-lg mb-2"/>
                    <h2>{car?.miles}Miles</h2>
                </div>
                <div className="flex flex-col items-center">
                    <BsSpeedometer2 className="text-lg mb-2"/>
                    <h2>{car?.fuelType}</h2>
                </div>
                <div className="flex flex-col items-center">
                    <TbManualGearboxFilled className="text-lg mb-2"/>
                    <h2>{car?.gearType}</h2>
                </div>
            </div>
            <Separator className="my-2"/>
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-xl">
                    ${car?.price}
                </h2>
                <h2 className="text-primary text-sm flex gap-2 items-center" >
                   
                    View Details
                     <MdOutlineOpenInNew/>
                    </h2>
            </div>
        </div>
    </div>
  )
}

export default CarListItem