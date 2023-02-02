import React, { useEffect, useState } from "react";
import Tool from "../Tool.js/Tool";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://manufacture-old.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      <h1 className="text-4xl text-center font-bold my-10 ">Our Tools</h1>
      <div className="grid lg:grid-cols-3 justify-items-center gap-y-5 w-4/5 mx-auto">
        {[...tools]
          .reverse()
          .slice(0, 6)
          .map((tool) => (
            <Tool key={tool._id} tool={tool}></Tool>
          ))}
      </div>
    </div>
  );
};

export default Tools;
