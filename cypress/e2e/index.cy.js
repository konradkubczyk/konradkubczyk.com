it('has correct titles', () => {
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

    page.get('h1').should('have.css', 'font-family', 'Outfit, sans-serif');
    page.get('p').should('have.css', 'font-family', '"Red Hat Text", sans-serif');
});

it('has a /licenses page', () => {
    const page = cy.visit('/licenses');

    page.get('title').should('have.text', 'Licenses - Konrad Kubczyk');
    page.get('h1').should('have.text', 'Licenses');
});

it('has licenses listed', () => {
    const page = cy.visit('/licenses');

    page.get('details').should('have.length.gte', 1);
    page.get('details').should('contain.text', 'konradkubczyk.com');
});

it('has a custom 404 page', () => {

    // Visit url that does not exist expecting 404
    const page = cy.visit('/this-page-does-not-exist', {failOnStatusCode: false});

    page.get('title').should('have.text', 'Not found - Konrad Kubczyk');
    page.get('h1').should('have.text', 'Not found');
    page.get('a').filter('[href="/"]').should('have.length.gte', 1);
});

it('has a public key file present', () => {
    cy.request('/publickey.asc')
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.headers['content-type']).to.include('application/pgp-keys');
            const firstLine = response.body.substring(0, response.body.indexOf('\n'));
            expect(firstLine).to.eq('-----BEGIN PGP PUBLIC KEY BLOCK-----');
        });
});
