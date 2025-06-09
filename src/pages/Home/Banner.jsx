import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/bannerImg1.jpg";
import team2 from "../../assets/bannerImg2.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              src={team1}
              className="  max-w-sm  shadow-2xl rounded-tl-4xl rounded-tr-4xl border-l-8 border-purple-500 border-b-8 "
              animate={{ y: [100, 150, 100] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.img
              src={team2}
              className="  max-w-sm  shadow-2xl rounded-tl-4xl rounded-tr-4xl border-l-8 border-purple-500 border-b-8 "
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 10, delay: 5, repeat: Infinity }}
            />
          </div>

          <div className="flex-1">
            <h1 className=" text-5xl font-bold ">
              The{" "}
              <motion.span
                animate={{
                  color: ["#50fa7b", "#ff79c6", "#bd93f9"],
                  transition: { duration: 5, repeat: Infinity },
                }}
              >
                Easiest Way
              </motion.span>{" "}
              to Get Your New Job
            </h1>
            <p className="py-6">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
