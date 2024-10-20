import { Link } from "react-router-dom"
function Holder({ title, img ,url}) {
  return (
    <div className='flex justify-center w-[14vw] h-[20vh]'>
      <Link to={url} className='p-8 px-3 bg-white mx-10 my-3 rounded-2xl shadow-md flex flex-col items-center justify-center'>
        <img 
          src={img} 
          alt="" 
          className='w-[4.5vw] h-[8vh] scale-[80%] object-contain rounded-t-md mb-1' 
        />
        <p className='text-center scale-90 text-sm font-semibold text-gray-700 whitespace-nowrap'>
          {title}
        </p>
      </Link>
    </div>
  )
}

export default Holder
