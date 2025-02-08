
import React from "react";
import { Github } from "lucide-react";


export function Footer() {
    return (
        <footer className="bg-background px-6 py-4  bottom-0 left-0">
            <div className="flex justify-end items-end gap-2">
                <p className="text-right text-[#73e7e7] flex gap-2 text-sm">© Designed with <img src="src/assets/pixel-heart.png" alt="" width={20} height={20} /> by Faiz Shaikh</p>
            </div>
        </footer>
    );
}

export default Footer;
