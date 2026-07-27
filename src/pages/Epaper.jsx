import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Newspaper,
  Share2,
  ArrowLeft,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import masthead from "../assets/logo.png";
import banner from "../assets/banner.png";

const editions = [
  {
    id: "jaipur",
    title: "Jaipur",
    date: "20-07-2026",
    tag: "Morning Edition",
    accent: "from-orange-500 to-amber-300",
  },
  {
    id: "jaipur-city",
    title: "Jaipur City Darpan",
    date: "20-07-2026",
    tag: "City Edition",
    accent: "from-sky-500 to-cyan-300",
  },
  {
    id: "rajasthan",
    title: "Rajasthan Darpan",
    date: "20-07-2026",
    tag: "State Edition",
    accent: "from-emerald-500 to-lime-300",
  },
  {
    id: "classified",
    title: "Classified",
    date: "19-07-2026",
    tag: "Jobs & Notice",
    accent: "from-rose-500 to-red-300",
  },
];

// Sandhya Jyoti Darpan — Magazine section
// Different features from the editions above: agriculture, spirituality,
// women's issues, youth, matrimonial, kids, business, sports.
const magazines = [
  {
    id: "mahila-darpan",
    title: "महिला दर्पण",
    subtitle: "Mahila Darpan",
    date: "22-07-2026",
    tag: "Women's Edition",
    accent: "from-pink-500 to-rose-300",
    headline: "रसोई से लेकर करियर तक — संतुलन की कहानियाँ",
  },
  {
    id: "krishi-jyoti",
    title: "कृषि ज्योति",
    subtitle: "Krishi Jyoti",
    date: "21-07-2026",
    tag: "Farmer's Edition",
    accent: "from-lime-500 to-green-300",
    headline: "राजस्थान में जल संरक्षण की नई तकनीकें",
  },
  {
    id: "dharm-darshan",
    title: "धर्म दर्शन",
    subtitle: "Dharm Darshan",
    date: "21-07-2026",
    tag: "Spiritual Edition",
    accent: "from-amber-500 to-yellow-300",
    headline: "सावन मास: शिव आराधना का महत्व",
  },
  {
    id: "yuva-manch",
    title: "युवा मंच",
    subtitle: "Yuva Manch",
    date: "20-07-2026",
    tag: "Youth Edition",
    accent: "from-sky-500 to-cyan-300",
    headline: "सरकारी नौकरी: नई भर्तियों की पूरी सूची",
  },
  {
    id: "vivah-sandesh",
    title: "विवाह संदेश",
    subtitle: "Vivah Sandesh",
    date: "20-07-2026",
    tag: "Matrimonial",
    accent: "from-fuchsia-500 to-purple-300",
    headline: "जीवनसाथी की तलाश अब हुई आसान",
  },
  {
    id: "bal-sansar",
    title: "बाल संसार",
    subtitle: "Bal Sansar",
    date: "19-07-2026",
    tag: "Kids Edition",
    accent: "from-orange-500 to-amber-300",
    headline: "कहानी, पहेली और रंग भरो — इस हफ्ते का अंक",
  },
  {
    id: "vyapaar-darpan",
    title: "व्यापार दर्पण",
    subtitle: "Vyapaar Darpan",
    date: "19-07-2026",
    tag: "Business Edition",
    accent: "from-teal-500 to-emerald-300",
    headline: "जयपुर के छोटे उद्योगों की बड़ी छलांग",
  },
  {
    id: "khel-jyoti",
    title: "खेल ज्योति",
    subtitle: "Khel Jyoti",
    date: "18-07-2026",
    tag: "Sports Edition",
    accent: "from-red-500 to-orange-300",
    headline: "राजस्थान क्रिकेट अकादमी के उभरते सितारे",
  },
];

