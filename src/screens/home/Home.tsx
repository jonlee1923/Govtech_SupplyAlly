import React from "react";
import logo from "../../assets/Logo.svg";
export default function Home() {
    return (
        <div>
            <section className="font-ibm">
                <div className="text-center py-24 px-6">
                    <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-12 text-allyWordcolour">
                        Track parcels and view statistics with
                        <br />
                        <span className="text-priDefault">Supply</span>
                        <span className="text-allyWordcolour">Ally</span>
                    </h1>
                    <div className="flex justify-center items-center h-full">
                        <img className="items-center" src={logo} alt="" />
                    </div>
                    <div className="mt-16 text-2xl sm:text-4xl font-bold tracking-tight text-allyWordcolour">
                        <div>Get started by navigating to the</div>
                        <div>Track or Statistics tab</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
