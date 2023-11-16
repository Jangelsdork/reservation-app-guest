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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
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
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        </div>

        <br />
        <div className="flex flex-col">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="bookingTime">Booking Time:</label>
          <input
            type="time"
            id="bookingTime"
            name="bookingTime"
            value={formData.bookingTime}
            onChange={handleChange}
          />
        </div>
        </div>
        <br />
        <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <label htmlFor="numberOfGuests">Number of Guests:</label>
          <input
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="preferOutdoors">Prefer Outdoors:</label>
          <input
            type="checkbox"
            id="preferOutdoors"
            name="preferOutdoors"
            checked={formData.preferOutdoors}
            onChange={handleChange}
          />
        </div>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
