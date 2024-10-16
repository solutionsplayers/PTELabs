import React from "react";
import { SECTION2, SECTION2RIGHT } from "../../assets/images";

const Section2 = () => {
  return (
    <>
      <div className="grid grid-cols-12 h-full p-10 bg-[#FF184417] gap-5">
        <div className="col-span-7">
          <img src={SECTION2} alt="" loading="lazy" />
        </div>
        <div className="col-span-5">
          <div className="flex flex-col items-center justify-center gap-8">
            <h4 className="text-2xl font-bold border-b-2 w-1/3 text-black">
              About Class
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. At consectetur duis enim
              iaculi donec. Morbi nunc eget suspendisse amet habitasse luctus
              lobortis egestas.Morbi nunc eget suspenditus lobortis
              egestas.Suspendisse quam purus placerat eget aliquet a.
              Scelerisque ac vestibulum blandit odio libero duis facilisi
              in.quam purus placerat eget aliquet a. Scelerisque ac vestibulum
              tibulum blandit odio libero duis facilisi. Suspendisse quam purus
              placerat eget alet a. Scelerisque ac vestibulum blandit odio
              libero duis facilisi in.Suspendisse quam purus placerat eget
              aliquet a. Scelerisque ac vestibulum blandit odio libero duis
              facilisi in.quam purus placerat eget aliquet a. Scelerisque ac
              vestibulum blandit odio libero duis facilisi in Lorem ipsum dolor
              sit amet consectetur. At consectetur duis enim iaculi donec. Morbi
              nunc eget suspendisse amet habitasse luctus lobortis egestas.Morbi
              nunc eget suspenditus lobortis egestas.Suspendisse quam purus
              placerat eget aliquet a..
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 h-full p-10 gap-5">
        <div className="col-span-5">
          <div className="flex flex-col items-center justify-center gap-8">
            <h4 className="text-2xl border-b-2 w-1/3 text-black font-bold">
              Course Detail
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. At consectetur duis enim
              iaculi donec. Morbi nunc eget suspendisse amet habitasse luctus
              lobortis egestas.Morbi nunc eget suspenditus lobortis
              egestas.Suspendisse quam purus placerat eget aliquet a.
              Scelerisque ac vestibulum blandit odio libero duis facilisi
              in.quam purus placerat eget aliquet a. Scelerisque ac vestibulum
              tibulum blandit odio libero duis facilisi. Suspendisse quam purus
              placerat eget alet a. Scelerisque ac vestibulum blandit odio
              libero duis facilisi in.Suspendisse quam purus placerat eget
              aliquet a. Scelerisque ac vestibulum blandit odio libero duis
              facilisi in.quam purus placerat eget aliquet a. Scelerisque ac
              vestibulum blandit odio libero duis facilisi in Lorem ipsum dolor
              sit amet consectetur. At consectetur duis enim iaculi donec. Morbi
              nunc eget suspendisse amet habitasse luctus lobortis egestas.Morbi
              nunc eget suspenditus lobortis egestas.Suspendisse quam purus
              placerat eget aliquet a..
            </p>
          </div>
        </div>
        <div className="col-span-7">
          <img src={SECTION2RIGHT} alt="" loading="lazy" />
        </div>
      </div>
    </>
  );
};

export default Section2;
