import GreetingController from 'app/date/controllers/GreetingController';

describe('GreetingController', function () {

  it('imports the class', function () {
    expect(GreetingController).toEqual(jasmine.any(Function));
    expect(GreetingController.name).toEqual('GreetingController');
  });

  describe('.fullName', function () {

    let subject;

    beforeEach(function () {
      subject = new GreetingController();
      subject.firstName = 'Test';
      subject.lastName = 'User';
    });

    it('concats firstName and lastName', function () {
      expect(subject.fullName).toEqual('Test User!');
    });

  });

});