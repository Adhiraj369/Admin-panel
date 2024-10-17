import { Link } from "react-router-dom";

function SchemeHolder({ title, url }) {
  return (
    <div className='flex justify-center w-[16vw] h-[22vh] my-2'>
      <Link
        to={url}
        className='p-8 bg-white mx-10  rounded-2xl shadow-md flex flex-col items-center justify-center'
        style={{ height: '75%', width: '90%', textDecoration: 'none' }}
      >
        <div className='text-center text-sm font-semibold text-gray-700 overflow-hidden text-ellipsis whitespace-nowrap w-full max-w-[150px]'>
          {title}
        </div>
      </Link>
    </div>
  );
}

export default SchemeHolder;
