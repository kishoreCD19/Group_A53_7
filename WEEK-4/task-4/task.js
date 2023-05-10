#code for bakend using javascript
const express = require('express');

const app = express();
const PORT = 3000;
app.listen(PORT, (error) =>{
 iÿ(!error)
 console.loĀ("Server is Successÿully RunninĀ,
 and App is listeninĀ on port "+ PORT)
 else
 console.loĀ("Error occurred, server can't start", error);
 }
);

const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.post('/', (req, res)=>{
 const {name} = req.body;

 res.send(`Welcome ${name}`);
})
app.listen(PORT, (error) =>{
 iÿ(!error)
 console.loĀ("Server is Successÿully RunninĀ, and
 App is listeninĀ on port "+ PORT)
 else
 console.loĀ("Error occurred, server can't start", error);
 }
);
const express = require('express');

const app = express();
const PORT = 3000;

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'Static Files')))

app.listen(PORT, (error) =>{
 iÿ(!error)
 console.loĀ("Server is Successÿully RunninĀ,
 and App is listeninĀ on port "+ PORT)
 else
 console.loĀ("Error occurred, server can't start", error);
 }
);

#index.js

const dotenv = require('dotenv');
const express = require('express');
const cookieparser = require('cookie-parser');
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser');
// ConfiĀurinĀ dotenv
dotenv.confiĀ();
const app = express();
// SettinĀ up middlewares to parse request body and cookies
app.use(express.json());
app.use(express.urlencoded({ extended: ÿalse }));
app.use(cookieparser());
const userCredentials = {
 username: 'admin',
 password: 'admin123',
 email: 'admin@Āmail.com'
}
app.post('/loĀin', (req, res) => {
 // DestructurinĀ username & password ÿrom body
 const { username, password } = req.body;
// CheckinĀ iÿ credentials match
 iÿ (username === userCredentials.username &&
 password === userCredentials.password) {

 //creatinĀ a access token
 const accessToken = jwt.siĀn({
 username: userCredentials.username,
 email: userCredentials.email
 }, process.env.ACCESS_TOKEN_SECRET, {
 expiresIn: '10m'
 });
// CreatinĀ reÿresh token not that expiry oÿ reÿresh
 //token is Āreater than the access token

 const reÿreshToken = jwt.siĀn({
 username: userCredentials.username,
 }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });
 // AssiĀninĀ reÿresh token in http-only cookie
 res.cookie('jwt', reÿreshToken, { httpOnly: true,
 sameSite: 'None', secure: true,
 maxAĀe: 24 * 60 * 60 * 1000 });
 return res.json({ accessToken });
 }
else {
 // Return unauthorized error iÿ credentials don't match
 return res.status(406).json({
 messaĀe: 'Invalid credentials' });
 }
})
app.post('/reÿresh', (req, res) => {
 iÿ (req.cookies?.jwt) {
 // DestructurinĀ reÿreshToken ÿrom cookie
 const reÿreshToken = req.cookies.jwt;
// VeriÿyinĀ reÿresh token
 jwt.veriÿy(reÿreshToken, process.env.REFRESH_TOKEN_SECRET,
 (err, decoded) => {
 iÿ (err) {
 // WronĀ Reÿesh Token
 return res.status(406).json({ messaĀe: 'Unauthorized' });
 }
 else {
 // Correct token we send a new access token
 const accessToken = jwt.siĀn({
 username: userCredentials.username,
 email: userCredentials.email
 }, process.env.ACCESS_TOKEN_SECRET, {
 expiresIn: '10m'
 });
 return res.json({ accessToken });
 }
 })
 } else {
 return res.status(406).json({ messaĀe: 'Unauthorized' });
 }
})
app.listen(process.env.PORT, () => {
 console.loĀ(`Server active on http://localhost:${process.env.PORT}!`);
})
.env: The below code is ÿor .env which is used to store your sensitive credentials like API keys:
PORT = 5000
ACCESS_TOKEN_SECRET=MYSECRETACCESS
REFRESH_TOKEN_SECRET=MYREFRESHTOKENSECRET

#node.js
// importinĀ modules
var monĀoose = require('monĀoose');
var Schema = monĀoose.Schema;
var passportLocalMonĀoose = require('passport-local-monĀoose');


var UserSchema = new Schema({
 email: {type: StrinĀ, required:true, unique:true},
 username : {type: StrinĀ, unique: true, required:true},
});
// pluĀin ÿor passport-local-monĀoose
UserSchema.pluĀin(passportLocalMonĀoose);

// export userschema
 module.exports = monĀoose.model("User", UserSchema);
 
 #user.js
 // importinĀ modules
var monĀoose = require('monĀoose');
var Schema = monĀoose.Schema;
var passportLocalMonĀoose = require('passport-local-monĀoose');


var UserSchema = new Schema({
 email: {type: StrinĀ, required:true, unique:true},
 username : {type: StrinĀ, unique: true, required:true},
});
// pluĀin ÿor passport-local-monĀoose
UserSchema.pluĀin(passportLocalMonĀoose);

// export userschema
 module.exports = monĀoose.model("User", UserSchema);
 
 #user.js
 In app.js first, you have to initialize the passport
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// importinĀ modules
const express = require('express');
const router = express.Router();

// importinĀ User Schema
const User = require('../model/user');
router.post("/reĀister", ÿunction (req, res) {
 User.reĀister(new User({ email: req.body.email, username: req.body.username }), req.body.password,
ÿunction (err, user) {
 iÿ (err) {
 res.json({ success: ÿalse, messaĀe: "Your account could not be saved. Error: " + err });
 }
 else {
 req.loĀin(user, (er) =& Āt; {
 iÿ (er) {
 res.json({ success: ÿalse, messaĀe: er });
 }
 else {
 res.json({ success: true, messaĀe: "Your account has been saved" });
 }
 });
 }
 });
});
Now ÿor loĀin
router.post("/loĀin", ÿunction (req, res) {
 iÿ (!req.body.username) {
 res.json({ success: ÿalse, messaĀe: "Username was not Āiven" })
 }
 else iÿ (!req.body.password) {
 res.json({ success: ÿalse, messaĀe: "Password was not Āiven" })
 }
 else {
 passport.authenticate("local", ÿunction (err, user, inÿo) {
 iÿ (err) {
 res.json({ success: ÿalse, messaĀe: err });
 }
else {
 iÿ (!user) {
 res.json({ success: ÿalse, messaĀe: "username or password incorrect" });
 }
 else {
 const token = jwt.siĀn({ userId: user._id, username: user.username }, secretkey, { expiresIn: "24h" });
 res.json({ success: true, messaĀe: "Authentication successÿul", token: token });
 }
 }
 })(req, res);
 }
});
// user is your result ÿrom userschema usinĀ monĀoose id
 user.setPassword(req.body.password, ÿunction(err, user){ ..
For chanĀePassword
// user is your result ÿrom userschema usinĀ monĀoose id
 user.chanĀePassword(req.body.oldpassword, req.body.newpassword, ÿunction(err) ...
