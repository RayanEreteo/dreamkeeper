import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import ServerError from "./ServerError";

interface NeedAuthProps {
    children: ReactNode;
}

async function NeedAuth({ children }: NeedAuthProps) {
    const token = cookies().get("authToken");

    try {
        const res = await axios.post("http://localhost:8000/verifyToken", {
            token,
        });

        if (res.status === 200) {
            return <>{children}</>
        }
    } catch (error: any) {
        if (error.code === "ECONNREFUSED") {
            return <ServerError />
        }
        
        redirect("/login")   
    }
}

export default NeedAuth