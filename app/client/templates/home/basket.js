/*****************************************************************************/
/* Basket: Event Handlers */
/*****************************************************************************/
Session.setDefault("selectedItem", Items.findOne({sku: 'A'}));
console.log(Session.get("selectedItem"));

Template.Basket.events({
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
    console.log("Add " + Session.get("selectedItem") + " added to basket");
    var selectedItem = Items.findOne({sku: Session.get("selectedItem")});
    console.log(selectedItem);
//     if(Basket.findOne({sku: selectedItem.sku})) {
//       Basket.update({sku: selectedItem.sku}, {qty: selectedItem.qty++});
//     }
//     else{
      Basket.insert({sku: selectedItem.sku, unitPrice: selectedItem.unitPrice, qty: 1});
//     }
  }                   
});

/*****************************************************************************/
/* Basket: Helpers */
/*****************************************************************************/
Template.Basket.helpers({
  basket: function(){
    return Basket.find();
  }
});

/*****************************************************************************/
/* Basket: Lifecycle Hooks */
/*****************************************************************************/
Template.Basket.onCreated(function () {
});

Template.Basket.onRendered(function () {
});

Template.Basket.onDestroyed(function () {
});
