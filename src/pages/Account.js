import Header from "../components/Header";
import Accountbody from "../components/Accountbody";
import '../App.css';
export default function Account() {
    return (
        <>
            <Header currentTab={'account'}/>
            <Accountbody />
        </>
    )
}