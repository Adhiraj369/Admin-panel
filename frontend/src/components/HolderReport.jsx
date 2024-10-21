import { Link } from "react-router-dom";
function HolderReport({ title, img, url }) {
  return (
    <div className="flex justify-center w-[14vw] h-[20vh]">
      <Link
        to={url}
        className="px-1 w-[200px] h-[163px] bg-white mx-10 my-2 rounded-[20px] flex flex-col items-center justify-center"
      >
        <img
          src={img}
          alt=""
          className="w-[40px] h-[40px] scale-[80%] object-contain rounded-t-md mb-1"
        />
        <p className="pt-7 text-center scale-90 text-md font-bold text-gray-700 whitespace-nowrap">
          {title}
        </p>
      </Link>
    </div>
  );
}

export default HolderReport;
