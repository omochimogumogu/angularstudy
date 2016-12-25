import { AngularstudyPage } from './app.po';

describe('angularstudy App', function() {
  let page: AngularstudyPage;

  beforeEach(() => {
    page = new AngularstudyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
