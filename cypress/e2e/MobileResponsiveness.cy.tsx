// iphone12pro, samsungS8, ipad mini
const sizes = [
    [390, 844],
    [360, 740],
];

describe("Testing mobile responsiveness of navbar", () => {
    sizes.forEach((size) => {
        it(`should display correctly on ${size}`, () => {
            cy.login("jon");
            cy.viewport(size[0], size[1]);
            cy.get('[data-cy="menuIcon"]').click();
            cy.get('[data-cy="menu"]').should("be.visible");
        });


        it(`should navigate to the tracking screen correctly`, () => {
            cy.trackingScreen("jon");
            cy.viewport(size[0], size[1]);
            cy.get('[data-cy="menuIcon"]').click();
            cy.get('[data-cy="menuTrackBtn"]').click();
            cy.url().should('contain', '/track')
        });

        it(`should navigate to the statistics screen correctly`, () => {
            cy.trackingScreen("jon");
            cy.viewport(size[0], size[1]);
            cy.get('[data-cy="menuIcon"]').click();
            cy.get('[data-cy="menuStatisticsBtn"]').click();
            cy.url().should('contain', '/statistics')
        });

        it(`should logout to the login screen correctly`, () => {
            cy.trackingScreen("jon");
            cy.viewport(size[0], size[1]);
            cy.get('[data-cy="menuIcon"]').click();
            cy.get('[data-cy="menuLogoutBtn"]').click();
            cy.url().should('contain', '/')
        });
    });

    
});

describe("Testing mobile responsiveness of footer in statistics screen", () => {
    sizes.forEach((size) => {
        it(`should display correctly on ${size}`, () => {
            cy.login("jon");
            cy.visit("/statistics")
            cy.viewport(size[0], size[1]);
            cy.get('[data-cy="footer"]').should('have.class', "invisible")
        });


    });

    
});

