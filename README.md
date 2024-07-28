# Customer BDD Sample 

Customer data structure:
```
Customer {
	Firstname
	Lastname
	DateOfBirth
	PhoneNumber
	Email
	BankAccountNumber
}
```
## Practices and patterns:

- [TDD](https://angular.io/guide/testing) [Wiki](https://en.wikipedia.org/wiki/Test-driven_development)
- [DDD](https://en.wikipedia.org/wiki/Domain-driven_design)
- [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development)
- Gherkin Scenario via [Cucumber](https://cucumber.io/)
- E2E tests by using [Cypress](https://www.cypress.io/)

### Descriptions

- Validate the `PhoneNumber` to be a valid *mobile* number only by using [Google LibPhoneNumber](https://github.com/google/libphonenumber).

- Browser local storage is created to store the list of customers.

- Customers are unique in the database: By `Firstname`, `Lastname` and `DateOfBirth`.

- Email is unique in the local storage or memory array
