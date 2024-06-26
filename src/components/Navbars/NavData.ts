import { BiHome } from "react-icons/bi";
import { PiCarProfileBold } from "react-icons/pi";
import { TbBrandBooking } from "react-icons/tb";

export interface InavData {
  id: number;
  title: string;
  path: string;
  icons: string;
}

export const NavData = [
  {
    id: 1,
    title: "Home",
    icons: "assets/icons/application.png",
    path: "/",
  },
  {
    id: 2,
    title: "Listings",
    icons: "assets/icons/carbon_taxi.svg",
    path: "/listing",
  },
  {
    id: 3,
    title: "Booked/Reserved",
    path: "/booked",

    icons: "assets/icons/carbon_taxi.svg",
  },
  {
    id: 4,
    title: "List Car",
    path: "/list-car",
    icons: "assets/icons/add.svg",
  },
  {
    id: 5,
    title: "Incident Report",
    icons: "assets/icons/carbon_report.svg",
    path: "/incident-report",
  },
];
