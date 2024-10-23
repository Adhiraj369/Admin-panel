import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./routes/Login/login.component";
import Navigation from "./routes/Navigation/Navigation.component";
import Dashboard from "./routes/DashBoard/dashboard.component";
import Reports from "./routes/Report/report.component";
import Alerts from "./routes/Alerts/Alerts.components";
import Livetracking from "./routes/Garbage/LiveTracking";
import LiveReports from "./routes/LiveReports/LiveReports";
import Schemes from "./routes/governmentschemes/schemes";
import Services from "./routes/governmentservices/services";
import WaterLeakage from "./routes/WaterLeakage/WaterLeakage";
import Animal from "./routes/deadanimal/Animal";
import { AuthProvider, AuthContext } from "./contexts/AuthContext";
import { LoadScript } from "@react-google-maps/api";
import RoleGuard from "./routes/Login/RoleGuard";
import UnAuth from "./routes/unAuthorised/UnAuth";
import Addschemes from "./routes/AddSchemes/Addschemes";
import Attendance from "./routes/Staff/Attendance";
import AllVehicle from "./routes/Staff/AllVehicle";
import Maintenance from "./routes/Staff/Maintenance";
import StaffReport from "./routes/Staff/StaffReport";
import TotalGarbage from "./routes/Staff/TotalGarbage";

const GOOGLE_MAPS_API_KEY = "AIzaSyAU4SEzLK-hc2pBfE_xggoyAigxopPQ7mw";

function App() {
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogin = (status) => {
    setIsAuthenticated(status); // Update authentication status
  };

  return (
    <AuthProvider>
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/admin/*"
            element={
              <AuthGuard>
                <Navigation />
              </AuthGuard>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="reports" element={<Reports />} />
            <Route path="alerts" element={<Alerts />} />

            <Route
              path="dashboard/garbage"
              element={
                <RoleGuard allowedRoles={["garbage"]}>
                  <Livetracking />
                </RoleGuard>
              }
            />

            <Route
              path="dashboard/garbage/household"
              element={
                <RoleGuard allowedRoles={["garbage"]}>
                  <Livetracking />
                </RoleGuard>
              }
            />

            <Route
              path="dashboard/garbage/allReports"
              element={
                <RoleGuard allowedRoles={["garbage"]}>
                  <LiveReports />
                </RoleGuard>
              }
            />

            <Route
              path="dashboard/water"
              element={

                  <WaterLeakage />
              
              }
            />

            <Route
              path="dashboard/deadanimal"
              element={
                
                  <Animal />
               
              }
            />

            <Route path="dashboard/govscheme" element={<Schemes />} />
            <Route path="dashboard/govservice" element={<Services />} />

            <Route
              path="dashboard/govscheme/addscheme"
              element={<Addschemes />}
            />

            <Route path="staffreport" element={<StaffReport />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="allvehicle" element={<AllVehicle />} />
            <Route path="maintenance" element={<Maintenance />} />
            <Route path="totalgarbage" element={<TotalGarbage />} />
          </Route>

          <Route path="/unauthorized" element={<UnAuth />} />
        </Routes>
      </LoadScript>
    </AuthProvider>
  );
}

function AuthGuard({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to="/" />;
}

export default App;
