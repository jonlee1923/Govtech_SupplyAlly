import type { DateTimeFormatOptions } from "intl";

describe("supply company parcel tracking app: Login screen", () => {
    it("Logging in with a non-empty username should direct to the home page", () => {
        cy.visit("/");
        cy.get('[data-cy="dynamicInput"]').type("jonathan lee");
        cy.get('[data-cy="dynamicInput"]').should("have.value", "jonathan lee");
        cy.get('[data-cy="dynamicBtn"]').click();
    });

    it("Logging in with an empty username field should display an error message", () => {
        cy.visit("/");
        cy.get('[data-cy="dynamicBtn"]').click();
        cy.get('[data-cy="errorMsg"]').should(
            "contain",
            "Please fill out the username field"
        );
    });

    it("Should display the correct username in the navbar", () => {
        cy.login("jonlee1923");
        cy.get('[data-cy="navbarUsername"]').should("contain", "jonlee1923");
    });

    it("Should logout to the login screen", () => {
        cy.login("jonlee1923");
        cy.get('[data-cy="logoutBtn"]').click();
        cy.get('[data-cy="dynamicBtn"]').should('contain', 'Login')
    })
});

describe("supply company parcel tracking app: Tracking screen", () => {
    it("Should navigate to the Parcel tracking screen", () => {
        cy.login("jon");
        cy.get('[data-cy="TrackNavBtn"]').click();
        cy.url().should("include", "/track");
    });

    it("Should navigate to the parcel details screen", () => {
        cy.trackingScreen("jon");
        cy.get('[data-cy="dynamicInput"]').type("9876543210X");
        cy.get('[data-cy="dynamicInput"]').should("have.value", "9876543210X");
        cy.get('[data-cy="dynamicBtn"]').click();
        cy.url().should("include", "/parcel");
    });

    it("Should display an error messaage if the Tracking ID field is left empty", () => {
        cy.trackingScreen("Jon");
        cy.get('[data-cy="dynamicBtn"]').click();
        cy.get('[data-cy="errorMsg"]').should(
            "contain",
            "Please fill out the Tracking ID field"
        );
    });

    it("Should display an error message if the Tracking Id entered has a incorrect length", () => {
        cy.trackingScreen("Jon");
        cy.get('[data-cy="dynamicInput"]').type("12345");
        cy.get('[data-cy="dynamicBtn"]').click();
        cy.get('[data-cy="errorMsg"]').should(
            "contain",
            "Please input a valid Tracking ID field (11 Characters)"
        );
        cy.get('[data-cy="dynamicInput"]').type("1234567891011");
        cy.get('[data-cy="dynamicBtn"]').click();
        cy.get('[data-cy="errorMsg"]').should(
            "contain",
            "Please input a valid Tracking ID field (11 Characters)"
        );
    });

    it("The parcel should be marked as tracked if the Mark as checked checkbox is checked", () => {
        cy.trackingScreen("jon");
        cy.get('[data-cy="dynamicInput"]').type("9876543210X");
        cy.get('[data-cy="dynamicInput"]').should("have.value", "9876543210X");
        cy.get('[data-cy="dynamicBtn"]').click();
        cy.url().should("include", "/parcel");
        cy.contains("Mark as tracked.")
            .parent()
            .find("input[type=checkbox]")
            .check();
        cy.contains("Submit").should("have.class", "priButton");
    });

    it("The submit button should be disabled if the Mark as checked checkbox is not checked", () => {
        cy.trackingScreen("jon");
        cy.get('[data-cy="dynamicInput"]').type("9876543210X");
        cy.get('[data-cy="dynamicInput"]').should("have.value", "9876543210X");
        cy.get('[data-cy="dynamicBtn"]').click();
        cy.url().should("include", "/parcel");
        cy.contains("Submit").should("have.class", "disabledButton");
    });
});

describe("supply company parcel tracking app: Statistics screen", () => {
    it("Should navigate to the statistics screen from the home page", () => {
        cy.login("kengTat");
        cy.get('[data-cy="StatisticsNavBtn"]').click();
        cy.url().should("include", "/statistics");
    });

    it("A parcel tracked from the parcel details tracking screen should have its Tracking ID updated and displayed in the statistics screen", () => {
        cy.trackParcel("lkt1998", "9876543210X");
        cy.get('[data-cy="StatisticsNavBtn"]').click();
        cy.get('[data-cy="statisticRow trackingId"]').should(
            "contain",
            "9876543210X"
        );
    });

    it("A parcel tracked from the parcel details tracking screen should have its Tracking ID updated and displayed in the statistics screen for the correct date and time", () => {
        const dateOptions: DateTimeFormatOptions = {
            day: "numeric",
            month: "short",
            year: "numeric",
        };
        const timeOptions: DateTimeFormatOptions = {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        };
        const now = new Date();
        cy.clock(now);
        cy.trackParcel("lkt1998", "9876543210X");
        cy.get('[data-cy="StatisticsNavBtn').click();
        cy.get('[data-cy="statisticRow trackingId"]').should(
            "contain",
            "9876543210X"
        );
        cy.get('[data-cy="datePicker"]').should(
            "contain",
            now.toLocaleDateString("en-GB", dateOptions)
        );
        cy.get('[data-cy="statisticRow date"]').should(
            "contain",
            now.toLocaleDateString("en-GB", dateOptions)
        );
        cy.get('[data-cy="statisticRow time"]').should(
            "contain",
            now.toLocaleTimeString("en-US", timeOptions)
        );
    });

    it("After a parcel is tracked from the parcel details tracking screen, the last tracked time should be updated in the statistics screen", () => {
        const timeOptions: DateTimeFormatOptions = {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        };
        const now = new Date();
        cy.clock(now);
        cy.trackParcel("lkt1998", "9876543210X");
        cy.get('[data-cy="StatisticsNavBtn').click();

        cy.get('[data-cy="lastTrackedTime"]').should(
            "contain",
            now.toLocaleTimeString("en-US", timeOptions)
        );
    });

    it("Clicking the left and right arrow buttons should cycle the date back and forth correctly", () => {
        const dateOptions: DateTimeFormatOptions = {
            day: "numeric",
            month: "short",
            year: "numeric",
        };
        const now = new Date();
        cy.clock(now);
        cy.trackParcel("lkt1998", "9876543210X");
        cy.get('[data-cy="StatisticsNavBtn').click();

        cy.get('[data-cy="leftArrow"]').click();
        const minusDate = new Date();
        minusDate.setDate(now.getDate() - 1);
        cy.get('[data-cy="datePicker"]').should("contain", minusDate.toLocaleDateString("en-GB", dateOptions))


        cy.get('[data-cy="rightArrow"]').click();
        cy.get('[data-cy="datePicker"]').should("contain", now.toLocaleDateString("en-GB", dateOptions))
    })
});

describe("supply company parcel tracking app: Back buttons", () => {
    it("Back button at Parcel details screen should navigate back to the Tracking ID screen", () => {
        cy.trackingScreen('jon')
        cy.get('[data-cy="dynamicInput"]').type("9876543210X");
        cy.contains('Check').click();
        cy.contains('Back').click()
        cy.url().should('include', '/track')
    });

    it("Back button at Statistics screen should navigate back to the home screen", () => {
        cy.statisticsScreen('jon')
        cy.contains('Back').click();
        cy.url().should('include', '/')
    });
    
});
