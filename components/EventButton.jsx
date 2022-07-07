import React from "react";
import { createPopper } from "@popperjs/core";
import { useRouter } from 'next/router'

const Dropdown = ({ color }) => {
  const router = useRouter()
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-inherit")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="">
        <div className="">
          <div className="">
            <button
              className={
                "ease-linear transition-all duration-150 " +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              {color === "white" ? "Event" : color + " Dropdown"}
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg"
              }
              style={{ minWidth: "12rem" }}
            >
              <p
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent cursor-pointer" +
                  (color === "white" ? " text-black" : "text-black")
                }
                onClick={()=> {e => e.preventDefault()
                  router.push('/about')
                }
              
              }
              >
               Upcoming
              </p>
              <p
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent cursor-pointer" +
                  (color === "white" ? " text-slate-700" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                Closed
              </p>
              <p
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent cursor-pointer" +
                  (color === "white" ? " text-slate-700" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                Coming soon
              </p>
              <div className="h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25" />
              <p
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-slate-700" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                Recent Events
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function EventButton() {
  return (
    <>
      <Dropdown color="white" />
    </>
  );
}