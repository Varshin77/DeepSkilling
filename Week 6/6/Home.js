import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>My Academy Trainers App</h1>

            <nav style={{ marginBottom: "20px" }}>
                <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
                <Link to="/trainers">Show Trainers</Link>
            </nav>
        </div>
    );
}

export default Home;
