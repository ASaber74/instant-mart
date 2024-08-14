import React from 'react';

const UnderConstruction = () => {
  return (
    <div className="mx-auto my-24 flex justify-center items-center gap-12">
      <div className="flex flex-col gap-6 font-light">
        <h1 className="text-9xl ">Oops!</h1>
        <h2 className="mt-8 text-center text-5xl">Under construction</h2>
        <p className="text-center text-3xl">Stay tuned</p>
      </div>
      <img
        src="icons/under-construction.svg"
        alt="Under Construction"
        className="w-[800px]"
      />
    </div>
  );
};

export default UnderConstruction;
