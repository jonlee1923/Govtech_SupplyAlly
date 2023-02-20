import "./footer.css";

export default function Footer() {
        return (
        <div data-cy="footer" className={`footer flex-col bottom-0 h-40 sm:h-1/3 ${window.location.pathname === "/statistics"? "invisible sm:visible":""}`} >
            <div className="flex my-4 sm:my-8 mx-4">
                <p className="text-white text-2xl font-bold font-ibm">SupplyAlly</p>
            </div>
            <hr className="border-t-2 border-white-300" />
            <div className="flex items-center flex-wrap mx-4 my-4 sm:mb-12 text-white text-xs font-family-ibm">
                <p className="w-full sm:w-auto mr-4 mb-1 ">Version 1.0.0</p>
                <p className="w-full sm:w-auto mr-4 mb-1 ">
                    Last updated 20 Dec 2021
                </p>
                <p className="w-full sm:w-auto mr-4 sm:mb-1">
                    © 2022 Government of Singapore.
                </p>
            </div>
        </div>
    );
}
