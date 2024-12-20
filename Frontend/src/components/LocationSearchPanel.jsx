import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "Esic Colony Sarvodeya Nagar near Jk temple ,Kanpury SarvodeyaKanpur",
    "C6 6 Esveabevrbg wr Sarvodeya Nagar near Jk temple ,Kanpury SarvodeyaKanpur",
    "C6 6 Ervodeya Nagar near Jk temple ,Kanpury SarvodeyaKanpur",
    "C6 Sharma cafe agar near Jk temple Kanpury SarvodeyaKanpur",
  ];

  return (
    <div className="">
      {locations.map(function (elem, index) {
        return (
          <div
            key={index}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex active:border-black border-2 border-gray-100 rounded-md p-3 items-center my-2 gap-3 justify-start"
          >
            <h2 className="bg-[#eee] h-7 flex items-center justify-center w-12 rounded-full">
              <i class="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium ">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
