// import MainLayout from "./Component/layouts/MainLayout"
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import AutoLayouts from "./Component/layouts/AutoLayouts"
//  import LandingPage from "./Pages/Landing/LandingPage"
// import DriversList from "./Pages/Agents/Drivers/DriversList"
// import AboutSection from "./Pages/Landing/AboutSection"
//  "./Pages/Landing/AboutSection"
// function App() {
 
//   return (
//     <Routes>
//       <Route element={<MainLayout />}>
//       <Route path="/" element={<LandingPage />} />
//        <Route path="/Car" element={<DriversList />} /> 
//        <Route path="/about" element={<AboutSection />} />
//       {/* <Route path="/drivers/:id" element={<DriversDetails />} />
//       <Route path="/schedule-ride" element={<ScheduleRide />} /> 
// {/*  */}
//       {/* <Route path="/real-estate" element={<AgentsList />} /> */}
     
//       </Route>
//     </Routes>
//   )
// }

// export default App


import MainLayout from "./Component/layouts/MainLayout"
import SimpleLayout from "./Component/layouts/SimpleLayouts"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import LandingPage from "./Pages/Landing/LandingPage"
import DriversList from "./Pages/Agents/Drivers/DriversList"
import AboutSection from "./Pages/Landing/AboutSection"
import Ourservices from "./Pages/Landing/Ourservices"
import BookingSection from "./Pages/Landing/BookingSection"


function App() {
  return (
    
      <Routes>

        {/* Main layout (full design) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/car" element={<DriversList />} />
          <Route path="/services" element={<Ourservices />} />
          <Route path="/booking" element={<BookingSection />} />
        </Route>

        {/* Simple layout (Navbar + Footer only) */}
        <Route element={<SimpleLayout />}>
          <Route path="/about" element={<AboutSection />} />
          
        </Route>
      </Routes>

  );
}

export default App;
