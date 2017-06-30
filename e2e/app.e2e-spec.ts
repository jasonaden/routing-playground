import { RoutingPlaygroundPage } from './app.po';

describe('routing-playground App', () => {
  let page: RoutingPlaygroundPage;

  beforeEach(() => {
    page = new RoutingPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rp works!');
  });
});
