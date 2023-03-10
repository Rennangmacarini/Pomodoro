
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./Layouts/DefaultLayouts";
import { History } from "./Pages/History";
import { Home } from "./Pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/History" element={<History />} />
            </Route>
        </Routes>
    );
}
