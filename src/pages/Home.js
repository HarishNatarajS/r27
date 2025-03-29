import Header from "../components/Header";
import Slider from "../components/Slider";
import Products from "../components/Products";
import ShowCase from "../components/ShowCase";
import Newsletter from "../components/Newsletter";
import '../App.css';
export default function Home() {
    return (
        <>
            <Header currentTab={'home'}/>
            <Slider />
            <Products />
            <ShowCase />
            <Newsletter />
        </>
    )
}