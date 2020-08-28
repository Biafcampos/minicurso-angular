import { MinicursoAngularPage } from './app.po';

describe('minicurso-angular App', function() {
  let page: MinicursoAngularPage;

  beforeEach(() => {
    page = new MinicursoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
