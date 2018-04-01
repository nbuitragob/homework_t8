var Page = function() {

  this.get = function() {
    browser.get('https://praxis-homework-frontend.herokuapp.com/');
  };

  this.getButtonName = function() {
    return element(by.xpath("/html/body/app-root/app-topic/div/div/div[3]/button"));
  };

  this.getErrorBanner = function() {
     browser.sleep(1000);
     let tag = element(by.xpath("/html/body/div/div[2]/div/mat-dialog-container/app-add-dialog/form/div/p")); 
     return tag;
      
  };

  this.setExpertise = function() {
    let tag = element(by.xpath("/html/body/div/div/div/mat-dialog-container/app-add-dialog/form/div/mat-form-field[2]/div/div/div/mat-select"));
    tag.click();
    browser.driver.sleep(300);
    element(by.css('.mat-option[ng-reflect-value="1"]')).click();
    browser.driver.sleep(500);

    return tag.getAttribute('ng-reflect-value');
  };

  this.fillName = function(value) {
    let tag = element(by.xpath("/html/body/div/div[2]/div/mat-dialog-container/app-add-dialog/form/div/mat-form-field[1]/div/div/div/input"));
    tag.sendKeys(value);

    browser.driver.sleep(500);
    return tag.getAttribute('ng-reflect-model');
  };

  this.isAddDisabled = function() {
    let tag = element(by.xpath("/html/body/div/div/div/mat-dialog-container/app-add-dialog/form/div/mat-form-field[1]/div/div/div/input"));
    tag.sendKeys("C++");
    let tag1 = element(by.xpath("/html/body/div/div[2]/div/mat-dialog-container/app-add-dialog/form/div/div/button"));
    element(by.xpath("/html/body/div/div/div/mat-dialog-container/app-add-dialog/form/div/mat-form-field[2]/div/div/div/mat-select"))
        .click();
    element(by.css('.mat-option[ng-reflect-value="1"]')).click();
    browser.driver.sleep(100);
    tag.sendKeys('\b');
    browser.driver.sleep(100);
    tag.sendKeys('\b');
    browser.driver.sleep(100);
    tag.sendKeys('\b');
    element(by.xpath("/html/body/div/div[2]/div/mat-dialog-container/app-add-dialog/form/div/div/button[2]")).click();
    return tag1;
    
  };

  this.getName = function(){
    return element(by.xpath("/html/body/div/div[2]/div/mat-dialog-container/app-add-dialog/form/div/mat-form-field[1]/div/div/div/input"));
  }

  this.getExpertise = function(){
    return element(by.xpath("/html/body/div/div/div/mat-dialog-container/app-add-dialog/form/div/mat-form-field[2]/div/div/div/mat-select"));
  }

  this.getDescription = function() {
    try{
        browser.driver.sleep(500);
        let tag = element(by.id('description')).then(function(){
                            console.log("success");
                         }, function(err){
                            throw err;
                         });
    } catch(err) {
        return "1";
    }
  }

  this.clickAddDetail = function() {
    element(by.xpath("/html/body/app-root/app-topic/div/div/div[3]/button")).click();
    browser.driver.sleep(400);
    return element(by.xpath('/html/body/div/div[2]/div/mat-dialog-container/app-add-dialog/form/div/h2'));
  }

  this.clickAddDialogButton = function() {
    let tag1 = element(by.xpath("/html/body/div/div[2]/div/mat-dialog-container/app-add-dialog/form/div/div/button"));
    tag1.click();
    browser.driver.sleep(400);
    return tag1;
  }
};

module.exports = Page;

