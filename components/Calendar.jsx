// import { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// const logs = [
//   { date: "2022-02-25", message: "Log 1" },
//   { date: "2022-02-25", message: "Log 2" },
//   { date: "2022-02-25", message: "Log 3" },
//   { date: "2022-02-26", message: "Log 4" },
//   { date: "2022-02-26", message: "Log 5" },
// ];

// const CalendarComponent = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const filteredLogs = logs.filter(
//     (log) => log.date === selectedDate.toISOString().slice(0, 10)
//   );

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <div className="flex justify-center mt-10">
//       <div className="text-center">
//         <Calendar
//           onChange={handleDateChange}
//           value={selectedDate}
//           prev2Label={null}
//           next2Label={null}
//           prevLabel={<i className="fas fa-arrow-left"></i>}
//           nextLabel={<i className="fas fa-arrow-right"></i>}
//           tileClassName="border border-gray-200 p-1 rounded"
//           calendarClassName="bg-white p-5 rounded shadow border-0"
//         />
//         {filteredLogs.length > 0 ? (
//           filteredLogs.map((log) => (
//             <div key={log.message} className="my-4">
//               {log.message}
//             </div>
//           ))
//         ) : (
//           <div className="my-4">No logs for selected date</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CalendarComponent;

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const logs = [
  { date: "2022-02-25", message: "Log 1" },
  { date: "2022-02-25", message: "Log 2" },
  { date: "2022-02-25", message: "Log 3" },
  { date: "2022-02-26", message: "Log 4" },
  { date: "2022-02-26", message: "Log 5" },
];

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const filteredLogs = logs.filter(
    (log) => log.date === selectedDate.toISOString().slice(0, 10)
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <div className="flex justify-center mt-10 my-class">
      <div className="text-center">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="border-none"
        //   style={{ border: "none" }}
          style={{ borderWidth: "20px !important"}}
        />
        {filteredLogs.length > 0 ? (
          filteredLogs.map((log) => (
            <div key={log.message} className="my-4">
              {log.message}
            </div>
          ))
        ) : (
          <div className="my-4">No logs for selected date</div>
        )}
      </div>
    </div>
  );
};

export default CalendarComponent;

// import { useState } from "react";
// import Calendar from "react-calendar";

// const logs = [
//   { date: "2022-02-25", message: "Log 1" },
//   { date: "2022-02-25", message: "Log 2" },
//   { date: "2022-02-25", message: "Log 3" },
//   { date: "2022-02-26", message: "Log 4" },
//   { date: "2022-02-26", message: "Log 5" },
// ];

// const CalendarComponent = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const filteredLogs = logs.filter(
//     (log) => log.date === selectedDate.toISOString().slice(0, 10)
//   );

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <div className="flex justify-center mt-10">
//       <div className="text-center">
//         <Calendar onChange={handleDateChange} value={selectedDate} />
//         {filteredLogs.length > 0 ? (
//           filteredLogs.map((log) => (
//             <div key={log.message} className="my-4">
//               {log.message}
//             </div>
//           ))
//         ) : (
//           <div className="my-4">No logs for selected date</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CalendarComponent;

// import { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// const logs = [
//   { date: "2022-02-25", message: "Log 1" },
//   { date: "2022-02-25", message: "Log 2" },
//   { date: "2022-02-25", message: "Log 3" },
//   { date: "2022-02-26", message: "Log 4" },
//   { date: "2022-02-26", message: "Log 5" },
// ];

// const CalendarComponent = ({ theme, weekdays }) => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const filteredLogs = logs.filter(
//     (log) => log.date === selectedDate.toISOString().slice(0, 10)
//   );

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const weekdayShortNames = weekdays || [
//     "Su",
//     "Mo",
//     "Tu",
//     "We",
//     "Th",
//     "Fr",
//     "Sa",
//   ];

//   const calendarTheme = theme || {
//     calendar: "react-calendar",
//     navigation: "flex justify-between items-center mb-2",
//     monthHeader: "text-lg font-bold mb-2",
//     weekdays: "grid grid-cols-7 gap-2 mb-2",
//     weekday: "text-sm font-medium text-gray-500",
//     days: "grid grid-cols-7 gap-2",
//     day: "p-2 text-sm rounded-full text-center cursor-pointer",
//     activeDay: "bg-gray-200",
//   };

//   return (
//     <div className={`mx-auto ${calendarTheme.calendar}`}>
//       <div className={`${calendarTheme.navigation}`}>
//         <button
//           onClick={() =>
//             handleDateChange(
//               new Date(
//                 selectedDate.getFullYear(),
//                 selectedDate.getMonth() - 1,
//                 1
//               )
//             )
//           }
//         >
//           {"<"}
//         </button>
//         <h3 className={`${calendarTheme.monthHeader}`}>
//           {selectedDate.toLocaleString("default", {
//             month: "long",
//             year: "numeric",
//           })}
//         </h3>
//         <button
//           onClick={() =>
//             handleDateChange(
//               new Date(
//                 selectedDate.getFullYear(),
//                 selectedDate.getMonth() + 1,
//                 1
//               )
//             )
//           }
//         >
//           {">"}
//         </button>
//       </div>
//       <div className={`${calendarTheme.weekdays}`}>
//         {weekdayShortNames.map((weekday) => (
//           <div className={`${calendarTheme.weekday}`} key={weekday}>
//             {weekday}
//           </div>
//         ))}
//       </div>
//       <div className={`${calendarTheme.days}`}>
//         {Array.from({ length: 42 }, (_, i) => {
//           const date = new Date(
//             selectedDate.getFullYear(),
//             selectedDate.getMonth(),
//             i - selectedDate.getDay() + 1
//           );
//           const isCurrentMonth = date.getMonth() === selectedDate.getMonth();
//           const isActive =
//             date.toISOString().slice(0, 10) ===
//             selectedDate.toISOString().slice(0, 10);
//           return (
//             <div
//               className={`${calendarTheme.day} ${
//                 !isCurrentMonth ? "text-gray-400" : ""
//               } ${isActive ? calendarTheme.activeDay : ""}`}
//               key={i}
//               onClick={() => handleDateChange(date)}
//             >
//               {isCurrentMonth ? date.getDate() : ""}
//             </div>
//           );
//         })}
//       </div>
//       {filteredLogs.length > 0 ? (
//         filteredLogs.map((log) => (
//           <div key={log.message} className="my-4">
//             {log.message}
//           </div>
//         ))
//       ) : (
//         <div className="my-4">No logs for selected date</div>
//       )}
//     </div>
//   );
// };

// export default CalendarComponent;
