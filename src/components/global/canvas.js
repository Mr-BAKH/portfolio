import React, { useRef, useEffect } from "react";

function Circle(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    console.log(context)

    // Set canvas width and height
    canvas.width = props.wid;
    canvas.height = props.wid;

    // Draw the circle
    context.beginPath();
    context.arc(props.wid/2, props.wid/2, props.wid/2-props.widline , 0, props.d*Math.PI/180);
    context.lineWidth = props.widline;
    context.strokeStyle = props.color;
    context.imageSmoothingQuality = 'high'
    context.stroke();

  },[props]);

  return <canvas ref={canvasRef} />;
}

export default Circle;