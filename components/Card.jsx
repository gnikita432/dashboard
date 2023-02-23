import React from "react";
import {
  MdDashboard,
  MdOutlineReceipt,
  MdSwapHorizontalCircle,
  MdContacts,
  MdAccountBalanceWallet,
  MdOutlineArrowUpward,
  MdOutlineArrowDownward,
} from "react-icons/md";

const Card = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 p-4">
      <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-gray-600">Fiat Balance</p>
          <p className="text-2xl font-bold">$00,000</p>
        </div>
        <p className="bg-Primary text-white flex justify-center items-center p-2 rounded-lg">
          <MdAccountBalanceWallet size={20} />
        </p>
      </div>
      <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-gray-600">Fiat Balance</p>
          <p className="text-2xl font-bold">$00,000</p>
        </div>
        <p className="bg-Primary text-white flex justify-center items-center p-2 rounded-lg">
          <MdAccountBalanceWallet size={20} />
        </p>
      </div>
      <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-gray-600">Fiat Balance</p>
          <p className="text-2xl font-bold">$00,000</p>
        </div>
        <div className="bg-Primary text-white p-3 rounded-lg inline-block">
          <MdOutlineArrowDownward size={20} />
        </div>
      </div>
      <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-gray-600">Fiat Balance</p>
          <p className="text-2xl font-bold">$00,000</p>
        </div>
        <p className="bg-Primary text-white flex justify-center items-center p-2 rounded-lg">
          <MdOutlineArrowUpward size={20} />
        </p>
      </div>
    </div>
  );
};

export default Card;
