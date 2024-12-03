import Header from "./Header";
import "../../App.css"
import { Navbar } from "./Navbar";
import Main from "./Main";

export function Home(){
    return (
        <div>
            <Header />
            <Main/>
        </div>
    );
}
