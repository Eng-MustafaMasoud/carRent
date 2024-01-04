"use client";

import { CarProps } from "@/constants/types";
import { calculateCarRent } from "@/utils";
import { useState } from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import CarDetails from "./CardDeatils";


interface CardPrpos {
  car: CarProps;
  
}
const CarCard = ({ car }: CardPrpos) => {
  const [open, setOpen] = useState(false);
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group " >
      <div className="car-card__content">
        <h2 className="car-card__content-title">{make + " " + model}</h2>
      </div>
      <p className="flex font-extrabold mt-6 text-[1.5rem]">
        <span className="self-start text-[.8rem] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[.8rem] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3">
        <Image
          src="/hero.png"
          alt="car model"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible  w-full justify-between text-grey">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="steering wheel"
              width={20}
              height={20}
            />
            <p>{transmission === "a" ? "Automatic" : "Manual"}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/tire.svg"
              alt="steering wheel"
              width={20}
              height={20}
            />
            <p>{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src="/gas.svg" alt="steering wheel" width={20} height={20} />
            <p>{city_mpg}MPG</p>
          </div>
        </div>
      <div className=" car-card__btn-container rounded-full">
        <CustomButton
          title={"View More"}
          containerStyles="bg-primary-blue  text-md font-bold  rounded-full text-white w-full  "
          textStyles=""
          rightIcon="/right-arrow.svg"
          handleClick={() => setOpen(true)}
        />
      </div>
      </div>
      <CarDetails open={open} closeModal={()=>setOpen(false)} car={car}/>
    </div>
  );
};

export default CarCard;
