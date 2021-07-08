const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3001;
const cors = require('cors');

app.db = router.db;

const rules = auth.rewriter({
  "users*":"/600/users$1",
  "sumary*": "/664/sumary$1",
  "education*": "/664/education$1",
  "experience*": "/664/experience$1",
  "techskills*": "/664/techskills$1",
  "otherskills*": "/664/otherskills$1",
  "messages*": "/messages$1",
  "companies*":"/600/companies$1"
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
