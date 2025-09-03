import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

function Arrow() {
  gsap.registerPlugin(useGSAP);

  const arrow = useRef<HTMLDivElement>(null);
  let [box_x, box_y] = [0,0];
  

  const { contextSafe } = useGSAP();

  const onMove = contextSafe((event: MouseEvent) => {
    if (!arrow.current) return;

    // console.log(rect.bottom);
    // console.log(rect.x, rect.y);
    // console.log(box_x, box_y);

    const deltaX = event.clientX - box_x;
    const deltaY = box_y - event.clientY;

    const angle = 90 - (360 * Math.atan2(deltaY, deltaX)) / (2 * Math.PI);

    // console.log(angle);

    gsap.to(arrow.current, {
      rotation: angle + "_short",
      transformOrigin: "bottom",
    });

    // console.log(event.clientX, event.clientY);
    // 249, 480 is position of box center
  });

  useGSAP(() => {
    if (!arrow.current) return;
    // getting the initial bottom position of the arrow
    const rect = arrow.current.getBoundingClientRect();
    const y = rect.bottom;
    const x = (rect.left + rect.right) / 2;

    [box_x, box_y] = [x, y];
    // adding the window listener
    window.addEventListener("mousemove", onMove);
    // get rid of the window listener when dismounting
    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <div ref={arrow} className="box"></div>;
}

export default Arrow;
