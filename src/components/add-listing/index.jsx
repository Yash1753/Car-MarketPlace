import Header from "../Header.jsx"
import carDetails from "../../constant/carDetails.json"
import InputField from "./Components/InputField.jsx"
import Dropdown from "./Components/Dropdown.jsx"
import TextArea from "./Components/TextArea.jsx"

function AddListing() {
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
                  {item?.fieldType == "text" || item?.fieldType == "number" ? <InputField item={item} />
                  : item?.fieldType == "dropdown" ? <Dropdown item = {item}/>
                  :item?.fieldType == "textarea" ? <TextArea item = {item}/>          
                   : null}
                </div>
              ))}
            </div>
          </div>

          {/* Feature List*/}


          {/* Car Images*/}
          </form>

        
      </div>
    </div>
  )
}

export default AddListing