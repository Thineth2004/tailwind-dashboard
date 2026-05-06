export default function Siderbar() {
    return (
        <div className="w-64 h-screen bg-white border-r px-6 py-8 flex flex-col">

            {/* Title */}
            <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-6">
                Menu
            </h2>

            {/* Menu */}
            <div className="flex flex-col gap-2">

                <a 
                    href="#" 
                    className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium"
                >
                    Dashboard
                </a>

                <a 
                    href="#" 
                    className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-black transition"
                >
                    Components
                </a>

                <a 
                    href="#" 
                    className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-black transition"
                >
                    Settings
                </a>

            </div>
            
        </div>
    );
}