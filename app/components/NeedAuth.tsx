import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function NeedAuth({ children }: any) {
    const token = cookies().get("authToken");

    try {
        const res = await axios.post("http://localhost:8000/verifyToken", {
            token,
        });

        if (res.status === 200) {
            return children
        }
    } catch (error) {
        redirect("/login")
    }
}

export default NeedAuth