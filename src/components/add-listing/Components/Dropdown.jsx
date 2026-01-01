import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function Dropdown({item}) {
  return (
    <div>
    <Select>
        <SelectTrigger className="w-full">
            <SelectValue placeholder={item?.label} />
         </SelectTrigger>
    <SelectContent>
        {item?.options?.map((option,index)=>(
             <SelectItem key = {index}value={option} className= "overflow-auto overflow-y-scroll]">{option}</SelectItem>
        ))}
       
       
    </SelectContent>
    </Select>
    </div>
  )
}

export default Dropdown