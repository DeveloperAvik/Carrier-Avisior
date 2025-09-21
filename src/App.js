import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Login from "@/features/auth/Login";
import Dashboard from "@/features/dashboard/Dashboard";
import CareerExplorer from "@/features/dashboard/CareerExplorer";
import SkillsAnalyzer from "@/features/dashboard/SkillsAnalyzer";
import ProfileSettings from "@/features/dashboard/ProfileSettings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);
    if (!user)
        return _jsx(Login, {});
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/career-explorer", element: _jsx(CareerExplorer, {}) }), _jsx(Route, { path: "/skills-analyzer", element: _jsx(SkillsAnalyzer, {}) }), _jsx(Route, { path: "/profile-settings", element: _jsx(ProfileSettings, {}) })] }) }));
}
