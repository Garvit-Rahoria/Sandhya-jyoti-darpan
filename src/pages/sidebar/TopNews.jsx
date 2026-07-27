import { FaPlay, FaCircle, FaLink, FaFacebookF, FaChevronRight } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const trendingTopics = [
  'Parliament - Monsoon Session',
  'Cockroach Party Performance',
  'India vs Pakistan',
  'Budget 2026',
]

const liveNews = [
  {
    id: 1,
    title: 'Discussion on the Examination Amendment Bill fails to begin, opposition protests continue:',
    subtitle: 'insists on debate on student beatings; Speaker urges all parties to reach consensus',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800',
    duration: '1:21',
    updates: [
      { time: '02:32 PM', text: 'NDA parliamentary party meeting tomorrow' },
      { time: '02:29 PM', text: 'Rajya Sabha proceedings adjourned till 3 PM' },
    ],
    tag: 'Country',
  },
  {
    id: 2,
    title: 'Devendra Pradhan arrives at Parliament for the first time since his resignation:',
    subtitle: 'NDA MPs honor him with a shawl and a Mithila turban; Lok Sabha adjourns until 12 noon',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    duration: '1:00',
    updates: [
      { time: '06:10 AM', text: 'Lok Sabha and Rajya Sabha proceedings begin' },
      { time: '05:48 AM', text: 'Dharmendra Pradhan arrives at Parliament House, welcomed by NDA MPs' },
    ],
    tag: 'Country',
  },
]

const featuredNews = [
  {
    id: 1,
    label: 'Monday Mega Story',
    title: "'Police Uncle Wastegun Huinya':",
    subtitle: 'How Gen-G protesters were out of syllabus for the government; why no tactics worked against them',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=300',
    duration: '3:59',
    tag: 'Monday Mega Story',
  },
  {
    id: 2,
    label: 'Exclusive',
    title: 'Supreme Court issues notice to Centre on OBC reservation:',
    subtitle: 'Bench asks government to respond within 4 weeks on local body election quota',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300',
    duration: '2:15',
    tag: 'National',
  },
]

function ShareButtons() {
  return (
    <div className="flex items-center gap-4 text-gray-400">
      <button className="hover:text-blue-500 transition"><FaFacebookF size={14} /></button>
      <button className="hover:text-white transition"><FaXTwitter size={14} /></button>
      <button className="hover:text-gray-200 transition"><FaLink size={14} /></button>
    </div>
  )
}

function TopNews() {
  return (
    <div className="text-white">

      {/* Trending Bar */}
      <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-2 mb-4">
        <span className="text-orange-500 font-semibold text-sm shrink-0">
          Trending
        </span>

        {trendingTopics.map((topic, i) => (
          <button
            key={i}
            className="shrink-0 flex items-center gap-1 border border-gray-600 text-white text-xs px-3 py-1 rounded-full hover:border-gray-400 transition"
          >
            {topic}
            <FaChevronRight size={8} className="text-gray-400" />
          </button>
        ))}
      </div>

      {/* LIVE Cards */}
      {liveNews.map((news) => (
        <div key={news.id} className="mb-1 pb-4 border-b border-gray-700">

          {/* Headline */}
          <p className="text-[15px] font-bold leading-6 mb-3 cursor-pointer">
            <span className="inline-flex items-center gap-1 bg-red-600 text-white text-[11px] font-bold px-2 py-0.5 rounded mr-2 align-middle">
              <FaCircle className="text-[5px] animate-pulse" /> LIVE
            </span>
            <span className="text-green-400">{news.title} </span>
            <span className="text-white">{news.subtitle}</span>
          </p>

          {/* Full Width Video Thumbnail */}
          <div className="relative cursor-pointer group rounded-sm overflow-hidden mb-3">
            <img
              src={news.image}
              alt=""
              className="w-full h-56 object-cover group-hover:brightness-90 transition duration-300"
            />
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-black/60 border-2 border-white/40 flex items-center justify-center group-hover:scale-110 transition">
                <FaPlay className="text-white text-sm ml-0.5" />
              </div>
            </div>
            {/* Duration */}
            <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
              {news.duration}
            </span>
          </div>

          {/* Live Updates */}
          <div className="mb-3">
            <p className="text-white text-sm font-bold mb-1.5">Live  Updates</p>
            <div className="space-y-1">
              {news.updates.map((update, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <FaCircle className="text-orange-500 mt-1.5 shrink-0" size={6} />
                  <p>
                    <span className="text-orange-400 font-semibold">{update.time}: </span>
                    {update.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-1 border border-gray-600 text-white text-xs px-3 py-1 rounded-full hover:border-gray-400 transition">
              {news.tag} <FaChevronRight size={8} />
            </button>
            <ShareButtons />
          </div>
        </div>
      ))}

      {/* Featured Cards — thumbnail right side */}
      {featuredNews.map((news) => (
        <div key={news.id} className="mb-1 pb-4 border-b border-gray-700">

          {/* Text + Thumbnail row */}
          <div className="flex gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold leading-snug cursor-pointer">
                <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded mr-1.5">
                  {news.label}
                </span>
                <span className="text-orange-400">{news.title} </span>
                <span className="text-white">{news.subtitle}</span>
              </p>
            </div>

            {/* Thumbnail */}
            <div className="relative shrink-0 w-28 h-[76px] rounded overflow-hidden cursor-pointer group">
              <img
                src={news.image}
                alt=""
                className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-black/60 flex items-center justify-center">
                  <FaPlay className="text-white text-[9px] ml-0.5" />
                </div>
              </div>
              <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 py-0.5 rounded">
                {news.duration}
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-1 border border-gray-600 text-white text-xs px-3 py-1 rounded-full hover:border-gray-400 transition">
              {news.tag} <FaChevronRight size={8} />
            </button>
            <ShareButtons />
          </div>
        </div>
      ))}

    </div>
  )
}

export default TopNews
