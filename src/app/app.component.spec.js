describe('app-root component', function () {
    beforeEach(angular.mock.module('app'));
   
    let element;
    let scope;

    beforeEach(inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();
      element = angular.element('<app-root></app-root>');
      element = $compile(element)(scope);
    }));

    it('should render the root component', function () {
      let app = element.find('.app');

      expect(app.length).toBe(1);      
    });       
});
