import React, { useState } from "react";
import "animate.css/animate.min.css";
import Modal from "react-modal";
import Refresh from "../../assets/image/refresh.png";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import usePreventBodyScroll from "./usePreventBodyScroll";
import { LeftArrow, RightArrow } from "./arrows";
import "./hideScrollbar.css";

Modal.setAppElement("#root");
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const LandingPage = () => {
  window.onscroll = function () {
    scrollWatcher();
  };

  function scrollWatcher() {
    // Control background color
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      document.getElementsByTagName("nav")[0].classList.add("nav-scroll");
    } else {
      document.getElementsByTagName("nav")[0].classList.remove("nav-scroll");
    }
  }

  const times = [
    {
      date: "2023-07-06",
      slots: ["09:00", "10:00", "11:00"],
    },
    {
      date: "2023-07-07",
      slots: ["09:00", "10:00", "11:00"],
    },
    {
      date: "2023-07-08",
      slots: ["09:00", "10:00", "11:00"],
    },
    {
      date: "2023-07-09",
      slots: ["09:00", "10:00", "11:00"],
    },
    {
      date: "2023-07-10",
      slots: ["09:00", "10:00", "11:00"],
    },
    {
      date: "2023-07-11",
      slots: ["09:00", "10:00", "11:00"],
    },
    {
      date: "2023-07-12",
      slots: ["09:00", "10:00", "11:00"],
    },
    {
      date: "2023-07-13",
      slots: ["09:00", "10:00", "11:00"],
    },
    {
      date: "2023-07-14",
      slots: ["09:00", "10:00", "11:00"],
    },
    {
      date: "2023-07-15",
      slots: ["09:00", "10:00", "11:00"],
    },
    {
      date: "2023-07-16",
      slots: ["09:00", "10:00", "11:00"],
    },
    {
      date: "2023-07-17",
      slots: ["09:00", "10:00", "11:00"],
    },
    {
      date: "2023-07-18",
      slots: ["09:00", "10:00", "11:00"],
    },
    {
      date: "2023-07-19",
      slots: ["09:00", "10:00", "11:00"],
    },
    {
      date: "2023-07-20",
      slots: ["09:00", "10:00", "11:00"],
    },
  ];

  let col1: string = "";
  let col2: string = "";
  let col3: string = "";
  times.forEach((item) => {
    if (item.slots[0] == "09:00") {
      col1 = item.slots[0];
    }
    if (item.slots[1] == "10:00") {
      col2 = item.slots[1];
    }
    if (item.slots[2] == "11:00") {
      col3 = item.slots[2];
    }
  });

  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const [radio, setRadio] = useState({
    0: false,
    1: false,
    2: false,
  });

  const changeRadio = (event: any, key: any) => {
    let checked = event.target.checked;
    const initialState = { 0: false, 1: false, 2: false };
    setRadio({
      ...initialState,
      [key]: true,
    });
  };

  return (
    <div className="h-full">
      <div className="w-full h-screen bg-gray-100 p-20">
        <img
          src={Refresh}
          alt=""
          width="20"
          className="absolute top-[85px] left-[90px]"
        />
        <button className="w-32 text-black border-2 border-black h-30 font-bold pl-[15px]">
          Start again
        </button>
        <div className="font-bold text-black text-4xl text-center mt-20">
          Let's get your appointment booked in
        </div>
        <div className="mt-[100px] rounded-lg h-30 bg-white border-2 p-10">
          <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
            <ScrollMenu
              Header={<div></div>}
              Footer={<div></div>}
              LeftArrow={LeftArrow}
              RightArrow={RightArrow}
              onWheel={onWheel}
            >
              {times.map((item, index) => (
                <div tabIndex={0} className="w-[100px]">
                  {
                    <div
                      className={
                        index == 0
                          ? "border-2 border-black w-[100px] p-2 pl-3"
                          : "mt-[10px] ml-8 w-[100px]"
                      }
                    >
                      {item.date}
                    </div>
                  }
                </div>
              ))}
            </ScrollMenu>
          </div>
        </div>
        <div className="mt-12 p-10 pr-[200px] pl-[200px] flex justify-between">
          <div className="justify-center flex">
            <div tabIndex={0} className="w-36">
              {
                <div className="border-2 border-black w-36 bg-white text-center h-[30px]">
                  {col1}
                </div>
              }
              <input
                type="radio"
                checked={radio[0]}
                onChange={(e) => changeRadio(e, 0)}
                className="ml-auto mr-auto mt-4 flex"
              />
            </div>
          </div>
          <div>
            <div className="h-[30px] border-2 w-36 text-center bg-white text-black">
              {col2}
            </div>
            <input
              type="radio"
              checked={radio[1]}
              onChange={(e) => changeRadio(e, 1)}
              className="ml-auto mr-auto mt-4 flex"
            />
          </div>
          <div>
            <div className="h-[30px] border-2 w-36 text-center bg-white text-black">
              {col3}
            </div>
            <input
              type="radio"
              checked={radio[2]}
              onChange={(e) => changeRadio(e, 2)}
              className="ml-auto mr-auto mt-4 flex"
            />
          </div>
        </div>
        <div className="items-center justify-center flex">
          <button className="w-[120px] h-10 rounded-lg border-2 text-white bg-black">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
