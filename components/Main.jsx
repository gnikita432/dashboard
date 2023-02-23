import React from "react";
import Card from "./Card";
import Calendar from "./Calendar";
import Graph from "./Graph"

const Main = () => {
  return (
    <div>
      <div
        className="flex items-center bg-blue-100 text-blue-900 text-sm font-bold px-4 py-3"
        role="alert"
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm2.5 15a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM11 5h-1v5h1V5z" />
        </svg>
        <div>
          Please complete the KYC.
          <br />
          Please follow the instructions in the email to complete account
          verification. Make sure to check your promotions/spam as well.
        </div>
      </div>

      <div class="flex flex-col sm:flex-row">
        <div class="w-full sm:w-8/12 lg:w-8/12">
          <Card />
          <Graph/>
        </div>
        <div class="w-full sm:w-4/12 lg:w-4/12">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Main;
