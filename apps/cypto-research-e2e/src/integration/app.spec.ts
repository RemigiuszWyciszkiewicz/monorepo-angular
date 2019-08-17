import { getGreeting } from '../support/app.po';

describe('cypto-research', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to cypto-research!');
  });
});
