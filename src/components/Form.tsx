/* eslint-disable import/extensions */

"use client";

import React, { useState } from "react";
import { syne, montserrat, playfair } from "@/app/fonts";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  marketing_consent: boolean;
  date: string;
  bookingTime: string;
  endTime: string;
  numberOfGuests: number;
  preferOutdoors: boolean;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    marketing_consent: false,
    date: "",
    bookingTime: "13:00",
    endTime: "23:59",
    numberOfGuests: 1,
    preferOutdoors: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    const fieldValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const postForm = async (inputData: FormData) => {
    try {
      const res: Response = await fetch("/api/SubmitReservation", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(inputData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here using formData state
    console.log(formData);

    await postForm(formData);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-green-200 dark:bg-neutral-600 ">
        <div
          className={`${syne.className} text-black dark:text-amber-100 font-extrabold text-4xl w-[80vw] sm:w-[60vw] pb-10`}
        >
          Hello,
          <div
            className={`${playfair.className} text-black dark:text-amber-100 font-extralight text-2xl `}
          >
            Please fill the form below to make a new booking at
          </div>
          <div
            className={`${syne.className} text-black dark:text-amber-100 font-extrabold text-lg  tracking-wider`}
          >
            Gensyn Bar
          </div>
        </div>
        <form
          className="flex flex-col w-[80vw] sm:w-[60vw]"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <label
                className={`${montserrat.className} text-black dark:text-amber-100 font-light text-xs`}
                htmlFor="firstName"
              >
                First Name:
              </label>
              <input
                className={`${montserrat.className} bg-stone-50 dark:bg-zinc-800 font-light text-s p-0.5`}
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label
                className={`${montserrat.className} text-black dark:text-amber-100 font-light text-xs`}
                htmlFor="lastName"
              >
                Last Name:
              </label>
              <input
                className={`${montserrat.className} bg-stone-50 dark:bg-zinc-800 font-light text-s p-0.5`}
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col pt-3">
            <label
              className={`${montserrat.className} text-black dark:text-amber-100 font-light text-xs`}
              htmlFor="email"
            >
              Email Address:
            </label>
            <input
              className={`${montserrat.className} bg-stone-50 dark:bg-zinc-800 font-light text-s p-0.5`}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col pt-3">
            <label
              className={`${montserrat.className} text-black dark:text-amber-100 font-light text-xs`}
              htmlFor="phoneNumber"
            >
              Phone Number:
            </label>
            <input
              className={`${montserrat.className}  bg-stone-50 dark:bg-zinc-800 font-light text-s p-0.5`}
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-2 pt-3">
            <div className="flex flex-col">
              <label
                className={`${montserrat.className} text-black dark:text-amber-100 font-light text-xs`}
                htmlFor="date"
              >
                Date:
              </label>
              <input
                className={`${montserrat.className} bg-stone-50 dark:bg-zinc-800 font-light text-s p-0.5 max-w-full	 appearance-none`}
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                className={`${montserrat.className} text-black dark:text-amber-100 font-light text-xs `}
                htmlFor="bookingTime"
              >
                Booking Time:
              </label>
              <input
                className={`${montserrat.className}  bg-stone-50 dark:bg-zinc-800 font-light text-s p-0.5 max-w-full appearance-none`}
                type="time"
                id="bookingTime"
                name="bookingTime"
                value={formData.bookingTime}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-3 pb-6">
            <div className="flex flex-col ">
              <label
                className={`${montserrat.className} text-black dark:text-amber-100 font-light text-xs`}
                htmlFor="numberOfGuests"
              >
                Number of Guests:
              </label>
              <input
                className={`${montserrat.className}  bg-stone-50 dark:bg-zinc-800 font-light text-s p-0.5`}
                type="number"
                id="numberOfGuests"
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                className={`${montserrat.className} text-black dark:text-amber-100 font-light text-xs `}
                htmlFor="preferOutdoors"
              >
                Prefer Outdoors:
              </label>
              <label
                htmlFor="preferOutdoors"
                className=" mt-0.5 relative inline-flex items-center cursor-pointer"
              >
                <input
                  className="sr-only peer"
                  type="checkbox"
                  id="preferOutdoors"
                  name="preferOutdoors"
                  checked={formData.preferOutdoors}
                  onChange={handleChange}
                />
                <div className="w-11 h-6 bg-gray-200  rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-zinc-800 peer-checked:after:bg-green-200 dark:peer-checked:after:bg-zinc-800 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-stone-50 dark:peer-checked:bg-amber-100"></div>
              </label>
            </div>
          </div>

          <button
            className={`${montserrat.className} font-light text-xs text-stone-50 dark:text-neutral-600 bg-neutral-600 dark:bg-amber-100 p-2 `}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
