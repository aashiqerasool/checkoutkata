/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
  "change #itemselector": function(evt) {
    console.log(Session.get("selectedItem"));
    var newValue = $(evt.target).val();
    var oldValue = Session.get("selectedItem");
    if (newValue != oldValue) {
      // value changed, let's do something
//       console.log(Session.get("selectedItem"));
    }
    Session.set("selectedItem", newValue);
    console.log(Session.get("selectedItem"));
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
