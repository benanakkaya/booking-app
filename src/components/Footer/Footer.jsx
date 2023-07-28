import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";

const Footer = () => {

    const lists = [
        {
            id:1,
            title:"Company",
            listItems: [
                {
                    id:1,
                    name: "About",
                    path: "/"
                },
                {
                    id:2,
                    name: "Jobs",
                    path: "/"
                },
                {
                    id:3,
                    name: "Newsroom",
                    path: "/"
                },
                {
                    id:4,
                    name: "Advertising",
                    path: "/"
                },
                {
                    id:5,
                    name: "Contact us",
                    path: "/"
                },
            ]
        },
        {
            id:2,
            title:"Explore",
            listItems: [
                {
                    id:1,
                    name: "Australia",
                    path: "/"
                },
                {
                    id:2,
                    name: "New Zealand",
                    path: "/"
                },
                {
                    id:3,
                    name: "United States America (USA)",
                    path: "/"
                },
                {
                    id:4,
                    name: "Greece",
                    path: "/"
                },
                {
                    id:5,
                    name: "Maldives",
                    path: "/"
                },
                {
                    id:6,
                    name: "Singapore",
                    path: "/"
                },
                {
                    id:7,
                    name: "See more",
                    path: "/"
                },
            ]
        },
        {
            id:3,
            title:"Terms and Policies",
            listItems: [
                {
                    id:1,
                    name: "Privacy Policy",
                    path: "/"
                },
                {
                    id:2,
                    name: "Terms of use",
                    path: "/"
                },
                {
                    id:3,
                    name: "Acessibility",
                    path: "/"
                },
                {
                    id:4,
                    name: "Reward system policy",
                    path: "/"
                }
            ]
        },
        {
            id:4,
            title:"Help",
            listItems: [
                {
                    id:1,
                    name: "Support",
                    path: "/"
                },
                {
                    id:2,
                    name: "Cancel your bookings",
                    path: "/"
                },
                {
                    id:3,
                    name: "Use Coupon",
                    path: "/"
                },
                {
                    id:4,
                    name: "Refund Policies",
                    path: "/"
                },
                {
                    id:5,
                    name: "International Travel Documents",
                    path: "/"
                },
            ]
        },
    ]

  return (
    <footer className="container py-[20px] grid grid-cols-4 xl:grid-cols-5 gap-[40px] border-t-[1px]  ">
      <div className="col-span-4 xl:col-span-1 flex flex-col gap-[7.5px] text-center ">
        <a href="/" className="text-2xl flex items-center justify-center gap-[10px] w-full">
          <FaPlaneDeparture className="text-primary font-bold" />
          Booking App
        </a>
        <small className="text-sm ">
          Your next goto companion for travel
        </small>
      </div>
      {lists.map(list =>(
      <div key={list.id} className="col-span-4 md:col-span-2 xl:col-span-1 flex flex-col gap-[20px]">
        <p className="font-medium text-center xl:text-start">{list.title}</p>
        <ul className="flex flex-col gap-[10px]">
        {list.listItems.map(item => (
            <li className=" text-center xl:text-start" key={item.id}>
                <a className="text-sm leading-[0.28px] text-grey-900 hover:text-primary" href={item.path}>
                {item.name}
                </a>
            </li>
        ))}
        </ul>
      </div>
      ))}
    </footer>
  );
};

export default Footer;
