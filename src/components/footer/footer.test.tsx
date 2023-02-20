import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
    it("should have elements stacked on top of each other", () => {
        global.innerWidth = 480;
        render(<Footer />);
        const firstElement = screen.getByText("Version 1.0.0");
        const secondElement = screen.getByText("Last updated 20 Dec 2021");
        const thirdElement = screen.getByText(
            "© 2022 Government of Singapore."
        );

        const firstElementMarginBottom = parseInt(
            getComputedStyle(firstElement).marginBottom
        );
        const secondElementMarginTop = parseInt(
            getComputedStyle(secondElement).marginTop
        );
        const secondElementMarginBottom = parseInt(
            getComputedStyle(secondElement).marginBottom
        );
        const thirdElementMarginTop = parseInt(
            getComputedStyle(thirdElement).marginTop
        );

        expect(firstElementMarginBottom).toEqual(secondElementMarginTop);
        expect(secondElementMarginBottom).toEqual(thirdElementMarginTop);
    });


});
