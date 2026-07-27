import { useState } from "react";
import { Check, Plus, X } from "lucide-react";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logoo from "../assets/logoo.png";
import { Link } from "react-router-dom";

const states = [
  {
    name: "राजस्थान",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=300&h=300&fit=crop",
    selected: true,
  },
  {
    name: "मध्य प्रदेश",
    image: "https://images.unsplash.com/photo-1621354659748-2350c2b9f03a?w=300&h=300&fit=crop",
  },
  {
    name: "छत्तीसगढ़",
    image: "https://images.unsplash.com/photo-1600100397608-f010c9d67fe2?w=300&h=300&fit=crop",
  },
  {
    name: "उत्तरप्रदेश",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300&h=300&fit=crop",
  },
  {
    name: "बिहार",
    image: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=300&h=300&fit=crop",
  },
  {
    name: "झारखंड",
    image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=300&h=300&fit=crop",
  },
  {
    name: "नई दिल्ली",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=300&h=300&fit=crop",
  },
  {
    name: "हरियाणा",
    image: "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=300&h=300&fit=crop",
  },
  {
    name: "पंजाब",
    image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=300&h=300&fit=crop",
  },
  {
    name: "गुजरात",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=300&h=300&fit=crop",
  },
  {
    name: "महाराष्ट्र",
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=300&h=300&fit=crop",
  },
  {
    name: "उत्तराखंड",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=300&h=300&fit=crop",
  },
  {
    name: "हिमाचल प्रदेश",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=300&h=300&fit=crop",
  },
  {
    name: "पश्चिम बंगाल",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=300&h=300&fit=crop",
  },
  {
    name: "ओडिशा",
    image: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=300&h=300&fit=crop",
  },
];

function ChangeCity({ onClose }) {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState(
    states.find((state) => state.selected)?.name || states[0].name
  );

  const openEpaper = () => {
    onClose();
    navigate("/e-paper");
  };

  const openHome = () => {
    onClose();
    navigate("/");
  };

  return (
    <div className="fixed inset-0 z-[80] bg-[#101010] text-white">
      <header className="h-[65px] border-b border-gray-700 bg-black">
        <div className="mx-auto flex h-full max-w-[1700px] items-center justify-between px-4 sm:px-7">
          <button type="button" onClick={openHome} aria-label="Go to home">
            <img
              src={logoo}
              alt="Sandhya Jyoti Darpan"
              className="w-28 object-contain sm:w-32"
            />
          </button>

          <div className="flex items-center gap-3 sm:gap-5">
            <button
              type="button"
              onClick={openEpaper}
              className="flex items-center gap-2 rounded-md bg-orange-500 px-3 py-2 text-sm font-bold text-white transition hover:bg-orange-600 sm:gap-3 sm:px-4 sm:text-[17px]"
            >
             
              <Link to={onClose}>ई-पेपर पढ़ें</Link>
            </button>

            <div className="flex items-center gap-2">
              <FaUserCircle className="text-3xl transition hover:text-orange-500 sm:text-4xl" />
              <FaChevronDown className="text-base transition hover:text-orange-500 sm:text-lg" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex min-h-[calc(100vh-65px)] items-start justify-center overflow-y-auto bg-black/60 px-3 py-5 sm:px-4 sm:py-8">
      <section className="w-full max-w-[500px] overflow-hidden rounded-lg border border-[#343434] bg-[#141616] text-white shadow-2xl">
        <div className="flex items-center justify-between gap-3 border-b border-[#303030] bg-[#242424] px-4 py-4 sm:px-7 sm:py-5">
          <h2 className="text-xl font-extrabold sm:text-2xl">ई-पेपर के लिए राज्य चुनें</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-gray-300 transition hover:bg-[#333] hover:text-white"
            aria-label="Close state selector"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="max-h-[320px] overflow-y-auto px-4 py-5 [scrollbar-color:#a3a3a3_#242424] sm:px-10 sm:py-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 sm:gap-x-12 sm:gap-y-8">
            {states.map((state) => (
              <button
                type="button"
                key={state.name}
                onClick={() => setSelectedState(state.name)}
                className="group flex flex-col items-center text-center"
              >
                <span className="relative">
                  <img
                    src={state.image}
                    alt={state.name}
                    className="h-16 w-16 rounded-full object-cover ring-2 ring-transparent transition group-hover:ring-orange-400 sm:h-20 sm:w-20"
                  />
                  <span
                    className={`absolute -right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#4a4a4a] ${
                      selectedState === state.name ? "bg-orange-500" : "bg-[#15191d]"
                    }`}
                  >
                    {selectedState === state.name ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </span>

                <span
                  className={`mt-3 text-sm font-extrabold sm:mt-4 sm:text-lg ${
                    selectedState === state.name ? "text-orange-500" : "text-gray-200"
                  }`}
                >
                  {state.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-[#303030] bg-[#141616] px-3 py-3">
          <button
            type="button"
            onClick={onClose}
            className="h-11 w-full rounded-lg bg-orange-500 text-lg font-extrabold text-white transition hover:bg-orange-600 sm:text-xl"
          >
            आगे बढ़ें
          </button>
        </div>
      </section>
      </main>
    </div>
  );
}

export default ChangeCity;
