import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function Dashboard() {
    const handleLogout = async () => {
        await signOut(auth);
    };
    return (_jsxs("div", { className: "p-8 text-center", children: [_jsx("h1", { className: "text-3xl font-bold mb-4", children: "Welcome, Tech Explorer! \uD83D\uDE80" }), _jsx("p", { className: "mb-6", children: "Your career dashboard is ready. Select an option to continue." }), _jsxs("div", { className: "grid gap-4 max-w-md mx-auto", children: [_jsx(Link, { to: "/career-explorer", children: _jsx(Button, { className: "w-full", children: "Career Explorer" }) }), _jsx(Link, { to: "/skills-analyzer", children: _jsx(Button, { className: "w-full", children: "Skills Analyzer" }) }), _jsx(Link, { to: "/profile-settings", children: _jsx(Button, { className: "w-full", children: "Profile Settings" }) })] }), _jsx("div", { className: "mt-6", children: _jsx(Button, { onClick: handleLogout, className: "bg-gray-600 hover:bg-gray-700", children: "Logout" }) })] }));
}
