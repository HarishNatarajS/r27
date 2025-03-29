import Header from "../components/Header";
import Mainshop from "../components/Mainshop";
import Newsletter from "../components/Newsletter";
import '../App.css';

export default function Shop() {
    return (
        <>
            <Header currentTab={'shop'}/>
            <Mainshop />
            <Newsletter />
        </>
    )
}