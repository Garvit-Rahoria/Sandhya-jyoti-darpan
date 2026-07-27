import { HelpCircle, LogOut, Mail, Settings } from "lucide-react";

function Profile() {
  return (
    <div className="absolute right-0 top-[54px] z-[120] w-60 max-w-[calc(100vw-24px)] overflow-hidden rounded-sm border border-[#2e2e2e] bg-[#171919] text-gray-100 shadow-2xl">
      <button type="button" className="flex h-[41px] w-full items-center justify-between border-b border-[#303030] px-4 text-left transition hover:bg-[#202020]">
        <span className="text-sm font-bold">Account Settings</span>
        <Settings className="h-5 w-5 text-gray-400" />
      </button>

      <button
        type="button"
        className="flex h-[41px] w-full items-center justify-between border-b border-[#303030] px-4 text-left transition hover:bg-[#202020]"
        aria-pressed="true"
      >
        <span className="text-sm font-bold">Dark Mode</span>
        <span className="flex h-4 w-10 items-center justify-end rounded-full bg-orange-500/35 p-0.5">
          <span className="h-5 w-5 rounded-full bg-orange-500" />
        </span>
      </button>

      <button type="button" className="flex h-[41px] w-full items-center justify-between border-b border-[#303030] px-4 text-left transition hover:bg-[#202020]">
        <span className="text-sm font-bold">FAQs</span>
        <HelpCircle className="h-5 w-5 text-gray-400" />
      </button>

      <button type="button" className="flex h-[41px] w-full items-center justify-between border-b border-[#303030] px-4 text-left transition hover:bg-[#202020]">
        <span className="text-sm font-bold">Give Feedback</span>
        <Mail className="h-5 w-5 text-gray-400" />
      </button>

      <button type="button" className="flex h-[41px] w-full items-center justify-between border-b border-[#303030] px-4 text-left transition hover:bg-[#202020]">
        <span className="text-sm font-bold">Log out</span>
        <LogOut className="h-5 w-5 text-gray-400" />
      </button>

      {/* <button type="button" className="flex h-[52px] w-full items-center justify-between px-4 text-left transition hover:bg-[#202020]">
        <span className="text-sm font-bold">Visit Sandhya-jyoti-darpan.com</span>
        <span className="text-sm font-bold text-white">Dainik Bhaskar</span>
      </button> */}
    </div>
  );
}

export default Profile;
