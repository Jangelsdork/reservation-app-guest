"use client";
import { useState } from "react";
import React from "react";
type Props = {};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  date: string;
  bookingTime: string;
  numberOfGuests: number;
  preferOutdoors: boolean;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    date: "",
    bookingTime: "",
    numberOfGuests: 1,
    preferOutdoors: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here using formData state
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh]">
      <form className="flex flex-col w-[80vw]" onSubmit={handleSubmit}>
        <label className="">
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="text-black"
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="text-black"

          />
        </label>
        <br />
        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-black"

          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="text-black"

          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="text-black"

          />
        </label>
        <br />
        <label>
          Booking Time:
          <input
            type="time"
            name="bookingTime"
            value={formData.bookingTime}
            onChange={handleChange}
            className="text-black"

          />
        </label>
        <br />
        <label>
          Number of Guests:
          <input
            type="number"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            className="text-black"

          />
        </label>
        <br />
        <label>
          Prefer Outdoors:
          <input
            type="checkbox"
            name="preferOutdoors"
            checked={formData.preferOutdoors}
            onChange={handleChange}
            className="text-black"

          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
