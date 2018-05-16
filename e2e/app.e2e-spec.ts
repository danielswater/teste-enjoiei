import { EnjoeiPage } from './app.po';

describe('enjoei App', () => {
  let page: EnjoeiPage;

  beforeEach(() => {
    page = new EnjoeiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
