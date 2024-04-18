import Home from "~/pages/Home";
import Entertainment from "~/pages/Entertainment";
import Cuisine from "~/pages/Cuisine";
import CulturalHistory from "~/pages/CulturalHistory";
import TouristInformation from "~/pages/TouristInformation";

const publicRoutes = [
    { path: "/", component: Home},
    { path: "/entertainment", component: Entertainment},
    { path: "/cuisine", component: Cuisine},
    { path: "/culturalHistory", component: CulturalHistory},
    { path: "/touristInformation", component: TouristInformation},

];
const privateRoutes = [];

export { privateRoutes, publicRoutes };
