/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Session.setDefault("selectedItem", Items.findOne({sku: 'A'}));
console.log(Session.get("selectedItem"));

Template.Home.events({
  "change #itemselector": function(evt) {
    console.log(Session.get("selectedItem"));
    var newValue = $(evt.target).val();
    var oldValue = Session.get("selectedItem");
    if (newValue != oldValue) {
      //console.log(Session.get("selectedItem"));
    }
    Session.set("selectedItem", newValue);
    console.log(Session.get("selectedItem"));
  },
  "click #addBtn": function() {
//     console.log("Add " + Session.get("selectedItem") + " added to basket");
    var selectedItem = Items.findOne({sku: Session.get("selectedItem")});
//     console.log(selectedItem);
    var existingItem = Basket.findOne({sku: selectedItem.sku});
    console.log(existingItem);
    if(existingItem) {
      console.log(selectedItem.sku + " exists in basket");
      Basket.update(existingItem, {$inc: {qty: 1} });
    }
    else{
      Basket.insert({sku: selectedItem.sku, unitPrice: selectedItem.unitPrice, qty: 1});
    }
  }                  
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
  item: function(){
    return Items.find();
  }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
