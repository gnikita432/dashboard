import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MdDashboard,
  MdOutlineReceipt,
  MdSwapHorizontalCircle,
  MdContacts,
} from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa";
import { ImMoveUp } from "react-icons/im";

import Logo from "../assets/Logo.png";

const Sidebar = ({ children }) => {
  return (
    <div className="md:w-3/12 w-6/12 h-screen ">
      <div className=" border-b py-3 mt-1 flex justify-around ">
        <Link href="/">
          <div className=" p-3 ">
            <Image src={Logo}></Image>
          </div>
        </Link>
      </div>
      <div className="p-4 space-y-14">
        <div className="space-y-4">
          <div className="">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <Link href="/">
                <div className="bg-Primary text-white p-3 rounded-lg inline-block">
                  <MdDashboard size={20} />
                </div>
              </Link>
              <p className=" ">Dashbord</p>
            </div>
          </div>
          <div className="">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <Link href="/">
                <div className="bg-Primary text-white p-3 rounded-lg inline-block">
                  <MdOutlineReceipt size={20} />
                </div>
              </Link>
              <p className="text-gray-600  ">Transaction</p>
            </div>
          </div>
          <div className="">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <Link href="/">
                <div className="bg-Primary text-white p-3 rounded-lg inline-block">
                  <FaFileInvoice size={20} />
                </div>
              </Link>
              <p className="text-gray-600  ">Send</p>
            </div>
          </div>
          <div className="">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <Link href="/">
                <div className="bg-Primary text-white p-3 rounded-lg inline-block">
                  <MdSwapHorizontalCircle size={20} />
                </div>
              </Link>
              <p className="text-gray-600  ">Receive</p>
            </div>
          </div>
          <div className="">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <Link href="/">
                <div className="bg-Primary text-white p-3 rounded-lg inline-block">
                  <ImMoveUp size={20} />
                </div>
              </Link>
              <p className="text-gray-600  ">Buy</p>
            </div>
          </div>
          <div className="">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <Link href="/">
                <div className="bg-Primary text-white p-3 rounded-lg inline-block">
                  <MdContacts size={20} />
                </div>
              </Link>
              <p className="text-gray-600  ">Buy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
