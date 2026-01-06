import { useState } from "react";
import { TbXboxXFilled } from "react-icons/tb";
//import { storage } from "../../../../configs/FirebaseConfig";
function UploadImages() {
    const [selectedFileList, setSelectedFileList] = useState([])
    const onFileSelected = (event)=>{
        const files = event.target.files;
        console.log(files)

        for(let i = 0 ; i < files.length ; i++){
            const file = files[i];
            console.log(file);
            //const objectURL = URL.createObjectURL(file) //convert a file in blob
            setSelectedFileList((prev)=> ([...prev, file]))

        }
    }   
    const onImageClick = (image,index) => {
                    const result = selectedFileList.filter((item) => item!= image )
                    setSelectedFileList(result)
    }

    

  return (
    <div>
        <h2 className="my-3 text-xl font-medium">Upload Car Images</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {selectedFileList.map((image,index)=>{
                return <div key={index}>
                    <TbXboxXFilled className="text-lg" onClick={()=> onImageClick(image,index)}/>
                    <img src={URL.createObjectURL(image)} alt="selectedimage" className="w-full h-32.5 object-cover rounded-xl" />

                </div>
            })}
            <label htmlFor="upload-images"> 
                <div className="text-lg border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md">
                    <h2  className="text-center text-lg text-primary">+</h2>
                </div>
            </label>
            <input type="file" name="uploadImages" multiple = {true} id= "upload-images" className="opacity-0" onChange={onFileSelected} />
        </div>
    </div>
  )
}

export default UploadImages