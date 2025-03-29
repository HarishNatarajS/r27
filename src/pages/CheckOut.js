import Header from "../components/Header";
import CheckoutBody from "../components/CheckOutBody";
import '../App.css';
export default function CheckOut() {
    return (
        <>
            <Header />
            <section class="breadcrumb">
              <ul class="breadcrumb__list container flex container">
                <li><a href="index" class="breadcrumb__link ">Home</a></li>
                <li><span class="braedcrumb__link">&gt;</span></li>
                <li><span class="braedcrumb__link">Checkout</span></li>
              </ul>
            </section>
            <CheckoutBody />
        </>
    )
}