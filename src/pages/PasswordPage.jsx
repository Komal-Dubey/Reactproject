import { useState } from "react";
import { Eye } from "lucide-react";

const PasswordPage = () => {
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    console.log(showPassword)
    return (
        <div className="w-full h-screen flex justify-center items-center ">
            <div className="relative">
                <input
                    type={showPassword ? "text": "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-2 border-gray-300 rounded-xl px-3 py-2"
                />
                <button className="absolute top-3 right-3" onClick={()=>setShowPassword(!showPassword)}><Eye /></button>
            </div>
        </div>
    ) 
}
export default PasswordPage;