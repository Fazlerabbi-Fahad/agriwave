import React from "react";
import Banner from "../../../shared/banner";
import Image from "../../../asset/images/banner.jpg";
import Team from "../../../asset/images/team.png";
import man from "../../../asset/images/man.png";
import woman from "../../../asset/images/woman.png";
import { GiFarmTractor } from "react-icons/gi";
import { GiPlantWatering } from "react-icons/gi";
import { WiRaindrop } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { GiMinerals } from "react-icons/gi";

export default function Home() {
  return (
    <div>
      <Banner />
      <div>
        <div className="hero min-h-96 md:p-[5rem]">
          <div className="hero-content grid md:grid-cols-6 md:gap-6">
            <div className="md:col-span-3 md:p-3 animate__animated animate__fadeInLeft">
              <img src={Image} className="rounded-sm" alt="" />
            </div>
            <div className="md:col-span-3 animate__animated animate__fadeInRight">
              <h1 className="text-4xl font-bold">Get Some Help About</h1>
              <ul className="py-6 lg:pr-5">
                <li className="text-2xl font-semibold text-justify">
                  <span className="text-warning">1.Boost Yield:</span>
                  <span className="ml-1">
                    Optimize planting with local soil, temperature, and moisture
                    insights
                  </span>
                </li>
                <li className="mt-2 text-2xl font-semibold text-justify">
                  <span className="text-warning">2.Tailored Insights:</span>
                  <span className="ml-1">
                    Access region-specific data for informed farming decisions
                  </span>
                </li>
                <li className="mt-2 text-2xl font-semibold text-justify">
                  <span className="text-warning">3.Sustainable Practices:</span>
                  <span className="ml-1">
                    Reduce water and fertilizer use with precise soil knowledge
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl m-auto">
        <h1 className="text-4xl font-bold text-center my-[5rem]">
          What You Will Get
        </h1>
        <div className="flex justify-evenly  pb-[5rem] gap-3 overflow-x-auto">
          <div className="">
            <GiFarmTractor
              className="text-green-500 mx-auto animate__animated animate__fadeInLeft"
              size={100}
            />
            <p className="text-warning font-semibold text-center mt-2">
              Field Temperature
            </p>
          </div>
          <div className="">
            <GiPlantWatering
              className="text-green-700 mx-auto animate__animated animate__bounceInDown"
              size={100}
            />
            <p className="text-warning font-semibold text-center mt-2">
              Soil Moisture Level
            </p>
          </div>
          <div className="animate__animated animate__bounceInDown">
            <WiRaindrop
              className="text-green-700 mx-auto animate__animated animate__bounceInDown"
              size={100}
            />
            <p className="text-warning font-semibold text-center mt-2">
              Humidity
            </p>
          </div>
          <div className="animate__animated animate__bounceInDown">
            <WiHumidity
              className="text-green-700 mx-auto animate__animated animate__bounceInDown"
              size={100}
            />
            <p className="text-warning font-semibold text-center mt-2">
              Soil Elements
            </p>
          </div>
          <div className="animate__animated animate__bounceInDown">
            <GiMinerals
              className="text-green-700 mx-auto animate__animated animate__bounceInDown"
              size={100}
            />
            <p className="text-warning font-semibold text-center mt-2">
              Green Vegetable
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="hero min-h-96 md:p-[5rem]">
          <div className="hero-content grid md:grid-cols-6 md:gap-6">
            <div className="md:col-span-3 animate__animated animate__fadeInRight">
              <h1 className="text-4xl font-bold text-warning">
                About Our Team
              </h1>
              <ul className="py-6 lg:pr-5">
                <li className="text-xl font-semibold text-justify">
                  Team Sun Veil is a dedicated group of innovators passionate
                  about leveraging technology to solve critical challenges in
                  agriculture. Our team is focused on creating a web app that
                  empowers farmers to tackle water-related issues such as
                  unpredictable weather, pests, and diseases. By providing
                  farmers with easy access to and analysis of NASA datasets, we
                  aim to help them make informed decisions that improve crop
                  health, boost profits, and enhance food security.
                </li>
                <li className="mt-4 text-xl font-semibold text-justify">
                  We are a team from Bangladesh where all members of our team
                  are students of class 6-8 and age between 12 and 13 where Our
                  team is comprised of experts in fields such as data science,
                  software development, agriculture, and environmental science.
                  Together, we bring a diverse set of skills and perspectives to
                  the table, allowing us to design a user-friendly, impactful
                  tool that addresses the complex water-related challenges
                  farmers face globally.
                </li>
              </ul>
            </div>
            <div className="md:col-span-3 md:p-3 animate__animated animate__fadeInLeft">
              <img src={Team} className="rounded-sm" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 mb-5">
        <div className="max-w-screen-xl m-auto">
          <h1 className="text-4xl font-bold text-warning text-center my-[5rem]">
            Team Sun Veil
          </h1>
          <div className="flex justify-evenly  pb-[5rem] gap-6 overflow-x-auto">
            <div className="">
              <p className="flex justify-center">
                <img
                  className="text-primary"
                  width="100px"
                  src={woman}
                  alt=""
                  style={{ filter: "invert(100%)" }}
                />
              </p>
              <p className="font-semibold text-left mt-5">Humayra Afia</p>
              <p className="font-semibold text-left mt-2">
                <span className="text-warning mr-1">Position:</span>
                Team Leader
              </p>
              <p className="font-semibold text-left mt-2">
                <span className="text-warning mr-1">Institute:</span>
                British Standard School
              </p>
              <a href="mailto:humayra1692@gmail.com">
                <p className="font-semibold text-left mt-2">
                  <span className="text-warning mr-1">Email:</span>
                  humayra1692@gmail.com
                </p>
              </a>
            </div>
            <div className="">
              <p className="flex justify-center">
                <img
                  className="text-primary"
                  width="100px"
                  src={man}
                  alt=""
                  style={{ filter: "invert(100%)" }}
                />
              </p>
              <p className="font-semibold text-left mt-5">Zharif Mahmud</p>
              <p className="font-semibold text-left mt-2">
                <span className="text-warning mr-1">Position:</span>
                Researcher, Web Developer and Editor
              </p>
              <p className="font-semibold text-left mt-2">
                <span className="text-warning mr-1">Institute:</span>
                Navy Anchorage School and College
              </p>
              <a href="mailto:zharifmahmud2011@gmail.com">
                <p className="font-semibold text-left mt-2">
                  <span className="text-warning mr-1">Email:</span>
                  zharifmahmud2011@gmail.com
                </p>
              </a>
            </div>
            <div className="">
              <p className="flex justify-center">
                <img
                  className="text-primary"
                  width="100px"
                  src={man}
                  alt=""
                  style={{ filter: "invert(100%)" }}
                />
              </p>
              <p className="font-semibold text-left mt-5">
                Tanjin Ahmed Ariyan
              </p>
              <p className="font-semibold text-left mt-2">
                <span className="text-warning mr-1">Position:</span>
                Web Developer and Editor
              </p>
              <p className="font-semibold text-left mt-2">
                <span className="text-warning mr-1">Institute:</span>
                Navy Anchorage School And College
              </p>
              <a href="mailto:sohaggazi1979@gmail.com">
                <p className="font-semibold text-left mt-2">
                  <span className="text-warning mr-1">Email:</span>
                  sohaggazi1979@gmail.com
                </p>
              </a>
            </div>
            <div className="">
              <p className="flex justify-center">
                <img
                  className="text-primary"
                  width="100px"
                  src={woman}
                  alt=""
                  style={{ filter: "invert(100%)" }}
                />
              </p>
              <p className="font-semibold text-left mt-5">
                Titeersha Taimur Swayatta
              </p>
              <p className="font-semibold text-left mt-2">
                <span className="text-warning mr-1">Position:</span>
                Researcher, Presentation maker, and Designer
              </p>
              <p className="font-semibold text-left mt-2">
                <span className="text-warning mr-1">Institute:</span>
                BACHA English Medium School
              </p>
              <a href="mailto:jarinjahan85@gmail.com">
                <p className="font-semibold text-left mt-2">
                  <span className="text-warning mr-1">Email:</span>
                  jarinjahan85@gmail.com
                </p>
              </a>
            </div>

            <div className="">
              <p className="flex justify-center">
                <img
                  className="text-primary"
                  width="100px"
                  src={woman}
                  alt=""
                  style={{ filter: "invert(100%)" }}
                />
              </p>
              <p className="font-semibold text-left mt-5">Raisa Amin</p>
              <p className="font-semibold text-left mt-2">
                <span className="text-warning mr-1">Position:</span>
                Presentation Maker, and Script Writer
              </p>
              <p className="font-semibold text-left mt-2">
                <span className="text-warning mr-1">Institute:</span>
                Viqarunnisa Noon School And College
              </p>
              <a href="mailto:morsalazaman@gmail.com">
                <p className="font-semibold text-left mt-2">
                  <span className="text-warning mr-1">Email:</span>
                  morsalazaman@gmail.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
