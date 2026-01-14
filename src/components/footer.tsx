export function Footer() {
  return (
    <footer className="bg-white border-t-2 border-[#E4EAF2]">
      <div className="max-w-[1320px] mx-auto px-6 py-10">
        <div className="flex flex-col items-center gap-4">
          <p className="text-2xl font-black tracking-wide text-[#2D2D2D]">
            PRO<span className="text-[#E25313]">4</span>ALL
          </p>
          
          <div className="text-center max-w-md">
            <p className="text-sm italic text-[#6B7280] mb-2">
              &ldquo;Convincing customers to buy our software since 1999.&rdquo;
            </p>
            <p className="text-xs text-[#523BE1] font-semibold">
              — The Marketing Team
            </p>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <p className="text-sm text-[#6B7280]">
              Built with <span className="text-[#E25313]">♥</span> by Willem
            </p>
          </div>
          
          <p className="text-xs text-[#B4BBC4]">
            © 2026 Pro4all - Build Better Together
          </p>
        </div>
      </div>
    </footer>
  )
}


