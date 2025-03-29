import Header from "../components/Header";
import WishListBody from "../components/WishListBody";
import Newsletter from "../components/Newsletter";
import '../App.css';
export default function WishList() {
    return (
        <>
            <Header />
            <section class="breadcrumb">
              <ul class="breadcrumb__list container flex container">
                <li><a href="index" class="breadcrumb__link ">Home</a></li>
                <li><span class="braedcrumb__link">&gt;</span></li>
                <li><span class="braedcrumb__link">Wishlist</span></li>
              </ul>
            </section>
            <WishListBody />
            <Newsletter />
        </>
    )
}