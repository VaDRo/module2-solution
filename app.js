(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var items2Buy = this;

  items2Buy.items = ShoppingListCheckOffService.getAllItems();

  items2Buy.buyItem = function (itemIndex) {
    console.log(itemIndex);
    ShoppingListCheckOffService.buyItem(itemIndex);
  }


}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var allItems = [{name: 'Cookies', quantity: 10, bought: 0},
                  {name: 'Milk', quantity: 2, bought: 0},
                  {name: 'Hot-dogs', quantity: 5, bought: 0},
                  ];
  var boughtItems = [];

  service.buyItem = function (index){
      boughtItems.push(allItems.splice(index, 1)[0]);
  }

  service.getAllItems = function () {
    return allItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
