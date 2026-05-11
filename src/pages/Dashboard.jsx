import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Dashboard() {
    return (
        <div className="space-y-8">

            {/* Title */}
            <div className="flex items-center justify-between">

                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Dashboard
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Welcome back, Admin
                    </p>
                </div>

                <Button variant="primary">
                    Generate Report
                </Button>

            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <Card>

                    <div>
                        <h2 className="text-sm text-gray-500">Total Users</h2>
                        <p className="text-3xl font-bold mt-1 text-gray-800">1,245</p>
                    </div>
                    
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg">
                        👤
                    </div>

                </Card>

                <Card>

                    <div>
                        <h2 className="text-sm text-gray-500">Revenue</h2>
                        <p className="text-3xl font-bold mt-1 text-gray-800">Rs.50,000</p>
                    </div>

                    <div className="w-12 h-12 bg-green-100 text-green-600 flex items-center justify-center rounded-lg">
                        💰
                    </div>
                    
                </Card>

                <Card>

                    <div>
                        <h2 className="text-sm text-gray-500">Bookings</h2>
                        <p className="text-3xl font-bold mt-1 text-gray-800">320</p>
                    </div>
                    
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded-lg">
                        📦
                    </div>

                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Large Section */}
                <div className="overflow-auto lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="text-lg font-semibold mb-4">Analytics</h2>
                    <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                        Chart Placeholder
                    </div>
                </div>

                {/* Side Section */}
                <div className="hidden md:block bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
                    
                    <ul className="space-y-4">

                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">
                                User registered
                            </span>
                        </li>

                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">
                                New booking created
                            </span>
                        </li>

                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">
                                Payment recieved
                            </span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}