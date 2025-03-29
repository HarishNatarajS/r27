import Header from "../components/Header";
import DetailBody from "../components/DetailBody";
import '../App.css';
export default function Detail() {
    return (
        <>
            <Header />
            <section class="breadcrumb">
              <ul class="breadcrumb__list container flex container">
                <li><a href="index" class="breadcrumb__link ">Home</a></li>
                <li><span class="braedcrumb__link">&gt;</span></li>
                <li><a href="shop" class="breadcrumb__link ">Shop</a></li>
                <li><span class="braedcrumb__link">&gt;</span></li>
                <li><span class="braedcrumb__link">Shirt</span></li>
              </ul>
            </section>
            <DetailBody />
        </>
    )
}