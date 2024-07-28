import {DataTable, Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";

function customerExistenceAssertion(data: string[]) {
  cy.get('[data-cy="item-firstname"]').contains(data[0])
  cy.get('[data-cy="item-lastname"]').contains(data[1])
  cy.get('[data-cy="item-phone-number"]').contains(data[2])
  cy.get('[data-cy="item-date-of-birth"]').contains(data[3])
  cy.get('[data-cy="item-email"]').contains(data[4])
  cy.get('[data-cy="item-bank-account-number"]').contains(data[5])
}

function customerNotExistenceAssertion(data: string[]) {
  cy.get('[data-cy="item-firstname"]').then($elements => {
    cy.wrap($elements).contains(data[0]).should('not.exist');
  });
  cy.get('[data-cy="item-lastname"]').then($elements => {
    cy.wrap($elements).contains(data[1]).should('not.exist');
  });
  cy.get('[data-cy="item-phone-number"]').then($elements => {
    cy.wrap($elements).contains(data[2]).should('not.exist');
  });
  cy.get('[data-cy="item-date-of-birth"]').then($elements => {
    cy.wrap($elements).contains(data[3]).should('not.exist');
  });
  cy.get('[data-cy="item-email"]').then($elements => {
    cy.wrap($elements).contains(data[4]).should('not.exist');
  });
  cy.get('[data-cy="item-bank-account-number"]').then($elements => {
    cy.wrap($elements).contains(data[5]).should('not.exist');
  });
}

function createCustomer(data: string[]) {
  cy.get('[data-cy="add-firstname"]').type(data[0]);
  cy.get('[data-cy="add-lastname"]').type(data[1]);
  cy.get('[data-cy="add-phone-number"]').type(data[2]);
  cy.get('[data-cy="add-date-of-birth"]').type(data[3]);
  cy.get('[data-cy="add-email"]').type(data[4]);
  cy.get('[data-cy="add-bank-account-number"]').type(data[5]);
}

function editCustomer(data: string[]) {
  cy.get('[data-cy="add-firstname"]').clear().type(data[0]);
  cy.get('[data-cy="add-lastname"]').clear().type(data[1]);
  cy.get('[data-cy="add-phone-number"]').clear().type(data[2]);
  cy.get('[data-cy="add-date-of-birth"]').clear().type(data[3]);
  cy.get('[data-cy="add-email"]').clear().type(data[4]);
  cy.get('[data-cy="add-bank-account-number"]').clear().type(data[5]);
}

Given('the user should see {int} customers on the list', (customerCount: number) => {
  cy.visit("/");
  cy.get(".mat-table tbody").find('tr').should('have.length', customerCount);
});

When('the user creates a customer with these data', (table: DataTable) => {
  const tableRow = table.rows()[0];
  cy.contains('Add Customer').click();
  createCustomer(tableRow);
  cy.get('[data-cy="add-submit"]').click();
  cy.get('[data-cy="alert-dismiss"]').click();
});

Then('the user should see a customer with these data on the list', (table: DataTable) => {
  const tableRow = table.rows()[0];
  customerExistenceAssertion(tableRow);
});

When(/^the user edits customer "([^"]*)" with these data$/, (email: string, table: DataTable) => {
  const tableRow = table.rows()[0];
  cy.get('[data-cy="item-email"]').contains(email).parent().get('[data-cy="list-edit"]').click();
  editCustomer(tableRow);
  cy.get('[data-cy="add-submit"]').click();
  cy.get('[data-cy="alert-dismiss"]').click();
});

Then('the user should not see a customer with these data on the list', (table: DataTable) => {
  const tableRow = table.rows()[0];
  customerNotExistenceAssertion(tableRow);
});

When(/^the user deletes customer "([^"]*)"$/, (email: string) => {
  cy.get('[data-cy="item-email"]').contains(email).parent().get('[data-cy="list-delete"]').click();
  cy.get('[data-cy="confirm-yes"]').click();
});
