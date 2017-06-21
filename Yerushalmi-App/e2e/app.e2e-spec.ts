import { YerushalmiAppPage } from './app.po';

describe("yerushalmi-app App", () => {
  let page: YerushalmiAppPage;

  beforeEach(() => {
    page = new YerushalmiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
