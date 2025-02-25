import { Navbar } from "@/components/Navbar/Navbar";
import { Profile } from "@/sections/Profile";

export default function Home() {
  return (
    <div className="w-full h-svh relative">
      <Navbar />
      <Profile />
      <div className="w-full h-svh"></div>
    </div>
  );
}
