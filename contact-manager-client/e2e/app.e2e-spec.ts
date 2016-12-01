import { ContactManagerClientPage } from './app.po';

describe('contact-manager-client App', function() {
  let page: ContactManagerClientPage;

  beforeEach(() => {
    page = new ContactManagerClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
