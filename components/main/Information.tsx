import Image from "next/image";
import "./Information.css";
import SkillDataProvider from "../sub/SkillDataProvider";

const Information = () => {
  return (
    <div
      id="about-me"
      className="relative flex h-full w-full p-28 justify-center items-center"
    >
      <div className="w-[70vw] flex justify-around items-center h-[30rem] rounded-md  relative z-40">
        <div className="w-full h-full flex justify-center items-center">
          <nav
            aria-labelledby="nav-title-social"
            className="text-zinc-300 font-semibold"
          >
            <ul className="w-full">
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>姓名Name: 彭子涵Euler</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>
                    大学University: 广东工业大学Guangdong University of
                    Technology
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>年龄Age: 21</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>性别Gender: 男Male</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>现所在地Current Location: 广州GuangZhou</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>体重Weight: 80kg</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>身高Height: 178cm</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>民族Ethnicity: 汉Han</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>出生年月Birth Date：2003.09</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="w-full h-full transform translate-y-[-80px] translate-x-[120px]">  {/* 向上移动 20px */}
  <SkillDataProvider
    key={"face"}
    width={600}
    height={600}
    src="/images/face.png"
    index={1}
  />
</div>
      </div>
    </div>
  );
};

export default Information;
