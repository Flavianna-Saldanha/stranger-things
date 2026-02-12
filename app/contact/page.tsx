"use client";

import { useRevealer } from "@/src/hooks/useRevealer";

const Studio = () => {
	useRevealer();

  return (
    <>
			<div className="revealer fixed inset-0 bg-black origin-top z-999" />
      <div className="w-full h-full py-60 px-4 flex gap-4 bg-var(--bg)">
        <div className="flex-1">
          <h2>Contact Us</h2>
        </div>
        <div className="flex-2 flex flex-col gap-8">
          <div>
            <h2>Contact Us</h2>
            <h2>Contact Us</h2>
          </div>

          <div>
            <h2>Contact Us</h2>
            <h2>Contact Us</h2>
          </div>

          <div className="absolute bottom-6 flex gap-4">
            <p>Contact Us</p>
            <p>Contact Us</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studio;
