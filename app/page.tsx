
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
       
        <Link href="/resume/create"  >
      <Button>
        Get Started
        </Button>
        </Link>

    </div>
  );
}
