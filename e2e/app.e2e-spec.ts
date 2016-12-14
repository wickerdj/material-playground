import { MaterialPlaygroundPage } from './app.po';

describe('material-playground App', function() {
  let page: MaterialPlaygroundPage;

  beforeEach(() => {
    page = new MaterialPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
