import React from "react";
import { Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="flex justify-end px-8 py-4 h-[3rem] w-full bottom-0 absolute">
            <p className="text-right text-[#73e7e7] flex items-center gap-2 text-sm">© Designed with <img src={`/assets/pixel-heart.png`} alt="love" width={19} height={19} /> by Faiz Shaikh.</p>
        </footer>
    );
}
export default Footer;