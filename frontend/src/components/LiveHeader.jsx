import React from 'react'
import LiveButton from './LiveButton';

export default function LiveHeader() {
  return (
     <header className="flex mx-[15vw] my-4 justify-around">
          <LiveButton url="/admin/dashboard/garbage">Live-tracking</LiveButton>
          <LiveButton url="/admin/dashboard/garbage/household">House-Hold tracking</LiveButton>
          <LiveButton url="/admin/dashboard/garbage/allReports">All Reports</LiveButton>
        </header>
  )
}
