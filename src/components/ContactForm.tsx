"use client";
import React, { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaCircleXmark, FaSpinner } from "react-icons/fa6";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    message: string;
    icon: React.ReactNode;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setFormData({
        ...formData,
        [name]: value.replace(/[^0-9]/g, ""),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus({
      message: "Αποστολή...",
      icon: <FaSpinner className="animate-spin text-primary text-2xl" />,
    });

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({
          message: "Το μήνυμά σας στάλθηκε επιτυχώς!",
          icon: <IoIosCheckmarkCircle className="text-green-500 text-2xl" />,
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus({
          message: "Σφάλμα κατά την αποστολή. Δοκιμάστε ξανά.",
          icon: <FaCircleXmark className="text-red-500 text-2xl" />,
        });
      }
    } catch (error) {
      setStatus({
        message: "Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία.",
        icon: <FaCircleXmark className="text-red-500 text-2xl" />,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-md p-6 border border-primary"
    >
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-primary">
            Όνομα <span className="text-red-500 px-1">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Το όνομά σας"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-primary px-3 py-2 text-brandgray placeholder:text-brandlight shadow-sm focus:border-primary focus:ring-primary focus:ring-2 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-primary">
            Επώνυμο <span className="text-red-500 px-1">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Το επώνυμό σας"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-primary px-3 py-2 text-brandgray placeholder:text-brandlight shadow-sm focus:border-primary focus:ring-primary focus:ring-2 focus:outline-none"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-primary">
            Email <span className="text-red-500 px-1">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Το email σας"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-primary px-3 py-2 text-brandgray placeholder:text-brandlight shadow-sm focus:border-primary focus:ring-primary focus:ring-2 focus:outline-none"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-primary">
            Τηλέφωνο{" "}
            <span className="italic text-brandlight">(προαιρετικό)</span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="π.χ. 2106129896"
            value={formData.phone}
            onChange={handleChange}
            inputMode="numeric"
            className="mt-1 block w-full rounded-md border border-primary px-3 py-2 text-brandgray placeholder:text-brandlight shadow-sm focus:border-primary focus:ring-primary focus:ring-2 focus:outline-none"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-primary">
            Μήνυμα <span className="text-red-500 px-1">*</span>
          </label>
          <textarea
            name="message"
            placeholder="Γράψτε το μήνυμά σας εδώ..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="mt-1 block w-full rounded-md border border-primary px-3 py-2 text-brandgray placeholder:text-brandlight shadow-sm focus:border-primary focus:ring-primary focus:ring-2 focus:outline-none"
          />
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-lg text-lg shadow-md hover:bg-white hover:text-primary border-primary border-2 transition-colors duration-200"
        >
          Αποστολή μηνύματος
        </button>
      </div>
      {status && (
        <div className="flex pt-8 items-center gap-3 mt-4 text-primary text-base font-bold">
          <span>{status.message}</span>
          {status.icon}
        </div>
      )}
    </form>
  );
}
