
declare namespace Cypress {
    interface Chainable<Subject> {
      login(username: string): Chainable<any>
    }

    interface Chainable<Subject> {
        trackingScreen(username: string): Chainable<any>
    }
    interface Chainable<Subject> {
        trackParcel(username:string, trackingId: string): Chainable<any>
    }

    interface Chainable<Subject> {
        statisticsScreen(username:string): Chainable<any>
    }
}

Cypress.Commands.add('login', (username) => {
    cy.visit("/");
    cy.get('[data-cy="dynamicInput"]').type(username);
    cy.get('[data-cy="dynamicBtn"]').click()
})

Cypress.Commands.add('trackingScreen', (username) => {
    cy.login(username)
    cy.get('[data-cy="TrackNavBtn"]').click()
})

Cypress.Commands.add('trackParcel', (username, trackingId) => {
    cy.trackingScreen(username)
    cy.get('[data-cy="dynamicInput"]').type(trackingId);
    cy.get('[data-cy="dynamicBtn"]').click();
    cy.get('#markAsTrackedCheckbox').click();
    cy.contains('Submit').click();
})

Cypress.Commands.add('statisticsScreen', (username) => {
    cy.login(username)
    cy.get('[data-cy="StatisticsNavBtn').click();
})


