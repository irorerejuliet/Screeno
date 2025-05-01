import React from 'react'
import { platformData } from '../Constant/PlatformData';

const HomePage = () => {
  return (
    <>
      <section className=" bg-black text-white py-20">
        <div className="container mx-auto ">
          <div className="md:flex flex-row items-center justify-between  gap-44   relative">
            <div className="space-y-6 md:px-0 px-3">
              <h3 className="md:w-[441px] w-[350px] md:text-[3.063rem] text-3xl font-bold">
                Reach more people in real time
              </h3>
              <p className="md:w-[441px] w-[350px] text-base font-normal">
                The Screeno ecosystem is designed to help you generate profit.
                Set up complete sales and marketing funnels with ease using the
                Screeno
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-700 text-sm font-light py-2 px-6 rounded-[40px]">
                  Contact Us
                </button>
                <button className="bg-black border border-gray-400 text-sm font-light py-2 px-10 rounded-[50px]">
                  Login
                </button>
              </div>
            </div>
            <img
              src="/images/Frame 244.png"
              alt="frame"
              className="md:ml-40 ml-16 md:w-[543px] w-[280px] md:pt-0 pt-10"
            />
            <div className="absolute md:left-[66%] left-[4%] md:top-[30%] -bottom-[6%]">
              <img
                src="/images/Frame 355.png"
                alt="frame"
                className="md:w-[153px] w-[80px]"
              />
            </div>
          </div>

          <div className="md:mt-52 mt-20 md:flex flex-row justify-between  items-center md:px-0 px-3 md:space-y-0 space-y-10">
            <img src="/images/apple.png" alt="apple" />
            <img src="/images/androidtv.png" alt="abdroidtv" />
            <img src="/images/watch.png" alt="watch" />
            <img src="/images/iphone.png" alt="iphone" />
            <img src="/images/androd.png" alt="andriod" />
          </div>
        </div>
      </section>
      <section className="container mx-auto my-24">
        <div className="text-center mx-auto md:w-[457px] w-[350px] space-y-4">
          <h3 className="text-4xl font-bold">All-in-one platform</h3>
          <p className="text-base font-normal md:w-[457px] w-[350px]">
            You take care of the video quality and we take care of everything
            else
          </p>
          <div className="flex gap-4 text-white justify-center">
            <button className="bg-blue-700 text-sm font-light py-2 px-6 rounded-[40px]">
              Contact Us
            </button>
            <button className="bg-white text-black border border-gray-400 text-sm font-normal py-2 px-10 rounded-[50px]">
              Login
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-y-6 gap-28 my-28 items-center px-20">
          {platformData.map(({ id, image, title, description }) => (
            <div key={id}>
              <div className="flex items-center gap-2  w-[228px]">
                <img src={image} alt={title} className="mb-12" />
                <div className="">
                  <p className="text-base font-semibold">{title}</p>
                  <p className="text-sm font-normal ">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="my-24 bg-black text-white py-44">
        <div className="">
          <div className="text-center mx-auto md:w-[457px] w-[350px] space-y-4 ">
            <h3 className="text-4xl font-bold">
              Start your own business today
            </h3>
            <p className="text-base font-normal md:w-[457px] w-[350px]">
              Consistent quality and experience across all platforms and
              devices.
            </p>
            <div className="flex gap-4 text-white justify-center">
              <button className="bg-white text-black text-sm font-medium py-2 px-6 rounded-[40px]">
                Contact Us
              </button>
              <button className="bg-black text-white border border-gray-400 text-sm font-normal py-2 px-10 rounded-[50px]">
                Login
              </button>
            </div>
            <div className="relative pt-10 md:ml-0 ml-8">
              <img
                src="/images/starkBusiness.jpg"
                alt="starbusiness"
                className="md:w-[543px] w-[280px] left-48"
              />
              <div className="absolute top-24 -left-4">
                <img
                  src="/images/starbusinessTwo.png"
                  alt="startbusnisesTwo"
                  className="md:w-[153px] w-[80px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage
