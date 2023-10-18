it('titles are correct', () => {
    const page = cy.visit('/');

    page.get('title').should('have.text', 'Konrad Kubczyk');
    page.get('h1').should('have.text', 'Konrad Kubczyk');
});

it('has a correct project', () => {
    const page = cy.visit('/');

    page.get('.project').should('contain.text', 'Kiwi');
});

it('has a correct link to source code', () => {
    const page = cy.visit('/');

    page.get('a')
        .filter('[href="https://gitlab.com/konradkubczyk/com-konradkubczyk"]')
        .should('have.length.gte', 1);
});

it('does not contain any email address', () => {
    const page = cy.visit('/');

    page.get('body').invoke('html').should('not.match', /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
});