function EpaperCover({ edition }) {
  return (
    <div className="relative h-[200px] overflow-hidden rounded-md bg-white max-[520px]:h-[145px] sm:h-[190px] lg:h-[200px]">
      <div className={`absolute inset-x-0 top-0 h-11 bg-gradient-to-r ${edition.accent} max-[520px]:h-8`} />
      <img src={masthead} alt="" className="absolute left-5 top-4 h-12 w-[78%] object-contain max-[520px]:left-2 max-[520px]:top-2 max-[520px]:h-7 max-[520px]:w-[70%]" />
      <div className="absolute right-4 top-4 rounded bg-white/90 px-2 py-1 text-xs font-bold text-[#222] max-[520px]:right-2 max-[520px]:top-2 max-[520px]:px-1.5 max-[520px]:py-0.5 max-[520px]:text-[9px]">
        {edition.date}
      </div>
      <div className="absolute inset-x-5 top-20 grid grid-cols-[1.2fr_0.8fr] gap-4 text-[#171717] max-[520px]:inset-x-2 max-[520px]:top-12 max-[520px]:grid-cols-1 max-[520px]:gap-0">
        <div>
          <div className="mb-3 h-6 w-11/12 rounded bg-[#151515] max-[520px]:mb-2 max-[520px]:h-4" />
          <div className="mb-2 h-3 w-full rounded bg-gray-300 max-[520px]:h-2" />
          <div className="mb-2 h-3 w-5/6 rounded bg-gray-300 max-[520px]:h-2" />
          <div className="mb-2 h-3 w-full rounded bg-gray-300 max-[520px]:hidden" />
          <div className="mt-5 h-16 rounded bg-gray-200 max-[520px]:mt-2 max-[520px]:h-7" />
        </div>
        <div className="rounded bg-gray-100 p-2 max-[520px]:hidden">
          <img src={banner} alt="" className="h-24 w-full rounded object-cover" />
          <div className="mt-3 h-4 rounded bg-orange-500" />
          <div className="mt-2 h-3 rounded bg-gray-300" />
          <div className="mt-2 h-3 w-2/3 rounded bg-gray-300" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-[#f5f5f5] px-5 py-2 max-[520px]:px-2 max-[520px]:py-1.5">
        <p className="text-lg font-extrabold text-[#151515] max-[520px]:truncate max-[520px]:text-xs">{edition.title}</p>
        <p className="text-sm font-semibold text-orange-600 max-[520px]:truncate max-[520px]:text-[10px]">{edition.tag}</p>
      </div>
    </div>
  );
}

function MagazineCover({ magazine }) {
  return (
    <div className="relative h-[220px] overflow-hidden rounded-md bg-white max-[520px]:h-[150px] sm:h-[200px] lg:h-[220px]">
      <div className={`absolute inset-x-0 top-0 h-11 bg-gradient-to-r ${magazine.accent} max-[520px]:h-8`} />
      <div className="absolute left-4 top-3 flex items-center gap-2 max-[520px]:left-2 max-[520px]:top-2">
        <span className="text-lg font-black tracking-tight text-white drop-shadow max-[520px]:max-w-[92px] max-[520px]:truncate max-[520px]:text-xs">
          {magazine.title}
        </span>
      </div>
      <div className="absolute right-3 top-3 rounded bg-white/90 px-2 py-1 text-xs font-bold text-[#222] max-[520px]:right-2 max-[520px]:top-2 max-[520px]:px-1.5 max-[520px]:py-0.5 max-[520px]:text-[9px]">
        {magazine.date}
      </div>

      <div className="absolute inset-x-4 top-16 text-[#171717] max-[520px]:inset-x-2 max-[520px]:top-11">
        <p className="mb-2 text-sm font-bold leading-snug text-[#151515] max-[520px]:line-clamp-2 max-[520px]:text-[10px]">
          {magazine.headline}
        </p>
        <div className="mb-1.5 h-2.5 w-full rounded bg-gray-200 max-[520px]:h-2" />
        <div className="mb-1.5 h-2.5 w-5/6 rounded bg-gray-200 max-[520px]:h-2" />
        <div className="mb-1.5 h-2.5 w-full rounded bg-gray-200 max-[520px]:hidden" />
        <div className="mt-3 grid grid-cols-3 gap-2 max-[520px]:mt-2 max-[520px]:gap-1">
          <div className="h-12 rounded bg-gray-100 max-[520px]:h-6" />
          <div className="h-12 rounded bg-gray-100 max-[520px]:h-6" />
          <div className="h-12 rounded bg-gray-100 max-[520px]:h-6" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-[#f5f5f5] px-4 py-2 max-[520px]:px-2 max-[520px]:py-1.5">
        <p className="text-sm font-semibold text-orange-600 max-[520px]:truncate max-[520px]:text-[10px]">{magazine.tag}</p>
        <p className="text-xs text-gray-500 max-[520px]:truncate max-[520px]:text-[9px]">{magazine.subtitle}</p>
      </div>
    </div>
  );
}

function EditionCard({ edition }) {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/e-paper/${edition.id}`)}
      className="cursor-pointer rounded-md border border-[#33383d] bg-[#181a1c] p-4 transition hover:-translate-y-1 hover:border-orange-500 hover:shadow-2xl hover:shadow-black/30 max-[520px]:p-2"
    >
      <h2 className="mb-4 text-xl font-semibold text-white max-[520px]:mb-2 max-[520px]:truncate max-[520px]:text-sm">{edition.title}</h2>
      <EpaperCover edition={edition} />
      <div className="mt-4 flex items-center justify-between max-[520px]:mt-2">
        <p className="text-md font-medium text-gray-400 max-[520px]:text-xs">{edition.date}</p>
        <button
          onClick={(event) => event.stopPropagation()}
          className="rounded-full p-2 text-gray-400 transition hover:bg-[#252525] hover:text-orange-400 max-[520px]:p-1"
          aria-label={`Share ${edition.title}`}
        >
          <Share2 className="h-5 w-5 max-[520px]:h-4 max-[520px]:w-4" />
        </button>
      </div>
    </article>
  );
}

function MagazineCard({ magazine }) {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/magazine/${magazine.id}`)}
      className="cursor-pointer rounded-md border border-[#33383d] bg-[#181a1c] p-4 transition hover:-translate-y-1 hover:border-orange-500 hover:shadow-2xl hover:shadow-black/30 max-[520px]:p-2"
    >
      <h2 className="mb-4 text-xl font-semibold text-white max-[520px]:mb-2 max-[520px]:truncate max-[520px]:text-sm">{magazine.title}</h2>
      <MagazineCover magazine={magazine} />
      <div className="mt-4 flex items-center justify-between max-[520px]:mt-2">
        <p className="text-md font-medium text-gray-400 max-[520px]:text-xs">{magazine.date}</p>
        <button
          onClick={(event) => event.stopPropagation()}
          className="rounded-full p-2 text-gray-400 transition hover:bg-[#252525] hover:text-orange-400 max-[520px]:p-1"
          aria-label={`Share ${magazine.title}`}
        >
          <Share2 className="h-5 w-5 max-[520px]:h-4 max-[520px]:w-4" />
        </button>
      </div>
    </article>
  );
}

