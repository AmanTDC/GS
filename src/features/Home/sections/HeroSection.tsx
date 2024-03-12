import Img from "@/shared/Img";
import React, { useState } from "react";
import CountUp from "react-countup";
import emailjs from "@emailjs/browser";
import useScrollHidden from "@/utils/hooks/useScrollHidden";
import RewardModal from "@/components/Modal/RewardModal";
const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(-1);
  useScrollHidden(isLoading === 1);
  const claimNow = () => {
    setIsLoading(0);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        { email },
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then((res) => {
        // setIsLoading(1);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(-1);
      });
  };
  return (
    <div className="bg-[url('/images/homeBg.png')] lg:bg-[length:90%_100vh] bg-[length:200%_90%] xl:h-[900px] lg:h-screen h-fit w-full bg-no-repeat">
      <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-4 sm:pt-28 pt-24 lg:justify-between lg:space-x-10 max-w-[1240px] md:mx-auto px-5">
        <div className="text-white md:max-w-[644px] sm:max-w-[calc(100%-80px)]">
          <div className="text-xl font-medium sm:block hidden">
            Welcome to Global Scholar 👋
          </div>
          <div className="md:text-5xl sm:text-4xl text-[32px] font-semibold sm:!leading-[67px] leading-[50px] my-4">
            Study Abroad With Reward: Your Global Future Awaits
          </div>
          <div className="sm:text-xl text-sm font-medium mt-2">
            Unlock Boundless Opportunities, Explore World-Class Universities,
            and Achieve Your Dreams Abroad
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              claimNow();
            }}
            className="rounded-full w-full bg-white flex items-center relative sm:h-16 h-10 my-8"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              className="text-gray-400 sm:text-base text-sm rounded-full font-medium sm:mr-[220px] mr-16 w-full bg-white outline-none sm:h-16 h-10 p-5 pl-6"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center cursor-pointer text-white gap-x-3 sm:p-5 absolute bg-[rgba(30,58,138,1)] hover:bg-[rgba(30,58,138,1)]/90 duration-500 sm:h-12 h-8 p-3 rounded-full sm:right-2 right-1"
            >
              {isLoading === 0 ? (
                <div className="sm:w-[149px] w-[78px]">
                  <div id="loader" className="h-4 w-4 rounded-full mx-auto" />
                </div>
              ) : (
                <>
                  <Img
                    src="/icons/claimNow.png"
                    alt="send"
                    height={24}
                    width={24}
                    isLocal
                    className="max-[640px]:h-[18px] max-[640px]:w-[18px] sm:block hidden"
                  />
                  <h4 className="text-sm font-medium flex">
                    Claim 300$ <span className="sm:block hidden pl-1">Now</span>
                  </h4>
                </>
              )}
            </button>
          </form>
          <div className="flex max-[450px]flex-col max-[450px]:items-start font-semibold items-center gap-8">
            <div>
              <div className="md:text-[32px] text-[24px] min-w-[166px]">
                <CountUp end={500000} prefix="₹" duration={0.7} />
              </div>
              <div className="sm:text-xl text-sm">Scholarships</div>
            </div>
            <div className="w-[1px] h-12 bg-white/50 max-[450px]:hidden" />
            <div>
              <div className="md:text-[32px] text-[24px]">
                <CountUp end={5000} suffix="+" duration={0.7} />
              </div>
              <div className="sm:text-xl text-sm">
                Learners On-Campus Abroad
              </div>
            </div>
          </div>
        </div>
        <Img
          src={"/images/homeHero.png"}
          height={528}
          width={470}
          alt="heroImage"
          isLocal
          className="mx-auto sm:px-0 px-5"
        />
      </div>

      {isLoading === 1 && (
        <RewardModal
          title={"Thank You, \n You’ll Be Rewarded Soon 🤑"}
          subTitle="Our counselors will get in touch with you shortly 👍"
          close={() => setIsLoading(-1)}
        />
      )}
    </div>
  );
};

export default HeroSection;
