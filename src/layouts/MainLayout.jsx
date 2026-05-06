import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

export default function MainLayout({ children }) {
    return (
        <div className="flex h-screen bg-gray-100">

            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="p-6 flex-1 overflow-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}