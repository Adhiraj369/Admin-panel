import LiveHeader from "../../components/LiveHeader";
import MapContainer from "../../components/maps";

export default function Livetracking() {
  return (
    <>
      <LiveHeader />

      <div className="flex justify-between m-6">
        <div style={{ width: '70%' }}> {/* Adjust the width if needed */}

          <MapContainer category='garbage'/>
        </div>
        <div style={{ width: '25%' }}>
          vehicles
        </div>
      </div>
    </>
  );
}

