it('titles are correct', () => {
    const page = cy.visit('/');

    page.get('title').should('have.text', 'Konrad Kubczyk');
    page.get('h1').should('have.text', 'Konrad Kubczyk');
});

it('has a correct project card', () => {
    const page = cy.visit('/');

    page.get('.project-card').should('contain.text', 'Kiwi');
});

it('has a correct link to source code', () => {
    const page = cy.visit('/');

    page.get('a')
        .filter('[href="https://gitlab.com/konradkubczyk/konradkubczyk.com"]')
        .should('have.length.gte', 1);
});

it('does not contain any email address', () => {
    const page = cy.visit('/');

    page.get('body').invoke('html').should('not.match', /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
});

it('has a custom font applied', () => {
    const page = cy.visit('/');

    // Check if H1 has an IBM Plex Mono font applied
    page.get('h1').should('have.css', 'font-family', '"IBM Plex Mono", monospace');
});
