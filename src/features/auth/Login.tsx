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
        } catch (err: any) {
            setError(err.message);
        }
    }

    async function handleGoogle() {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err: any) {
            setError(err.message);
        }
    }

    return (
        <div className="max-w-sm mx-auto mt-20 space-y-4">
            <div>
                <Label>Email</Label>
                <Input value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <Label>Password</Label>
                <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <Button onClick={handleLogin}>Login</Button>
            <Button onClick={handleGoogle} variant="outline">Login with Google</Button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}
