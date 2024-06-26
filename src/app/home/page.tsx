import { Bookings } from "@/components/PageComponents/HomeComponents/Bookings";
import { Chart } from "@/components/PageComponents/HomeComponents/Chart";
import { ListOfCars } from "@/components/PageComponents/HomeComponents/ListOfCars";
import React from "react";

const HomePage = () => {
  return (
    <div className="sm:m-6 m-2 grid gap-4">
      <Chart />
      <Bookings />
      <ListOfCars />
    </div>
  );
};

export default HomePage;
