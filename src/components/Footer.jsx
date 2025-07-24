import React from "react";
import logo from '../assets/logobir.png';

export default function Example() {
    return (
        <footer className="w-full bg-gradient-to-b from-[#09001a] to-[#8264b9] text-white">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <img alt="" className="h-11"
                        src="logobir.png" />
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    RafRaf, okuma alışkanlıklarını dijital ortamda organize etmeni sağlayan modern bir kütüphane asistanıdır. Bilgiye erişimi kolaylaştırmak için tasarlandı.
                </p>
            </div>
            <div className="border-t border-[#3B1A7A]">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="https://rafraf.com"></a> ©2025. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
    );
};
