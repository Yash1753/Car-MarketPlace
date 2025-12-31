import { category } from "../constant/Data.jsx"
function Category() {
  return (
    <div className='mt-40'>
        <h2 className='font-bold text-3xl text-center mb-6'>Browse by Type</h2>

        <div className="grid grid-cols-3 md:grid-cols-6 sm:grid-cols-4 lg:grid-cols-9 gap-6 px-20">
            {category.map((type) => (
                <div  key ={type.id} className="border border-rounded-xl p-3 flex flex-col items-center hover:shadow-md hover:scale-105 cursor-pointer" > 
                    <img src={type.icon} alt="icon" width={35} height={35} />
                    <h2 className="mt-2">{type.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category