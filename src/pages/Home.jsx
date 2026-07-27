import LeftSidebar from '../components/LeftSlidebar'
import { Outlet } from 'react-router-dom'
import RightSide from '../components/RightSide'
import Footer from '../components/Footer'



function Home() {
  return (
   <>

   <div className="flex bg-[#181818]  min-h-screen">
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 text-white max-[768px]:p-4">
        <Outlet />
        <Footer className="mt-6 hidden bg-[#1b1b1b] text-white max-[768px]:block" />
      </div>

      {/* Right Sidebar (Future) */}
      <div className="w-[360px] border-l  border-gray-700 p-6 text-white max-[991px]:hidden">
        <RightSide/>
      </div>
    </div>
   </>
  )
}

export default Home
