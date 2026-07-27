import VideoCard from "../components/VideoCard"

function Videos() {
  return (
    <div className="min-h-screen bg-[#181818] px-3 py-6 max-[360px]:px-2 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {Array.from({ length: 12 }).map((_, index) => (
          <VideoCard key={index} />
        ))}
      </div>
    </div>
  )
}

export default Videos