function EpaperList() {
  return (
    <>
      <section className="bg-[#3a2814] px-6 py-5 text-center text-white max-[520px]:px-3 max-[520px]:py-4">
        {/* <Info className="mx-auto mb-2 h-9 w-9 fill-orange-400 text-orange-400" /> */}
        <p className="text-lg font-semibold max-[520px]:text-sm">
          Listen <span className="text-orange-400">●</span> You've been reading the free e-paper for 7 days now.
          Become a Premium Member to continue reading daily.
        </p>
        <button className="mt-3 rounded-md bg-orange-500 px-4 py-2 text-lg font-bold text-white transition hover:bg-orange-600 max-[520px]:text-sm">
          Get a premium membership today
        </button>
      </section>

      <main className="min-h-[calc(100vh-84px)] bg-[#121416] px-16 py-12 text-white max-[991px]:px-8 max-[520px]:px-3 max-[520px]:py-6">
        <h1 className="mb-6 text-3xl font-semibold max-[520px]:mb-4 max-[520px]:text-xl">My Favourite City</h1>
        <div className="grid grid-cols-2 gap-7 max-[520px]:grid-cols-2 max-[520px]:gap-3 lg:grid-cols-3 2xl:grid-cols-4">
          {editions.map((edition) => (
            <EditionCard key={edition.id} edition={edition} />
          ))}
        </div>

        <h1 id="magazine-section" className="mb-6 mt-14 scroll-mt-24 text-3xl font-semibold max-[520px]:mb-4 max-[520px]:mt-8 max-[520px]:text-xl">Magazine</h1>
        <div className="grid grid-cols-2 gap-7 max-[520px]:grid-cols-2 max-[520px]:gap-3 lg:grid-cols-3 2xl:grid-cols-4">
          {magazines.map((magazine) => (
            <MagazineCard key={magazine.id} magazine={magazine} />
          ))}
        </div>
      </main>
    </>
  );
}

