import { Link } from "react-router-dom"
function Holder({ title, img ,url}) {
  return (
    <div className='flex justify-center w-[16vw] h-[22vh]'>
      <Link to={url} className='p-8 bg-white mx-10 my-3 rounded-2xl shadow-md flex flex-col items-center'>
        <img 
          src={img} 
          alt="" 
          className='w-[4.5vw] h-[8vh] object-cover rounded-t-md' 
        />
        <p className='mt-2 text-center text-sm font-semibold text-gray-700'>
          {title}
        </p>
      </Link>
    </div>
  )
}

export default Holder
