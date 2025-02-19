import React, { useState, useEffect } from "react";
import MapComponent from "@/components/map-component";
import { useSearchParams } from "react-router-dom";
import RoutesDrawer from "@/components/main-drawers/routes-drawer";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentRoute = searchParams.get("r");
  const [routesDrawerOpen, setRoutesDrawerOpen] = useState(false);
  const [stationsDrawerOpen, setStationsDrawerOpen] = useState(false);
  const [incidentsDrawerOpen, setIncidentsDrawerOpen] = useState(false);
  const [maintenanceDrawerOpen, setMaintenanceDrawerOpen] = useState(false);

  useEffect(() => {
    const setDrawers = () => {
      if (currentRoute === "routes") {
        setRoutesDrawerOpen(true);
      } else {
        setRoutesDrawerOpen(false);
      }
    };
    setDrawers();
  }, [currentRoute]);

  return (
    <div>
      <RoutesDrawer
        routesDrawerOpen={routesDrawerOpen}
        setRoutesDrawerOpen={setRoutesDrawerOpen}
        setSearchParams={setSearchParams}
      />
      <MapComponent />
    </div>
  );
};

export default HomePage;
