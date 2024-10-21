import { Link } from "react-router-dom"
function Holder({ title, img ,url}) {
  return (
    <div className='flex justify-center'>
      <Link to={url} className='w-[120px] h-[115px] p-8 px-3 bg-white mx-10 my-3 rounded-2xl shadow-md flex flex-col items-center justify-center'>
        <img 
          src={img} 
          alt="" 
          className='w-[40px] h-[40px] scale-[80%] object-contain rounded-t-md mb-1' 
        />
        <p className='text-center scale-90 text-xs font-semibold text-gray-700 whitespace-nowrap'>
          {title}
        </p>
      </Link>
    </div>
  )
}

export default Holder
