import React, { useState } from "react";
import axios from "axios";
const style = {
  wrapper: "bg-transparent w-[90%] md:w-[55%] mx-auto flex flex-col ",
  input:
    "px-3 bg-transparent ring-none outline-none placeholder:text-gray-100 text-gray-100 flex-1",
  btn: "bg-[#ffc900]  px-3 md:px-4 py-2 md:py-4 rounded-full hover:scale-[0.95] transition duration-[400ms]",
  heading: "text-[#ffc900] text-4xl text-center my-12",
};
const Newsletter = () => {
  const tokenWithWriteAccess =
    "skQMjV6Hnuxm8Kdb3AeslehiTTW4TxW0WLSiaKOQEExGTokWbKZ4PwDynNFV0eZUJoPeLr89BJeR1fh6nX857Srjrzq2ssiyrD3uyBrPXCTvPchN2z46edP4PZxvxLHL377swnWdgY9GJsfC5DxvRKKcPEjxQiQocQQWRkrUPkzv3GFqMPyt";
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleFormSubmit = async () => {
    const { data } = await axios.post(
      `https://x6jorgpn.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
      {
        mutations: [
          {
            create: {
              _type: "newsletter",
              createdAt: new Date().toISOString(),
              email: email,
            },
          },
        ],
      },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${tokenWithWriteAccess}`,
        },
      }
    );
    res.status(201).send(data.results[0].id);
  };
  return (
    <div
      className={style.wrapper}
      style={{ fontFamily: "Yeseva One, sans-serif" }}
    >
      <h2 className={style.heading}>Subscribe Our Newsletter</h2>
      <form
        action="/"
        className="flex w-full border-2 rounded-full px-3  py-2"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          className={style.input}
          placeholder="Enter email..."
          style={{ fontFamily: "Poppins, sans-serif" }}
          value={email}
          onChange={handleEmailChange}
        />
        <button
          style={{ fontFamily: "Poppins, sans-serif" }}
          className={style.btn}
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
