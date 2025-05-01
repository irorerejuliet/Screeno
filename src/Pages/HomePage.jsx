import React from 'react'

const HomePage = () => {
  return (
    <>
      <section className=" bg-black text-white py-20">
        <div className="container mx-auto ">
          <div className="md:flex flex-row items-center justify-between  gap-44 md:w-[1152px] w-[110pxx]  relative">
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
        <div className="text-center mx-auto w-[457px] space-y-4">
          <h3 className="text-4xl font-bold">All-in-one platform</h3>
          <p className="text-base font-normal w-[457px]">
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
        <div>
          <div className="flex items-center gap-2  w-[228px]">
              <img src="/images/upload.png" alt="upload" className='mb-12'/>
            <div className="">
              <p className="text-base font-semibold">Upload & Organize</p>
              <p className="text-sm font-normal ">
                Upload in bulk, organize content in categories, add custom
                filters & upload extras.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage
