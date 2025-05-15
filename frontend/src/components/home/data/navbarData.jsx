import { CiShop } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";

export const navbar_data = [
  {
    id: 1,
    title: "Home",
    icon: <GoHome size={25} />,
    link: "/home",
  },
  {
    id: 2,
    title: "Friends",
    icon: <IoPeopleSharp size={25} />,
    link: "/friends",
  },
  {
    id: 3,
    title: "Videos",
    icon: <MdOutlineOndemandVideo size={25} />,
    link: "/videos",
  },
  {
    id: 4,
    title: "Marketplace",
    icon: <CiShop size={25} />,
    link: "/marketplace",
  },
];
