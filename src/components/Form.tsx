"use client"
import React from "react";
import { useState } from "react";

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

const Form = (props: Props) => {

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        date: '',
        bookingTime: '',
        numberOfGuests: 1,
        preferOutdoors: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;
    
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

  return <div>
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
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
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>;
};

export default Form;
