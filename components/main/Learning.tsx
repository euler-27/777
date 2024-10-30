import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Learning = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Self-study courses and projects
        <span className="text-gray-700 font-semibold text-2xl">(Ongoing and Planned)</span>
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
          title="《Convolutional Neural Networks》from coursera."
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
      <div className="w-[70vw] flex justify-around items-center h-[30rem] rounded-md relative z-40">
        <div className="w-full h-full flex justify-center items-center">
          <nav
            aria-labelledby="nav-title-social"
            className="text-zinc-300 font-semibold flex flex-col items-center"
          >
          <img src="/images/tm.png" width="990" height="990" />
          <div className="flex justify-center">
        <img src="/images/pro.png" className="mx-auto" />
    </div>
            <ul className="w-full">
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>编程语言 | Programming Languages：JavaScript（Next.js）和一定的HTML</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>
                  开发环境 | IDE： Visual Studio 和 Visual Studio Code
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>域名与服务器部署 | Domain and Server Deployment：阿里云、华为云、Netlify、GitHub</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>网站运营 | Website Operations： 宝塔面板、Netlify、GitHub </span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>用到的开源软件 | Open Source Software：GitHub </span>
                </div>
              </li>
              
              <li>
                <div className="flex items-center justify-center w-full">
                <span className="pink-text">参考资料（B站） | References from Bilibili:https://www.bilibili.com/video/BV16A4y1X7vg/</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                <span className="pink-text">参考资料（B站） | References from Bilibili:https://www.bilibili.com/video/BV1Tn4y1d7ya/</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                <span className="pink-text">参考资料（B站） | References from Bilibili:https://www.bilibili.com/video/BV1s3411g7PS/</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span className="red-text">参考资料（油管） | References from YouTube:https://youtu.be/0siQoaXMmzk?si=EMbaYXJANAmXDvgm</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                <span className="red-text">参考资料（油管） | References from YouTube:https://youtu.be/T9L8aWTPTLA?si=44pUt6RAPRS3e1dZ</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span className="green-text">参考资料（CSDN） | References from CSDN:https://blog.csdn.net/WHF__/article/details/129362462</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span className="green-text">参考资料（CSDN） | References from CSDN:https://blog.csdn.net/w799766/article/details/106770707</span>
                </div>
              </li>
            
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Learning;
