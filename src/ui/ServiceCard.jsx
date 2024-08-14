function ServiceCard({ icon, heading, description }) {
  return (
    <div className="shadow-3xl w-full flex-1 rounded-[20px] bg-grey-1 px-10 py-16 shadow-xl  sm:w-[350px] sm:min-w-[350px]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-6 ">
        <img loading="lazy" src={icon} alt={heading} width={24} height={24} />
      </div>
      <h1 className="mt-5 text-3xl font-bold leading-normal text-grey-6 ">
        {heading}
      </h1>
      <p className="mt-3 break-words text-lg leading-normal text-grey-4">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
