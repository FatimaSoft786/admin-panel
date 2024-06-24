"use client";
import { useState, useEffect } from "react";
import SlotsTabs from "./SlotsTabs";
import DateTabs from "./DateTabs";

const Agenda = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [prices, setPrices] = useState({ firstVisit: "", followUpVisit: "" });
  const [currency, setCurrency] = useState("USD");

  const hours = Array.from({ length: 18 }, (_, i) => i + 6);

  useEffect(() => {
    const savedSlots = JSON.parse(localStorage.getItem("selectedSlots")) || [];
    const savedPrices = JSON.parse(localStorage.getItem("prices")) || {
      firstVisit: "",
      followUpVisit: "",
    };
    const savedCurrency = localStorage.getItem("currency") || "USD";

    setSelectedSlots(savedSlots);
    setPrices(savedPrices);
    setCurrency(savedCurrency);
  }, []);

  const toggleSlot = (day, slot) => {
    const slotKey = `${day}-${slot}`;
    setSelectedSlots((prev) =>
      prev.includes(slotKey)
        ? prev.filter((s) => s !== slotKey)
        : [...prev, slotKey]
    );
  };

  const handleSave = () => {
    // Save data to local storage
    localStorage.setItem("selectedSlots", JSON.stringify(selectedSlots));
    localStorage.setItem("prices", JSON.stringify(prices));
    localStorage.setItem("currency", currency);

    console.log("Selected Slots:", selectedSlots);
    console.log("Prices:", prices);
    console.log("Currency:", currency);

    alert("Data saved successfully!");

    // Reset data
    setSelectedSlots([]);
    setPrices({ firstVisit: "", followUpVisit: "" });
    setCurrency("USD");
  };

  return (
    <div className="container mx-auto p-4">
      <div>
        <h2 className="text-3xl font-bold my-6">Choose Slots</h2>
        <DateTabs
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <h2 className="text-2xl font-bold my-4 px-6">Select Hour</h2>

        <SlotsTabs
          selectedDate={selectedDate}
          toggleSlot={toggleSlot}
          selectedSlots={selectedSlots}
          hours={hours}
        />
      </div>

      <div className="my-6">
        <h2 className="text-2xl font-bold mb-2">Set Session & Payment</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">First Visit</label>
            <select
              value={prices.firstVisit}
              onChange={(e) =>
                setPrices({ ...prices, firstVisit: e.target.value })
              }
              className="p-2 border rounded w-full px-4"
            >
              <option value="$30/Session">$30/Session</option>
              <option value="$50/Session">$50/Session</option>
              <option value="$70/Session">$70/Session</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Follow Up Visit</label>
            <select
              value={prices.followUpVisit}
              onChange={(e) =>
                setPrices({ ...prices, followUpVisit: e.target.value })
              }
              className="p-2 border rounded w-full px-4"
            >
              <option value="$30/Session">$30/Session</option>
              <option value="$50/Session">$50/Session</option>
              <option value="$70/Session">$70/Session</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="p-2 border rounded w-full px-4"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-end w-full">
        <button
          onClick={handleSave}
          className="bg-dark-blue text-white px-6 py-2 rounded mt-4"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Agenda;
