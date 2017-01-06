import { JdohPage } from './app.po';

describe('jdoh App', function() {
  let page: JdohPage;

  beforeEach(() => {
    page = new JdohPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
