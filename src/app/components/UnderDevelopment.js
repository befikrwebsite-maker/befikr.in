export default function UnderDevelopment() {
    return (
      <div className="flex flex-col justify-start p-9 min-h-screen bg-[#F3F3F3] text-[#009DC8]">
        <div className="bg-[#F3F3F3] p-6 rounded-xl shadow-lg">
          <img src="/logo.png" alt="Logo" className=" max-w-[200px]" />
          <div>
            <h1 className="block text-4xl md:text-6xl font-extrabold text-[#F5A623] mb-4">Under Development 🚧</h1>
            <p className="text-lg md:text-2xl text-slate-">We're working hard to bring you something amazing. Stay tuned!</p>
          </div>
        </div>
      </div>
    );
  }