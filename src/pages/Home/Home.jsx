import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";
import { useQuery } from "@tanstack/react-query";
import { p } from "motion/react-client";

const Home = () => {
  const {
    isPending,
    data: jobsData,
    isError,
    error,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/jobs");
      return res.json();
    },
  });
  if (isPending) {
    return <span className="loading loading-dots loading-xl"></span>;
  }
  if (isError) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Banner></Banner>
      <HotJobs hotJobsPromise={jobsData}></HotJobs>
    </div>
  );
};

export default Home;
