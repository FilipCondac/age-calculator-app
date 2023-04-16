import { useState } from "react";

const App = () => {
  // Types
  type DateOfBirth = {
    year: number;
    month: number;
    day: number;
  };

  type Age = {
    years: number;
    months: number;
    days: number;
  };

  const calculateAge = (dateOfBirth: DateOfBirth): Age => {
    // Get the current date
    const currentDate: Date = new Date();
    const currentYear: number = currentDate.getFullYear();
    const currentMonth: number = currentDate.getMonth() + 1;
    const currentDay: number = currentDate.getDate();

    // Calculate the age
    let years: number = currentYear - dateOfBirth.year;
    let months: number = currentMonth - dateOfBirth.month;
    let days: number = currentDay - dateOfBirth.day;

    // If the current day is less than the day of birth, subtract 1 from the month
    if (days < 0) {
      months -= 1;
      const daysInPrevMonth: number = new Date(
        currentYear,
        currentMonth - 1,
        0
      ).getDate();
      days += daysInPrevMonth;
    }

    // If the current month is less than the month of birth, subtract 1 from the year
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    // Set the age in the state

    return {
      years: years,
      months: months,
      days: days,
    };
  };

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  //States
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [dayFieldError, setDayFieldError] = useState("");
  const [monthFieldError, setMonthFieldError] = useState("");
  const [yearFieldError, setYearFieldError] = useState("");
  const [userAge, setUserAge] = useState<Age>({
    years: 0.1,
    months: 0.1,
    days: 0.1,
  });

  // Handles the input change
  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDay(e.target.value);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  const validateInput = () => {
    let isValid = true;

    if (day === "") {
      setDayFieldError("This field is required");
      isValid = false;
    } else if (Number(day) > daysInMonth(Number(month), Number(year))) {
      setDayFieldError("Must be a valid day");
      isValid = false;
    } else {
      setDayFieldError("");
    }

    // Perform other validation checks for month
    if (month === "") {
      setMonthFieldError("This field is required");
      isValid = false;
    } else if (Number(month) > 12 || Number(month) < 1) {
      setMonthFieldError("Must be a valid month");
      isValid = false;
    } else {
      setMonthFieldError("");
    }

    // Perform other validation checks for year
    const currentYear = new Date().getFullYear();
    if (year === "") {
      setYearFieldError("This field is required");
      isValid = false;
    } else if (Number(year) > currentYear) {
      setYearFieldError("Must be in the past");
      isValid = false;
    } else {
      setYearFieldError("");
    }

    return isValid;
  };

  // Takes the input values and passes them to the calculateAge function
  const handleSubmit = () => {
    // Validate the input fields before calculating the age
    if (validateInput()) {
      const age = calculateAge({
        year: parseInt(year),
        month: parseInt(month),
        day: parseInt(day),
      });

      setUserAge(age);
    }
  };

  return (
    <main className="flex flex-col h-screen justify-center bg-offWhite font-poppins">
      <div className="m-auto bg-white mobile:p-3 p-14 rounded-xl mobile:rounded-br-mobile rounded-br-4xl w-5/12 mobile:w-11/12 ">
        {/* Input fields */}
        <div className="flex mobile:flex-col border-b pb-8">
          <div className="flex uppercase">
            <div className="flex-col flex">
              <label className="text-smokeGrey mb-2 tracking-widest text-sm mobile:text-xs ">
                Day
              </label>
              <input
                placeholder="DD"
                className="border p-4 w-3/4 rounded-md text-2xl mobile:text-base"
                value={day}
                onChange={handleDayChange}
              ></input>
              {dayFieldError && (
                <p className="text-red-500 text-sm mt-1">{dayFieldError}</p>
              )}
            </div>
            <div className="flex-col flex">
              <label className="text-smokeGrey mb-2 tracking-widest text-sm mobile:text-xs">
                Month
              </label>
              <input
                placeholder="MM"
                className="border p-4 w-3/4 rounded-md text-2xl mobile:text-base"
                value={month}
                onChange={handleMonthChange}
              ></input>
              {monthFieldError && (
                <p className="text-red-500 text-sm mt-1">{monthFieldError}</p>
              )}
            </div>
            <div className="flex-col flex">
              <label className="text-smokeGrey mb-2 tracking-widest text-sm mobile:text-xs">
                Year
              </label>
              <input
                placeholder="YYYY"
                className="border p-4 w-3/4 rounded-md text-2xl mobile:text-base"
                value={year}
                onChange={handleYearChange}
              ></input>
              {yearFieldError && (
                <p className="text-red-500 text-sm mt-1">{yearFieldError}</p>
              )}
            </div>
          </div>
          <div className="-mb-10">
            <img
              src="./icon-arrow.svg"
              className="bg-purple rounded-full w-36 mt-28 -mb-7 p-5 m-5 mobile:w-16 mobile:m-auto mobile:-mb-5 mobile:mt-5 mobile:p-2"
              onClick={handleSubmit}
              alt="arrow enter button"
              style={{ cursor: "pointer" }}
            ></img>
          </div>
        </div>
        <div className="flex flex-col mt-10 text-7xl italic font-extrabold mobile:text-5xl">
          <div>
            <span className="text-purple">
              {userAge.years === 0.1 ? "--" : userAge.years}
            </span>
            <span> years</span>
          </div>
          <div>
            <span className="text-purple">
              {userAge.months === 0.1 ? "--" : userAge.months}
            </span>
            <span> months</span>
          </div>
          <div>
            <span className="text-purple">
              {userAge.days === 0.1 ? "--" : userAge.days}
            </span>
            <span> days</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
