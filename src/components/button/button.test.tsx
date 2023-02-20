import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./Button";
import { render, screen, fireEvent } from '@testing-library/react';

describe("<Button />", () => {
    it("renders correctly", () => {
        render(
            <Router>
                <Button
                    back={false}
                    text="Test Button"
                    selectStyle="pri"
                    disabled={false}
                />
            </Router>
        );
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it("Should display the correct text for the text prop inputted", () => {
        render(
            <Router>
                <Button
                    back={false}
                    text="Test Button"
                    selectStyle="pri"
                    disabled={false}
                />
            </Router>
        );
        const button = screen.getByRole('button');
        expect(button.textContent).toContain("Test Button");
    });

    it("Button should have the Primary button classes if pri is input for selected style prop", () => {
        render(
            <Router>
                <Button
                    back={false}
                    text="Test Button"
                    selectStyle="pri"
                    disabled={false}
                />
            </Router>
        );
        const button = screen.getByRole('button');
        expect(button).toHaveClass('priButton');
        expect(button).toHaveClass('priButtonText');
        expect(button).toHaveClass('hover:bg-priHoverFocus');
        expect(button).toHaveClass('active:bg-priOnPress');

    });

    it("Button should have the Primary button classes if secondary is input for selected style prop", () => {
        render(
            <Router>
                <Button
                    back={false}
                    text="Test Button"
                    selectStyle="secondary"
                    disabled={false}
                />
            </Router>
        );
        const button = screen.getByRole('button');
        expect(button).toHaveClass('secondaryButton');
        expect(button).toHaveClass('secondaryButtonText');
        expect(button).toHaveClass('hover:bg-secondaryHoverFocus');
        expect(button).toHaveClass('active:bg-secondaryOnPress');

    });

    it("Button should have the disabled class if disabled prop is set to true", () => {
        render(
            <Router>
                <Button
                    back={false}
                    text="Test Button"
                    selectStyle="secondary"
                    disabled={true}
                />
            </Router>
        );
        const button = screen.getByRole('button');
        expect(button).toHaveClass('disabledButton');


    });
});
