import { HlitWebappPage } from './app.po';

describe('hlit-webapp App', function() {
  let page: HlitWebappPage;

  beforeEach(() => {
    page = new HlitWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