function EpaperReader({ edition }) {
  return (
    <main className="min-h-[calc(100vh-84px)] bg-[#121416] px-8 py-8 text-white max-[768px]:px-4 max-[520px]:px-3 max-[520px]:py-5">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-6 flex items-center justify-between gap-3">
          <Link to="/e-paper" className="flex items-center gap-2 text-lg font-bold text-gray-200 hover:text-orange-400 max-[520px]:text-sm">
            <ArrowLeft className="h-5 w-5" />
            Back to editions
          </Link>
          <div className="flex items-center gap-3 max-[520px]:gap-2">
            <button className="rounded-md border border-[#34383d] p-3 text-gray-200 hover:border-orange-500 hover:text-orange-400 max-[520px]:p-2">
              <ZoomOut className="h-5 w-5 max-[520px]:h-4 max-[520px]:w-4" />
            </button>
            <button className="rounded-md border border-[#34383d] p-3 text-gray-200 hover:border-orange-500 hover:text-orange-400 max-[520px]:p-2">
              <ZoomIn className="h-5 w-5 max-[520px]:h-4 max-[520px]:w-4" />
            </button>
          </div>
        </div>

        <section className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="rounded-md border border-[#33383d] bg-[#181a1c] p-6 max-[520px]:p-3">
            <EpaperCover edition={edition} />
            <div className="mt-6 space-y-4 rounded-md bg-white p-6 text-[#181818] max-[520px]:mt-3 max-[520px]:space-y-3 max-[520px]:p-3">
              <h1 className="text-4xl font-extrabold max-[520px]:text-2xl">{edition.title}</h1>
              <p className="text-lg font-semibold text-gray-600 max-[520px]:text-sm">{edition.date} | {edition.tag}</p>
              <div className="grid gap-4 md:grid-cols-3 max-[520px]:gap-2">
                <div className="h-44 rounded bg-gray-200 max-[520px]:h-24" />
                <div className="h-44 rounded bg-gray-100 max-[520px]:h-24" />
                <div className="h-44 rounded bg-gray-200 max-[520px]:h-24" />
              </div>
              <div className="h-5 w-full rounded bg-gray-300" />
              <div className="h-5 w-11/12 rounded bg-gray-300" />
              <div className="h-5 w-10/12 rounded bg-gray-300" />
            </div>
          </div>

          <aside className="rounded-md border border-[#33383d] bg-[#181a1c] p-6 max-[520px]:p-3">
            <div className="mb-5 flex items-center gap-3">
              <Newspaper className="h-7 w-7 text-orange-400" />
              <h2 className="text-2xl font-bold max-[520px]:text-xl">More editions</h2>
            </div>
            <div className="space-y-3">
              {editions.map((item) => (
                <Link
                  key={item.id}
                  to={`/e-paper/${item.id}`}
                  className={`block rounded-md border px-4 py-3 transition ${
                    item.id === edition.id
                      ? "border-orange-500 bg-orange-500 text-white"
                      : "border-[#33383d] text-gray-300 hover:border-orange-500 hover:text-white"
                  }`}
                >
                  <span className="block text-lg font-bold">{item.title}</span>
                  <span className="text-sm">{item.date}</span>
                </Link>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

function MagazineReader({ magazine }) {
  return (
    <main className="min-h-[calc(100vh-84px)] bg-[#121416] px-8 py-8 text-white max-[768px]:px-4 max-[520px]:px-3 max-[520px]:py-5">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-6 flex items-center justify-between gap-3">
          <Link to="/e-paper" className="flex items-center gap-2 text-lg font-bold text-gray-200 hover:text-orange-400 max-[520px]:text-sm">
            <ArrowLeft className="h-5 w-5" />
            Back to editions
          </Link>
          <div className="flex items-center gap-3 max-[520px]:gap-2">
            <button className="rounded-md border border-[#34383d] p-3 text-gray-200 hover:border-orange-500 hover:text-orange-400 max-[520px]:p-2">
              <ZoomOut className="h-5 w-5 max-[520px]:h-4 max-[520px]:w-4" />
            </button>
            <button className="rounded-md border border-[#34383d] p-3 text-gray-200 hover:border-orange-500 hover:text-orange-400 max-[520px]:p-2">
              <ZoomIn className="h-5 w-5 max-[520px]:h-4 max-[520px]:w-4" />
            </button>
          </div>
        </div>

        <section className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="rounded-md border border-[#33383d] bg-[#181a1c] p-6 max-[520px]:p-3">
            <MagazineCover magazine={magazine} />
            <div className="mt-6 space-y-4 rounded-md bg-white p-6 text-[#181818] max-[520px]:mt-3 max-[520px]:space-y-3 max-[520px]:p-3">
              <h1 className="text-4xl font-extrabold max-[520px]:text-2xl">{magazine.title}</h1>
              <p className="text-lg font-semibold text-gray-600 max-[520px]:text-sm">{magazine.date} | {magazine.tag}</p>
              <div className="grid gap-4 md:grid-cols-3 max-[520px]:gap-2">
                <div className="h-44 rounded bg-gray-200 max-[520px]:h-24" />
                <div className="h-44 rounded bg-gray-100 max-[520px]:h-24" />
                <div className="h-44 rounded bg-gray-200 max-[520px]:h-24" />
              </div>
              <div className="h-5 w-full rounded bg-gray-300" />
              <div className="h-5 w-11/12 rounded bg-gray-300" />
              <div className="h-5 w-10/12 rounded bg-gray-300" />
            </div>
          </div>

          <aside className="rounded-md border border-[#33383d] bg-[#181a1c] p-6 max-[520px]:p-3">
            <div className="mb-5 flex items-center gap-3">
              <Newspaper className="h-7 w-7 text-orange-400" />
              <h2 className="text-2xl font-bold max-[520px]:text-xl">More magazines</h2>
            </div>
            <div className="space-y-3">
              {magazines.map((item) => (
                <Link
                  key={item.id}
                  to={`/magazine/${item.id}`}
                  className={`block rounded-md border px-4 py-3 transition ${
                    item.id === magazine.id
                      ? "border-orange-500 bg-orange-500 text-white"
                      : "border-[#33383d] text-gray-300 hover:border-orange-500 hover:text-white"
                  }`}
                >
                  <span className="block text-lg font-bold">{item.title}</span>
                  <span className="text-sm">{item.date}</span>
                </Link>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

function Epaper() {
  const { editionId, magazineId } = useParams();
  const edition = editionId ? editions.find((item) => item.id === editionId) : null;
  const magazine = magazineId ? magazines.find((item) => item.id === magazineId) : null;

  return (
    <div className="min-h-screen bg-[#121416]">
      {edition ? (
        <EpaperReader edition={edition} />
      ) : magazine ? (
        <MagazineReader magazine={magazine} />
      ) : (
        <EpaperList />
      )}
    </div>
  );
}

export default Epaper;
