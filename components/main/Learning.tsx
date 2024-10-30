import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Learning = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
      Self-study courses and projects<span className="text-gray-700 font-semibold text-2xl">(Ongoing and Planned)</span>
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/01.png"
          title="《Neural Networks and Deep Learning》from coursera."
          description="Click the image above to learn more about the course!"
          url="https://www.coursera.org/learn/neural-networks-deep-learning#modules"
        />
        <ProjectCard
          src="/02.png"
          title="《ConvolutionalNeural Networks》from coursera."
          description="Click the image above to learn more about the course!"
          url="https://www.coursera.org/learn/convolutional-neural-networks#modules"
        />
        <ProjectCard
          src="/03.png"
          title="中国大学MOOC的数据结构课程"
          description="Click the image above to learn more about the course!"
          url="https://www.icourse163.org/course/WHUT-1205969811?from=searchPage&outVendor=zw_mooc_pcssjg_"
        />
      </div>
    </div>
  );
};

export default Learning;
