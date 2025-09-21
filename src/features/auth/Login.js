import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    async function handleLogin() {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        }
        catch (err) {
            setError(err.message);
        }
    }
    async function handleGoogle() {
        try {
            await signInWithPopup(auth, googleProvider);
        }
        catch (err) {
            setError(err.message);
        }
    }
    return (_jsxs("div", { className: "max-w-sm mx-auto mt-20 space-y-4", children: [_jsxs("div", { children: [_jsx(Label, { children: "Email" }), _jsx(Input, { value: email, onChange: e => setEmail(e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, { children: "Password" }), _jsx(Input, { type: "password", value: password, onChange: e => setPassword(e.target.value) })] }), _jsx(Button, { onClick: handleLogin, children: "Login" }), _jsx(Button, { onClick: handleGoogle, variant: "outline", children: "Login with Google" }), error && _jsx("p", { className: "text-red-500 text-sm", children: error })] }));
}
