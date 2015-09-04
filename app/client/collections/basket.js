//Declare Mongo Collection to be used on both client and server
Basket = new Mongo.Collection(null);

//Define Items collection schema using aldeed:simple-schema
Basket.attachSchema(new SimpleSchema({
  sku:{
    type: String,
    label: "SKU",
    max: 20
  },
  unitPrice:{
    type: Number,
    label: "Unit Price",
  },
  qty:
  {
    type: Number,
    label: "Qty",
  }
}));


// if (Meteor.isServer) {
//   Basket.allow({
//     insert: function (userId, doc) {
//       return true;
//     },

//     update: function (userId, doc, fieldNames, modifier) {
//       return true;
//     },

//     remove: function (userId, doc) {
//       return true;
//     }
//   });

//   Basket.deny({
//     insert: function (userId, doc) {
//       return false;
//     },

//     update: function (userId, doc, fieldNames, modifier) {
//       return false;
//     },

//     remove: function (userId, doc) {
//       return false;
//     }
//   });
// }
