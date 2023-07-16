import { Link } from "react-router-dom";
import {useEffect, useState} from "react";

const Navbar = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const timerID = setInterval(
            () => tick(),
            1000
        );

        return () => {
            clearInterval(timerID);
        }

    }, []);

    function tick() {
        setDate(new Date());
    }

    return (
        <nav>
            <section>
                <h1 className="text-center">وبلاگ کوچک من</h1>
                <div style={{fontSize: "20px"}} className="text-center">
               <span>
                   {date.toLocaleTimeString()}
               </span>
                    {"  "}
                    {date.getFullYear()}
                    {" /  "}
                    {date.getDate()}
                    {" /  "}
                    {date.getMonth()}
                </div>
                <div className="navContent">
                    <div className="navLinks" style={{paddingBottom: "10px"}}>
                        <Link to={"/"}>وبلاگ</Link>
                        <Link to={"/users"}>نویسندگان</Link>
                    </div>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;