import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Login from "@/features/auth/Login";
import Dashboard from "@/features/dashboard/Dashboard";
import CareerExplorer from "@/features/dashboard/CareerExplorer";
import SkillsAnalyzer from "@/features/dashboard/SkillsAnalyzer";
import ProfileSettings from "@/features/dashboard/ProfileSettings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (!user) return <Login />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/career-explorer" element={<CareerExplorer />} />
        <Route path="/skills-analyzer" element={<SkillsAnalyzer />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
      </Routes>
    </BrowserRouter>
  );
}
