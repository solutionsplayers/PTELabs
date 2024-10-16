import React from "react";
import Navbar from "../../layout/navbar/Navbar";
import Footer from "../../layout/footer/Footer";
import CustomButton from "../../components/CustomButton";
import { HOME } from "../../assets/images";
import Section2 from "./Section2";

const Landing = () => {
  return (
    <>
      <div className="grid grid-cols-12 p-11 gap-10">
        <div className="col-span-6 flex flex-col space-y-10">
          <h1 className="text-[44px] font-bold text-primary leading-tight">
            Welcome <span style={{ color: "black" }}> to PTE Labs</span> Tools
          </h1>
          <h4 className="text-[20px] text-black">Practice Hard | Work Hard</h4>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet
            lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet
            consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
            dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor.
          </p>
          <div className="flex items-center gap-5">
            <CustomButton className="bg-primary text-white">
              Start Practicing
            </CustomButton>
            <CustomButton className="bg-[#36AACF] text-white">
              Download Course Guide
            </CustomButton>
          </div>
        </div>
        <div className="col-span-6">
          <img src={HOME} alt="" className="h-[70vh]" loading="lazy" />
        </div>
      </div>
      <Section2 />
    </>
  );
};

export default Landing;
