import { carList } from "../constant/FakeData.jsx"
import CarListItem from "./CarListItem.jsx"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


function MostSearchedCar() {
  return (
    <div className="mx-24">
        <h2 className="font-bold text-3xl text-center mb-7 mt-16">Most Searched Cars</h2> 
        <Carousel>
                <CarouselContent>
                    
                        {carList.map((car, index)=>(
                        <CarouselItem className = "basis-1/4">
                            <CarListItem  car = {car}  key = {index}/>
                        </CarouselItem>
                        ))}
                    
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        
    </div>
  )
}

export default MostSearchedCar