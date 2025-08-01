import AdminNavbar from '../../comp/AdminNavbar';
import Navbar from "../../comp/AboutUsNavbar";
import EditTimeline from "@/admin/comp/EditTimeline";

export default function OurJourney() {
    return (
        <>
            <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium" style={{ height: "200vh" }}>
                <AdminNavbar />
                <main className="w-[100%] pt-2 md:w-full justify-self-center no-scrollbar bg-[#f5f5f5] flex flex-col">
                    <Navbar />

                    <div className="flex justify-center items-center gap-5 mt-3 mb-3 ">
                        <h1 className="text-companyBlue font-bold text-5xl">Preview</h1>
                        <h1 className="text-black font-bold text-5xl">Mode</h1>
                    </div>
                    <EditTimeline />
                </main>
            </div>
        </>
    )
}