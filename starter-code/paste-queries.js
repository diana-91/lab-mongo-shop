// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.insertOne({"firstName": "John", "lastName": "Smith", "dateBirth": ISODate("2016-12-10T18:28:09.369Z"), "address": { "streetAddress": "21 2nd Street", "city": "New York", "state": "NY", "postalCode": "10021"}});


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertOne({"name": "Water Bottle", "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe", "category":"Kitchen","price":23.0 });


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.insertOne({"shoppingCart": [{"name":"WiredTiger T-shirt","category":"Apparel","price":12.0}]});

// PASTE LIST PRODUCTS QUERY HERE
db.products.find().pretty();


// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({"category":"Kitchen"}).pretty();

// PASTE DELETE PRODUCT QUERY HERE
db.products.remove({_id:"5a49241fc1febfb4fdfaf835"})

// PASTE REVIEW QUERY HERE
