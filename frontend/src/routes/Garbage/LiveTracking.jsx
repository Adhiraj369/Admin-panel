import LiveHeader from "../../components/LiveHeader";
import MapContainer from "../../components/maps";
import Truck from '../../assets/Truck.png';

export default function Livetracking() {
  return (
    <>
      <LiveHeader />

      <div className="flex justify-between pb-12">
        <div className="ml-10 scale-95 border-r-2" style={{ width: '65%' }}> {/* Adjust the width if needed */}

          <MapContainer category='garbage'/>
        </div>
        <div style={{ width: '35%' }} className="text-center flex flex-col items-center justify-start">
          <div>Activa Vehicles</div>
          
          <div className="flex justify-between w-full py-3 pl-1 pr-5">
            <div className="flex text-sm">
              <div>Truck No.</div>
              <select className="bg-transparent border-none text-gray-500 focus:outline-none" name="Truck No" id="Truck">
                <option value="UK12HJ2222">UK12HJ2222</option>
                <option value="UK12HJ2322">UK12HJ2322</option>
                <option value="UK12HJ1112">UK12HJ1112</option>
              </select>
            </div>
            <div className="flex text-sm">
            <div>Ward No.</div>
              <select className="bg-transparent border-none text-gray-500 focus:outline-none" name="Ward No" id="Truck">
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-5">
            <div className="flex justify-between gap-16 text-sm">
              <div className="flex items-center gap-3">
                <img src={Truck} alt="" className="h-5 w-5" />
                <div>UK12HJ2222</div>
              </div>
              <div>Ward No. -34</div>
            </div>
            <div className="flex justify-between gap-16 text-sm">
              <div className="flex items-center gap-3">
                <img src={Truck} alt="" className="h-5 w-5"  />
                <div>UK12HJ1112</div>
              </div>
              <div>Ward No. -35</div>
            </div>
          </div>

          <div className="text-sm pl-2">See all</div>
        </div>
      </div>
    </>
  );
}

