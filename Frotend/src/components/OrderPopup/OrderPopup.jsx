import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";


// Popup component
const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>Popup Content</p>
        <button onClick={onClose}>Close Popup</button>
      </div>
    </div>
  );
};


const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [Amount, setAmount] = useState("");
  

  const handleBookNow = async(e) => {
    // Create CSV content with the booking details
    //const csvContent = `${name},${email},${address}\n`;

    // Create a Blob object
    //const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });

    // Create a link element to trigger the download
    //const link = document.createElement("a");
    //link.href = window.URL.createObjectURL(blob);
    //link.download = "booking_details.csv";

    // Trigger the download
    //link.click();
    alert('Booking Successfull Thank you Our team will reach out you!');
    e.preventDefault()
    //setOrderPopup(false);
    setOrderPopup(false);
    
    try{
        await axios.post("http://localhost:8000/",{
          email,name,address,phone,Amount
        })
        alert("Submitted")
        setOrderPopup(false);
    }
    catch(e){
      console.log(e);
      setOrderPopup(false);
    }
    
    
    console.log(name,email,address);
    // Close the popup
    //setOrderPopup(false);
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-black/70">
                  Please enter payement details
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer "
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* Body */}
        <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Package Name"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

<input
                type="Number"
                placeholder="Amount INR"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                value={Amount}
                onChange={(e) => setAmount(e.target.value)}
              />  

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                value={phone}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />    
            <div class="grid grid-cols-2 gap-6">
                <div class="col-span-2 sm:col-span-1">
                    <label for="card-number" class="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                    <input type="text" name="card-number" id="card-number" placeholder="0000 0000 0000 0000" class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"/>
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <label for="expiration-date" class="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
                    <input type="text" name="expiration-date" id="expiration-date" placeholder="MM / YY" class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"/>
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <label for="cvv" class="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                    <input type="text" name="cvv" id="cvv" placeholder="000" class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"/>
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <label for="card-holder" class="block text-sm font-medium text-gray-700 mb-2">Card Holder</label>
                    <input type="text" name="card-holder" id="card-holder" placeholder="Full Name" class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"/>
                </div>
            </div>

            <div class="mt-8">
                <button type="submit" class="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none" onClick={handleBookNow}>Submit</button>
            </div>
        </form>
        </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
