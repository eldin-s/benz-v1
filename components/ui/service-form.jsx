import React from "react";

const ServiceForm = () => {
  return (
    <div className="bg-bgShade p-6 mt-8 rounded-2xl">
      <form className="space-y-4">
        <div>
          <label
            htmlFor="serviceType"
            className="block text-sm font-medium text-gray-700"
          >
            Vrsta servisa
          </label>
          <select
            id="serviceType"
            name="serviceType"
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-bgColor"
          >
            <option value="oilChange">Service A</option>
            <option value="tireChange">Service B</option>
          </select>
        </div>

        <textarea
          id="description"
          name="description"
          rows="4"
          className="mt-1 block p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-bgColor placeholder:text-gray-400"
          placeholder="Napišite napomenu..."
        />

        <input
            type="text"
            id="brTelefona"
            name="brTelefona"
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-bgColor"
            placeholder="Vaš broj telefona"
        />

        <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-bgColor"
        />
      </form>
    </div>
  );
};

export default ServiceForm;
