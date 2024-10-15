import { Link } from "react-router-dom"
function SchemeHolder({ title, url}) {
  return (
    <div className='flex justify-center  w-[16vw] h-[22vh]'>
      <Link to={url} className='p-8 bg-white mx-10 my-3 rounded-2xl shadow-md flex flex-col items-center'>
        
        <div className='m-[2.5vh] text-center text-sm font-semibold text-gray-700'>
          {title}
        </div>
      </Link>
    </div>
  )
}

export default SchemeHolder
