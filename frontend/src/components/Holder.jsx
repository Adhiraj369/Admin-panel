import { Link } from "react-router-dom";
function Holder({ title, img, url }) {
  return (
    <div className="flex justify-center w-[14vw] h-[20vh]">
      <Link
        to={url}
        className="p-8 px-3 w-[140px] h-[120px] bg-white mx-10 my-3 rounded-2xl shadow-md flex flex-col items-center justify-center"
      >
        <img
          src={img}
          alt=""
          className="w-[60px] h-[60px] scale-[80%] object-contain rounded-t-md mb-1"
        />
        <p className="text-center scale-90 text-sm font-semibold text-gray-700 whitespace-nowrap">
          {title}
        </p>
      </Link>
    </div>
  );
}

export default Holder;
