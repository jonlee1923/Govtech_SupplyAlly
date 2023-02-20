import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ParcelDetailsScreen from "./ParcelDetailsScreen";

describe("TrackParcelScreen", () => {
    test("checkbox should toggle on click", () => {
        const submitTracked = jest.fn();
        render(
            <Router>
                <ParcelDetailsScreen
                    parcelDetails={[]}
                    trackingId=""
                    submitTracked={submitTracked}
                />
            </Router>
        );
        const checkbox = screen.getByTestId("checkbox");
        expect(checkbox).not.toBeChecked();
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();

    });
});
