export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-white border-b shadow-sm">

            {/* Left */}
            <div className="flex items-center gap-10">
                <h1 className="text-xl md:text-2xl font-bold text-blue-600 tracking-tight">
                    UI Mastery
                </h1>

                <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                    <a href="#" className="relative hover:text-black transition">Dashboard</a>
                    <a href="#" className="relative hover:text-black transition">Components</a>
                    <a href="#" className="relative hover:text-black transition">Settings</a>
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2 md:gap-4">

                <input
                    type="text"
                    placeholder="Search..."                        
                    className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />

              <div className="w-10 h-10 bg-gray-300 rounded-full hover:scale-105 hover:shadow-md transition cursor-pointer"></div>
             </div>

        </nav>
    );
}