const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const path = require('path');
const { name } = require('ejs');
const MongoClient = require('mongodb').MongoClient;

//db connect
const url = 'mongodb+srv://harry:Ab12345678@cluster0.ca3j8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(url);
//user define -local
const users = new Array(
	{name: 'cs01', password: '123', type:'customerService', username :'Customer Service'},
	{name: 's01', password: '123', type:'security', username :'Security'}
);

const tesKey ="test";

app.set('view engine','ejs');

app.use(express.static("public"));  // folder for static contents
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieSession({
	name: 'session',
	keys: [tesKey]
  }));

async function finddb(collectionName){
    await client.connect();
    const db = await client.db('COMPS');
    const result = db.collection(collectionName).find({}).toArray();
    return result;
}
async function finddb_para(collectionName,type,parameter){
    await client.connect();
    const db = await client.db('COMPS');
	var command_str = {};
	command_str[type.toString()] = parameter;
	console.log(command_str);
    const result = db.collection(collectionName).find(command_str).toArray();
    return result;
}
async function addDB(uploadItem){
    await client.connect();
    const db = await client.db('COMPS');
    const result = db.collection("lostItemData").insertOne(uploadItem);
}
//function define
const loginCheck = (req,res,next) => {
    if(req.session.authenticated){
        return next();
    }
    res.redirect('/login');
}

function typeCheck(res,req){
	//console.log(req.session);
    if(req.session.usertype == "customerService") {
		res.redirect('/customerServices');
	}else if(req.session.usertype == "security") {
		res.redirect('/security');
	}else{
        res.render('login',{error: true});
    }
}

app.get('/', (req,res) => {
   // user not logged in!
	res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.status(200).render('login',{error: null});
   });

app.post('/login', (req,res) => {
	for(let i = 0; i<users.length ;i++){
		if (users[i].name == req.body.name && users[i].password == req.body.password) {
			// correct user name + password
			// store the following name/value pairs in cookie session
			req.session.authenticated = true;        // 'authenticated': true
			req.session.username = users[i].username;	 // 'username': req.body.name		
            req.session.usertype = users[i].type;
        }
	};
	typeCheck(res,req); 
});
app.get('/customerServices',loginCheck,async (req, res) => {
	var result = await finddb('newsTitleData');
    res.status(200).render('NewsPage',{name:req.session.username,news_obj_array:result});
   });

app.get('/security',loginCheck,async (req, res) => {
	var result = await finddb('newsTitleData');
    res.status(200).render('Security',{name:req.session.username,news_obj_array:result});
   });
//flight page - redirect
app.get('/flight',loginCheck,async (req, res) => {
    var result = await finddb('flightData');
    res.status(200).render('Flight', {name:req.session.username,flight_obj_array:result});
});
//flight page - post
app.post('/flight',async (req,res) => {
	var type = "flightNo";
	var result = await finddb_para('flightData',type,req.body.search_input);
    res.status(200).render('Flight', {name:req.session.username,flight_obj_array:result});
});

//claim page - redirect
app.get('/claim',loginCheck,async (req, res) => {
	var result = await finddb('claimData');
    res.status(200).render('Claim', {name:req.session.username,claim_obj_array:result});
});
//claim page - post
app.post('/claim',async (req,res) => {
	var type = "item";
	var result = await finddb_para('claimData',type,req.body.search_input);
    res.status(200).render('Claim', {name:req.session.username,claim_obj_array:result});
});

//report lost page - redirect
app.get('/reportLost',loginCheck,(req,res) => {
    res.status(200).render('Reportlost', {name:req.session.username});
});

//report lost page - post 
app.post('/reportLost',async (req,res) => {
	var lost_item_obj = {"passenger-name" : req.body.passenger_name, "contact-info" : req.body.contact_info, "item": req.body.item, "lost-time-place": req.body.lost_time_place, "item-details": req.body.item_details};
	await addDB(lost_item_obj);
	res.status(200).render('message_showing', {name:req.session.username});
});

//lostlist page - redirect
app.get('/lostlist',loginCheck,async (req, res) => {
    var result = await finddb('flightData');
    res.status(200).render('LostList', {name:req.session.username,flight_obj_array:result});
});
//lostlist page - post
app.post('/lostlist',async (req,res) => {
	var type = "flightNo";
	var result = await finddb_para('flightData',type,req.body.search_input);
    res.status(200).render('LostList', {name:req.session.username,flight_obj_array:result});
});

//call check function 
app.get('/check',loginCheck,(req, res) => {
    res.redirect('/customerServices');
});

app.get('/test',loginCheck,(req, res) => {
    res.status(200).render('message_showing', {name:req.session.username});
});
app.get('/test1',loginCheck,(req, res) => {
    res.status(200).render('message_confirm.ejs', {name:req.session.username});
});
app.get('/test2',loginCheck,(req, res) => {
    res.status(200).render('Update.ejs', {name:req.session.username});
});
app.get('/test3',loginCheck,(req, res) => {
    res.status(200).render('Upload.ejs', {name:req.session.username});
});
//log out 
app.get('/logout', (req,res)=>{
	if(req.session.authenticated){
        req.session = null;
		res.redirect('/login');
    }else{
    res.redirect('/login');}	
});
// all other page - redirect to login
app.get('/*',(req,res) =>{
	res.redirect('/login');
})

const server = app.listen(process.env.PORT || 3000, () => { // https://www.quora.com/Why-is-port-3000-used-when-running-a-Node-js-application
    const port = server.address().port;
    console.log(`Server is listening at port ${port}`); 
});