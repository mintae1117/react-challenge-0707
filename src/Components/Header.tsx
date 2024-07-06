import { Outlet } from "react-router-dom";

export default function Header(){
    return(
        <div>
            <h2>header!!!</h2>
            <Outlet />
        </div>
    );
}