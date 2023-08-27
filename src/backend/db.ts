import SQLite from "react-native-sqlite-storage";

// SQLite.DEBUG(true);
// SQLite.enablePromise(true);

const DATABASE_NAME = "local_db.db";

const db = SQLite.openDatabase(
  {
    name: DATABASE_NAME,
    location: "default",
    createFromLocation: "~www/local_db.db",
  },
  () => {
    console.log("DB Open Success");
  },
  err => {
    console.log("DB Open Failed", err);
  },
);

export default db;
