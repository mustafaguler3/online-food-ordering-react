import Header from "../../components/Header";
import "../../App.css"
import { Navbar } from "../../components/Navbar";
import Main from "./Main";

export function Home(){
    return (
        <div>
            <Header />
            <Main/>
        </div>
    );
}
