import { HiStar } from 'react-icons/hi2';

function ReviewCard({ imgURL, customerName, rating, feedback }) {
  return (
    <div className="flex flex-col  items-center justify-center">
      <img
        alt={customerName}
        src={imgURL}
        className="h-32 w-32 rounded-full object-cover"
      />
      <p className="mt-6 max-w-sm text-center text-grey-4">{feedback}</p>
      <div className="mt-3 flex items-center gap-2.5">
        <div className=" text-yellow-500">
          <HiStar />
        </div>
        <p className="text-xl leading-normal text-grey-6">({rating})</p>
      </div>
      <h2 className="mt-1 text-center text-3xl font-bold text-grey-6">
        {customerName}
      </h2>
    </div>
  );
}

export default ReviewCard;
