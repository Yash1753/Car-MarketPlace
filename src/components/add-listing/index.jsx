import Header from "../Header.jsx"
import carDetails from "../../constant/carDetails.json"
import features from "../../constant/features.json"
import InputField from "./Components/InputField.jsx"
import Dropdown from "./Components/Dropdown.jsx"
import TextArea from "./Components/TextArea.jsx" 
import { Separator } from "../ui/separator.jsx"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { db } from "../../../configs/index.js"
import { carListing } from "../../../configs/schema.js"
import UploadImages from "./Components/UploadImages.jsx"
function AddListing() {
  const [formData,setFormData] = useState([]);
  const [featuresData,setfeaturesData] = useState([]);

  const handleInputChange = (name,value)=>{
    setFormData((prev) => ({...prev, [name]:value}))
  }

  const handleFeatureChange = (name,value)=>{
    setfeaturesData((prev) => ({...prev, [name]: value}))
    console.log(featuresData);
  }

  const onSubmit = async (e)=>{
    e.preventDefault();
    console.log(formData);
   
    try{
       const result = await db.insert(carListing).values({
        ...formData,
        features : featuresData
       })
      if(result){
      console.log("Data Saved");
       }
    }catch(e){
      console.log("Error:DB inseertion", e)
    }
   

  }

  return (
    <div>
      <Header/>
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-4xl">Add New Listing</h2>
          <form action="" className="p-10 border rounded-xl mt-10">
          {/* 3 Section will be there*/}
          {/* Car Details*/}
          <div>
            <h2 className="font-medium text-xl mb-6 ">
              Car Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {carDetails.carDetails.map((item,index)=>(
                <div key={index}>
                  <label htmlFor="" className="text-sm">{item?.label} {item.required &&<span className="text-red-400">*</span>}</label>
                  {item?.fieldType == "text" || item?.fieldType == "number" ? <InputField item={item} handleInputChange={handleInputChange}/>
                  : item?.fieldType == "dropdown" ? <Dropdown item = {item}  handleInputChange={handleInputChange}/>
                  :item?.fieldType == "textarea" ? <TextArea item = {item} handleInputChange={handleInputChange}/>          
                   : null}
                </div>
              ))}
            </div>
          </div>
          <Separator className="mt-10"/>
          {/* Feature List*/}
          <div>
            <h2 className="font-medium text-xl my-6 ">Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {features.features.map((item,index)=>(
                <div key = {index} className="flex gap-2 items-center">
                  <Checkbox onCheckedChange = {(value)=>handleFeatureChange(item.name,value)}/> <h2>{item?.label}</h2>
                </div>
              ))}
              
            </div>
          </div>
          <Separator className="my-10"/>
          {/* Car Images*/}
            <UploadImages/>
          <div className="mt-10 flex justify-end">
            <Button onClick={(e) => onSubmit(e)} type = 'submit' >Submit</Button>
          </div>
          </form>

        
      </div>
    </div>
  )
}

export default AddListing