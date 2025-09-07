import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import ArrowSVG from "./ArrowSVG";

function Arrow({mouseX, mouseY}: {mouseX: number, mouseY: number}) {
  gsap.registerPlugin(useGSAP);

  const arrow = useRef<SVGSVGElement>(null);
  const box_x = useRef(0)
  const box_y = useRef(0)
  // let [box_x, box_y] = [0, 0];

  const { contextSafe } = useGSAP();

  // calls onMove whenever mouseX or mouseY changes
  useEffect(() => onMove, [mouseX, mouseY]);


  // This function determines how much to rotate the arrow by on a mouse move
  const onMove = contextSafe(() => {
    if (!arrow.current) return;

    // console.log(rect.bottom);
    // console.log(rect.x, rect.y);
    // console.log(box_x, box_y);

    const deltaX = mouseX - box_x.current;
    const deltaY = box_y.current - mouseY;

    const angle = 90 - (360 * Math.atan2(deltaY, deltaX)) / (2 * Math.PI);

    // console.log(angle);

    gsap.to(arrow.current, {
      rotation: angle + "_short",
      transformOrigin: "bottom",
    });

    // console.log(event.clientX, event.clientY);
    // 249, 480 is position of box center
  });

  // This function just finds the position of each arrow's base
  useGSAP(() => {
    if (!arrow.current) return;
    // getting the initial bottom position of the arrow
    const rect = arrow.current.getBoundingClientRect();
    const y = rect.bottom;
    const x = (rect.left + rect.right) / 2;

    // [box_x, box_y] = [x, y];
    box_x.current = x;
    box_y.current = y;

    // // adding the window listener
    // window.addEventListener("mousemove", onMove);
    // // get rid of the window listener when dismounting
    // return () => {
    //   window.removeEventListener("mousemove", onMove);
    // };
  }, []);

  // return <div ref={arrow} className="box"></div>;
  return <ArrowSVG ref={arrow} />;
}

export default Arrow;
