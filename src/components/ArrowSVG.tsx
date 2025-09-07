import { forwardRef, type ForwardedRef } from "react";

function ArrowSVG(_props: {}, ref: ForwardedRef<SVGSVGElement>) {
  return (
    <svg ref={ref} width="50" height="50">
      <defs>
        <marker
          id="arrow"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <path d="M 0 0 L 10 3.5 L 0 7 Z" fill="black" />
        </marker>
      </defs>
      <line
        x1="25"
        y1="200"
        x2="25"
        y2="0"
        stroke="black"
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />
    </svg>
  );
}

export default forwardRef<SVGSVGElement>(ArrowSVG);
