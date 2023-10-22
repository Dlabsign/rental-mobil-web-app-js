import React, { useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import { GeocodingControl } from "@maptiler/geocoding-control/maplibregl";
import "@maptiler/geocoding-control/style.css";
import "maplibre-gl/dist/maplibre-gl.css";
import * as maptilersdk from "@maptiler/sdk";
import { dataTempat } from "../../../data";

const apiKey = "hyhMncdGncTIV4xuPlHb";

const FormWithMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(true);

  useEffect(() => {
    const map = new maptilersdk.Map({
      container: "map", // id of HTML container element
      style: "https://api.maptiler.com/maps/streets/style.json?key=" + apiKey,
      center: [dataTempat[0].longitude, dataTempat[0].latitude],
      zoom: 13,
      hash: true,
    });

    const gc = new GeocodingControl({ apiKey, maplibregl });
    map.addControl(gc);

    dataTempat.forEach((data) => {
      const marker = new maplibregl.Marker({
        color: "#FF0000",
        draggable: false,
      })
        .setLngLat([data.longitude, data.latitude])
        .addTo(map);

      marker.getElement().addEventListener("click", () => {
        setSelectedLocation(data);
      });
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="w-full  font-basierM text-white flex-col sm:justify-between ">
      <div className="inline-grid grid-cols-1 sm:inline-flex   w-full">
        <div className="w-[100%] sm:w-[80%] ">
          <div
            id="map"
            className="w-full sm:h-[100%] h-[300px] border border-white "
          ></div>
        </div>
        {selectedLocation && (
          <div className="h-[full] text-slate-700 w-[100%] sm:-[50%] flex justify-center items-start py-6   bg-white">
            <div className="sm:w-[80%] w-full h-[100%]   text-sm  flex sm:inline items-start ">
              <div className="w-[230px] sm:w-[100%] sm:h-[250px] h-[167px]">
                <img src={selectedLocation.img} alt="" />
              </div>
              <div className="inline items-center justify-between sm:ml-0 ml-4 w-[150px]  sm:w-0 sm:h-0 h-[100%] ">
                <div className="sm:flex inline items-start mt-2 text-xs  border-black border">
                  <img
                    src="./public/icon/location-dot-solid.svg"
                    alt=""
                    className=" sm:inline hidden"
                    style={{ width: "15px",  }}
                  />
                  <div className="ml-2 sm:mt-0 mt-0">
                    <p className="font-basierB text-sm sm:text-base text-slate-800 mt-[-4px]">{`${selectedLocation.jln}`}</p>
                    <p className="font-basierB text-sm sm:text-base text-slate-800 ">
                      {`${selectedLocation.Kota}, ${selectedLocation.province}. `}
                    </p>
                  </div>
                </div>
                <div className="flex mt-5 w-[100%] border-t-black border pt-2">
                  <a
                    className="rounded cursor-pointer block w-full text-center mr-5 px-2 py-2 bg-slate-800 text-white  text-sm  font-medium"
                    type="button"
                    onClick={() => {
                      window.open("https://wa.me/081259321453", "_blank");
                    }}
                  >
                    Hubungi
                  </a>
                  <a
                    className="rounded cursor-pointer block w-full text-center px-1 sm:px-2 py-2 bg-orange-500 text-white  text-sm  font-medium"
                    type="button"
                    onClick={() => {
                      window.open(
                        "https://maps.app.goo.gl/PAhwbaAPrRy3EwmQ6",
                        "_blank"
                      );
                    }}
                  >
                    Kunjungi
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormWithMap;
