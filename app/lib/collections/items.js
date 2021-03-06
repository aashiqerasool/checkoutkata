//Declare Mongo Collection to be used on both client and server
Items = new Mongo.Collection('items');

specialPriceObjSchema = new SimpleSchema({
  spQty: {
    type: Number,
    label: "Special Qty",
  },
  price: {
    type: Number,
    label: "Special Price",
  }  
});

//Define Items collection schema using aldeed:simple-schema
Items.attachSchema(new SimpleSchema({
  sku:{
    type: String,
    label: "SKU",
    max: 20
  },
  unitPrice:{
    type: Number,
    label: "Unit Price",
  },
  specialPrice: {
    type: specialPriceObjSchema,
    label: "Special Price",
  //     decimal: true,
  //     minCount: 2,
  //     maxCount: 2,
  //     min:1,
    },
}));


if (Meteor.isServer) {
  Items.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

  Items.deny({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });
}
