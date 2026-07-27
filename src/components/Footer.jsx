import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Footer({ className = "", showAppPromo = true }) {
  return (
    <footer className={`rounded-lg border-gray-700 text-gray-400 ${className}`}>
      <div className="p-3 max-[768px]:p-5">
        {showAppPromo && (
          <div className="grid gap-6 min-[769px]:grid-cols-1 min-[992px]:grid-cols-1 max-[768px]:grid-cols-2 max-[520px]:grid-cols-1">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-white">
                Download App from
              </h3>

              <div className="flex flex-wrap items-center gap-3">
                <a href="#" className="block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-11 rounded-lg transition hover:scale-105"
                  />
                </a>

                <a href="#" className="block">
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="App Store"
                    className="h-11 rounded-lg transition hover:scale-105"
                  />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-white">
                Follow us on
              </h3>

              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 transition hover:bg-blue-600"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-lg text-white" />
                </a>

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 transition hover:bg-black"
                  aria-label="X"
                >
                  <BsTwitterX className="text-lg text-white" />
                </a>

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 transition hover:bg-pink-600"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-lg text-white" />
                </a>

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 transition hover:bg-red-600"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-lg text-white" />
                </a>
              </div>
            </div>
          </div>
        )}

        <div className={`${showAppPromo ? "mt-6" : ""} flex flex-wrap items-center gap-x-3 gap-y-2 text-xs leading-5`}>
          <a href="#" className="transition hover:text-white">About Us</a>
          <a href="#" className="transition hover:text-white">Our Team</a>
          <a href="#" className="transition hover:text-white">Advertise</a>
          <a href="#" className="transition hover:text-white">Contact Us</a>
          <a href="#" className="transition hover:text-white">Privacy Policy</a>
          <a href="#" className="transition hover:text-white">Terms & Conditions</a>
          <a href="#" className="transition hover:text-white">Disclaimer</a>
        </div>

        <div className="mt-6">
          <h3 className="mb-3 text-sm font-semibold text-white">
            Popular Categories
          </h3>

          <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-3">
            <a href="#" className="rounded-md bg-[#242424] px-3 py-2 font-medium transition hover:bg-[#2d2d2d] hover:text-white">Politics</a>
            <a href="#" className="rounded-md bg-[#242424] px-3 py-2 font-medium transition hover:bg-[#2d2d2d] hover:text-white">Business</a>
            <a href="#" className="rounded-md bg-[#242424] px-3 py-2 font-medium transition hover:bg-[#2d2d2d] hover:text-white">Sports</a>
            <a href="#" className="rounded-md bg-[#242424] px-3 py-2 font-medium transition hover:bg-[#2d2d2d] hover:text-white">Entertainment</a>
            <a href="#" className="rounded-md bg-[#242424] px-3 py-2 font-medium transition hover:bg-[#2d2d2d] hover:text-white">Technology</a>
            <a href="#" className="rounded-md bg-[#242424] px-3 py-2 font-medium transition hover:bg-[#2d2d2d] hover:text-white">Education</a>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4">
          <p className="text-xs leading-5">
            &copy; 2026 <span className="font-semibold text-white">Sandhya Jyoti Darpan</span>. All Rights Reserved.
          </p>

          <p className="mt-2 text-xs leading-5">
            Delivering trusted news with accuracy, integrity, and responsibility.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
