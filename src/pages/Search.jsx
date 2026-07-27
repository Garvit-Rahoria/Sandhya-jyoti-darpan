import { Outlet } from "react-router-dom"
import LeftSidebar from "../components/LeftSlidebar"
import RightSide from "../components/RightSide"
import SearchSection from "../components/SearchSection"

function Search() {
    return (
        <>
             <div className="flex bg-[#181818]  min-h-screen">
                  {/* Left Sidebar */}
                  <LeftSidebar />
            
                  {/* Main Content */}
                  <div className="flex-1 p-6 text-white max-[768px]:p-4">
                    <Outlet />
                    <SearchSection/>
                  </div>
            
                  {/* Right Sidebar (Future) */}
                  <div className="w-[360px] border-l  border-gray-700 p-6 text-white max-[991px]:hidden">
                    <RightSide/>
                  </div>
                </div>
        </>
    )
}

export default Search
