var chai = require('chai');
chai.use(require('chai-as-promised'));
chai.use(require('chai-truthy'));
var expect = chai.expect;

var EP268Steps = function () {

    var Page = require("../pages/EP268_page.js");

    this.World = function MyWorld(){
        this.page = new Page();    
    }

    //---------------------------------- Scenario 1 ----------------------------------//
    this.Given('I go to topics-to-teach', function (callback) {
        this.page.get();
        callback();
    });

    //---------------------------------- Scenario 2 ----------------------------------//
    this.Given('The button $name in the left down corner of the page', function (name, callback) {
        expect(this.page.getButtonName().getText()).to.eventually.equal(name);
        callback();
    });

    this.When('I click on the button Agregar Tema the dialog $name appears', function (name, callback) {
        expect(this.page.clickAddDetail().getText()).to.eventually.equal(name);
        callback();
    });

    this.Then('Description field should be hidden',function(callback){
        expect(this.page.getDescription()).to.equal("1");
        callback();
    });

    this.Then('Name filed should be visible',function(callback){
        expect(this.page.getName().getAttribute('ng-reflect-placeholder')).to.eventually.equal("Nombre");
        callback();
    });

    this.Then('Expertise field should be visible',function(callback){
        expect(this.page.getExpertise().getAttribute('placeholder')).to.eventually.equal("Experiencia");
        callback();
    });

    this.Then('The button Agregar is disabled if at least one field is empty',function(callback){
        expect(!this.page.isAddDisabled().getAttribute('ng-reflect-disabled')).to.be.falsy();
        callback();
    });



    //---------------------------------- Scenario 3 ----------------------------------//
    this.Then('I fill the name field with the topic $name',function(name, callback){
        expect(this.page.fillName(name)).to.eventually.equal("Java");
        callback();
    });

    this.Then('I select in the expertise field ★★ as the expertise', function (callback) {
        expect(this.page.setExpertise()).to.eventually.equal("1");
        callback();
    });

    this.Then('I click on Agregar',function(callback){
        expect(this.page.clickAddDialogButton().getText()).to.eventually.equal("Agregar");
        callback();
    });

    this.Then('I see an error banner under the name field',function(callback){
        expect(this.page.getErrorBanner().getText()).to.eventually.equal("El Detalle ya existe");
        callback();
    });
};

module.exports = EP268Steps;
