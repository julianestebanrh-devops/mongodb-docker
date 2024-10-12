const auth = { user: "root", pwd: "root" };

const database = {
  user: "user",
  password: "",
  collection: "mycollection",
  name: "mydatabase",
};

print("### AUTENTICATION MONGO ### ");
db.auth(auth.user, auth.pwd);

print("###  START DATABASE ### ");
db = db.getSiblingDB(database.name);
db.createUser({
  user: database.user,
  pwd: database.password,
  roles: [{ role: "readWrite", db: database.name }],
});
db.createCollection(database.collection);
print("### END DATABASE ### ");
