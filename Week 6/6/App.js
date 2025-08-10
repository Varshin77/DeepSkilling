import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import TrainersList from "./TrainersList";
import TrainerDetails from "./TrainerDetails";
import trainers from "./TrainersMock";

function App() {
    return (
        <Router>
            <div style={{ padding: "20px", maxWidth: "600px", margin: "20px auto" }}>
                {/* Dynamic Content */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/trainers" element={<><Home /><TrainersList trainers={trainers} /></>} />
                    <Route path="/trainer/:id" element={<><Home /><TrainerDetails /></>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
