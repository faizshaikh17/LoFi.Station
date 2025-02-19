import React from "react";
import { Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="flex justify-end z-[15] hover:cursor-[url(/assets/cursors/pointer.png),_pointer] px-8 py-4 text-[#00adb5] hover:text-[#00d5e0] transition-colors h-[3rem] right-0 bottom-0 absolute">
            <p className="text-right  flex items-center gap-2 text-sm">© Designed with <img src={`/assets/pixel-heart.png`} alt="love" width={19} height={19} /> by Faiz Shaikh.</p>
        </footer>
    );
}
export default Footer;