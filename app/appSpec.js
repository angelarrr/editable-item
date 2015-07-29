describe('makeEditable', function(){

	var scope,
		element,
		compiled,
		html;

	beforeEach(module("myApp"));
	beforeEach(module("editable.html"));
	beforeEach(inject(function($rootScope, $compile){

		html = "";
		html += "<div make-editable>";
		html += "<p>text here</p>";
		html += "</div>";

		scope = $rootScope.$new();
		compiled = $compile(html);
		element = compiled(scope);
		scope.$digest();

	}));

	it('should render edit container', function(){
		expect(element.find('p').text()).toContain('text');
		expect(element.find('button').attr('ng-click')).toBeTruthy();
	});
});