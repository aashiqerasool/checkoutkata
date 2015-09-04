Meteor.publish('items', function () {
 return Items.find({});
});

// Below code to manage local client-side basket collection. Does not work.
// var subs = { };
// Meteor.publish('basketHelperPub', function() {
//        var subscription = this;
//        subs[subscription._session.id] = subscription;
//        subscription.onStop(function() {
//           delete subs[subscription._session.id];
//        });
// });