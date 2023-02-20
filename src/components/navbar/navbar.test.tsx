import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navbar", () => {
    it("Renders correctly when not logged in", () => {
        render(
            <Router>
                <Navbar isLoggedIn={false} userName="Jon" logout={() => {}} />
            </Router>
        );
        expect(screen.getByText("Supply")).toBeInTheDocument();
        expect(screen.getByText("Ally")).toBeInTheDocument();
        expect(screen.queryByText("Track")).not.toBeInTheDocument();
        expect(screen.queryByText("Statistics")).not.toBeInTheDocument();
        expect(
            screen.queryByTestId("loggedInElements")
        ).not.toBeInTheDocument();
    });

    it("Renders navbar components correctly when logged in", () => {
        render(
            <Router>
                <Navbar
                    isLoggedIn={true}
                    userName="testUser"
                    logout={() => {}}
                />
            </Router>
        );
        expect(screen.getByText("Supply")).toBeInTheDocument();
        expect(screen.getByText("Ally")).toBeInTheDocument();
        expect(screen.getByTestId("loggedInElements")).toBeInTheDocument();
        expect(screen.getByTestId("navbarUsername")).toHaveTextContent(
            "testUser"
        );
    });

    it("Render menu icon on smaller screens", () => {
        global.innerWidth = 480;

        render(
            <Router>
                <Navbar
                    isLoggedIn={true}
                    userName="testUser"
                    logout={() => {}}
                />
            </Router>
        );
        expect(screen.getByTestId("menuIcon")).toBeVisible();
    });

    it("Clicking the menu icon on smaller screens should render the menu with the right buttons", () => {
        global.innerWidth = 480;

        render(
            <Router>
                <Navbar
                    isLoggedIn={true}
                    userName="testUser"
                    logout={() => {}}
                />
            </Router>
        );

        fireEvent.click(screen.getByTestId("menuIcon"));
        expect(screen.getByTestId("menu")).toBeVisible();
    });
});

