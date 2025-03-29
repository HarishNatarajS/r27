import Header from "../components/Header";
import CompareProducts from "../components/CompareProducts";
import Newsletter from "../components/Newsletter";
import '../App.css';
export default function Compare() {
    return (
        <>
            <Header currentTab={'compare'}/>
            <section class="breadcrumb">
              <ul class="breadcrumb__list container flex container">
                <li><a href="index" class="breadcrumb__link ">Home</a></li>
                <li><span class="braedcrumb__link">&gt;</span></li>
                <li><span class="braedcrumb__link">Compare</span></li>
              </ul>
            </section>
            <CompareProducts />
            <Newsletter />
        </>
    )
}