import React from "react";
import { event1, event2, event3, video1, video2, video3 } from "../../assets";

const ExploreEvent = () => {
  return (
    <div className="w-full h-[150vh]">
      <div className="flex flex-col text-center ml-20 mr-20">
        <h1 className="font-semibold text-4xl border p-3 rounded-lg text-[#9400D3]">
          Our Event
        </h1>
        <p className="font-normal mt-10 leading-10 text-xl text-[#D8BFD8]">
          Come meet us in GSSoC, The Fashion Froze community is active over <br />
          all open source programs and hackathons.
        </p>
      </div>

      <div className="grid grid-cols-3 h-[auto] gap-10 ml-20 mr-20 mt-10">
        <div className="border rounded-lg h-[auto] p-5 ">
          <img src={event1} alt="" className="w-50 h-50" />
          <h1 className="tag border border-pink-500 pl-2 pr-2 p-1 bg-pink-700 rounded-lg mt-4 w-[45%] text-sm ">
            Limited-Time Designs
          </h1>
          <h1 className="text-white font-semibold mt-5 text-xl mb-5 hover:text-gray-500 cursor-pointer">
            Unveiling Summer Vibes Collection
          </h1>
          <p className="text-pink-100 mb-10">
            Get ready to embrace the sun with our exclusive "Summer Vibes" t-shirt
            collection. These limited-time designs are a celebration of all things
            summer from beachy graphics to vibrant colors. Immerse yourself in
            wearable art that sparks conversations ...
          </p>
          <div className="author flex justify-between mt-5 items-center">
            <div className="flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-calendar"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />{" "}
              </svg>
              <h1 className="ml-2 text-gray-400 text-sm">May 30, 2023.</h1>
            </div>
          </div>
          <button className="border p-2 text-gray-900 rounded-lg bg-pink-500 hover:bg-indigo-600 mt-5 text-sm">
            Check out
          </button>
        </div>
        <div className="border rounded-lg h-[100%] p-5">
          <img src={event2} alt="" />
          <h1 className="tag border border-pink-500 pl-2 pr-2 p-1 bg-pink-700 rounded-lg mt-4 w-[40%] text-sm">
            Artist Spotlight
          </h1>
          <h1 className="text-white font-semibold mt-5 text-xl mb-5 hover:text-gray-500 cursor-pointer">
            Featured Artist: Creative Canvas
          </h1>
          <p className="text-pink-100 mb-10">
            Dive into the world of artistic t-shirt designs with our "Creative
            Canvas" spotlight event. This month, we're showcasing the incredible
            talent of renowned artist. Discover a curated collection of their
            handcrafted designs, .....
          </p>
          <div className="author flex justify-between mt-4 items-center">
            <div className="flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-calendar"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />{" "}
              </svg>
              <h1 className="ml-2 text-gray-400 text-sm">July 30, 2023.</h1>
            </div>
          </div>
          <button className="border p-2 text-gray-900 rounded-lg bg-pink-500 hover:bg-indigo-600 mt-5 text-sm">
            Check out
          </button>
        </div>
        <div className="border rounded-lg h-[100%] p-5">
          <img src={event3} alt="" />
          <h1 className="tag border border-pink-500 pl-2 pr-2 p-1 bg-pink-700 rounded-lg mt-4 w-[45%] text-sm">
            Theme Showcase
          </h1>
          <h1 className="text-white font-semibold mt-5 text-xl mb-5 hover:text-gray-500 cursor-pointer">
            Retro Revival: Throwback Tee Extravaganza
          </h1>
          <p className="text-pink-100 mb-10">
            Travel back in time with our "Retro Revival" event, where nostalgia meets
            style. Explore an array of throwback-inspired t-shirt designs that pay
            homage to the iconic eras of the past
          </p>
          <div className="author flex justify-between mt-4 items-center">
            <div className="flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-calendar"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />{" "}
              </svg>
              <h1 className="ml-2 text-gray-400 text-sm">Aug 01, 2023.</h1>
            </div>
          </div>
          <button className="border p-2 text-gray-900 rounded-lg bg-pink-500 hover:bg-indigo-600 mt-5 text-sm">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreEvent;
