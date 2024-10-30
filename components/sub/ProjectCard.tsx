import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ src, title, description, url }: Props) => {
  return (
    <a
      className="relative z-40 overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
      href={url} // 确保这里的url是动态链接
      target="_blank" // 加上target属性以确保在新窗口打开
      rel="noopener noreferrer" // 安全性考虑
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
