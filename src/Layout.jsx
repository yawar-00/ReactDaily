import { Link, Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <Link to="home">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
            <hr color="red" />
            <Outlet/>
            <hr color="red" />
            <h1>all right reserve</h1>
        </>
    )
}
export default Layout;