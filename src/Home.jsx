import Category from "./components/Category.jsx"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import InfoSection from "./components/InfoSection.jsx"
import MostSearchedCar from "./components/MostSearchedCar.jsx"

export default function Home(){
    return <div>
        {/*header*/}
        <Header/>
        <Hero/>
        <Category/>
        <MostSearchedCar/>
        <InfoSection/>
        <Footer/>

    </div>
}