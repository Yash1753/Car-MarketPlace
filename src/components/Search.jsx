import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "./ui/separator"
import { CiSearch } from "react-icons/ci";
import {CarMakes,Pricing} from "../constant/Data.jsx"

function Search() {
  return (
    <div className=" p-2  md:p-5 bg-white rounded-md  md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%] ">
            <Select>
            <SelectTrigger className=" outline-none md:border-none w-full shadow-none">
                <SelectValue placeholder="Cars" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">New</SelectItem>
                <SelectItem value="dark">Used</SelectItem>
                
            </SelectContent>
            </Select>

            <Separator orientation="vertical" className = "hidden md:block"/>

            <Select>
            <SelectTrigger className="outline-none md:border-none w-full shadow-none">
                <SelectValue placeholder="Car Makers" />
            </SelectTrigger>
            <SelectContent>
                {CarMakes.map((maker) => (
                    <SelectItem value={maker.name} key = {maker.id}>{maker.name}</SelectItem>
                ))}
                
               
            </SelectContent>
            </Select>

            <Separator orientation="vertical"  className = "hidden md:block"/>

              <Select>
            <SelectTrigger className="outline-none md:border-none w-full shadow-none">
                <SelectValue placeholder="Pricing" />
            </SelectTrigger>
            <SelectContent>
                {Pricing.map((p)=>(
                    <SelectItem value={p.id} key = {p.id}>{p.amount}$</SelectItem>
                ))}
            </SelectContent>
            </Select>
            <div>
            <CiSearch className="text-[50px] bg-primary rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer" />
            </div>
    </div>
  )
}

export default Search