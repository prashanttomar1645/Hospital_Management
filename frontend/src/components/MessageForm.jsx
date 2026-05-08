import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();

    // ✅ Frontend validation
    if (!firstName || !lastName || !email || !phone || !message) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        { firstName, lastName, email, phone, message },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // ✅ Success
      toast.success(res.data.message);

      // ✅ Clear form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.log(error);

      // ✅ Safe error handling
      toast.error(
        error.response?.data?.message || "Something went wrong!"
      );
    }
  };

  return (
    <div className="container form-component message-form">
      <h2>Send Us A Message</h2>

      {/* ✅ Form */}
      <form onSubmit={handleMessage} noValidate>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text" // ✅ FIXED (not number)
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <textarea
          rows={7}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit">Send</button>
        </div>
      </form>

      <img src="/Vector.png" alt="vector" />
    </div>
  );
};

export default MessageForm;