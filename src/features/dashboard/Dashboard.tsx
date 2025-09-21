import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const handleLogout = async () => {
        await signOut(auth);
    };

    return (
        <div className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Welcome, Tech Explorer! 🚀</h1>
            <p className="mb-6">Your career dashboard is ready. Select an option to continue.</p>

            <div className="grid gap-4 max-w-md mx-auto">
                <Link to="/career-explorer">
                    <Button className="w-full">Career Explorer</Button>
                </Link>
                <Link to="/skills-analyzer">
                    <Button className="w-full">Skills Analyzer</Button>
                </Link>
                <Link to="/profile-settings">
                    <Button className="w-full">Profile Settings</Button>
                </Link>
            </div>

            <div className="mt-6">
                <Button onClick={handleLogout} className="bg-gray-600 hover:bg-gray-700">
                    Logout
                </Button>
            </div>
        </div>
    );
}
