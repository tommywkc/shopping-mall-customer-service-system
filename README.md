Homantin Plaza Customer Service System
This Website is designed for Customer Service in Homantin Plaza. Our Website Link: Click Me
(Read this file on github for better reading experience.)

==================================================================================

Hello World! We are Group 36 !!!
Our Developers:
[13017740] Ng Man Hei
[13077944] Wong Kwok Ching
[13137889] Lee Chung Ho
[13138794] Hui Lin Fung
[13134144] Leung Yu Ching
==================================================================================

Front-end Development:
Figma (UI design)
HTML (Building the structure of the webpage)
CSS (Achieve web page UI design)
JavaScript (Achieve web page interaction
Back-end Development:
Node.js (Server-side scripting)
EJS (Template engine)
MongoDB (Database)
Code Hosting System:
GitHub (Version control and collaboration)
Google Cloud (Online Server)
==================================================================================

File Path:
ProjectS381F-main/
├── public/
│   ├── css/
│   │   ├── ClaimCss.css
│   │   ├── LoginCss.css
│   │   ├── main.css
│   │   ├── messageCss.css
│   │   ├── NewsCss.css
│   │   ├── ReportiostCss.css
│   │   └── ShopCss.css
│   │
│   └── graphics/
│       ├── background.png
│       ├── edit.png
│       ├── lock.png
│       ├── logo.svg
│       ├── logo2.svg
│       ├── user.png
│       ├── warning.png
│       ├── white.png
│       └── x.png
│
├── views/
│   ├── Claim.ejs
│   ├── login.ejs
│   ├── LostList.ejs
│   ├── message_confirm.ejs
│   ├── message_showing.ejs
│   ├── NewsPage.ejs
│   ├── Reportlost.ejs
│   ├── Shop.ejs
│   ├── ShopUpload.ejs
│   └── Update.ejs
│
├── README.md
├── server.js
├── package.json
└── package-lock.json
==================================================================================

Project File Introduction:
1. server.js :
Features :
User Login:
Users can login with specify username and password.
Login information will be saved in Cookie.
User Logout:
User can logout with clicking LOGOUT button.
finddb() :
Server return the array of collection from MongoDB.
finddb_para() :
Server return the specify collection base on type and item parameter from MongoDB.
addDB() :
User can upload item onto specify collection in MongoDB.
updateDB() :
User can update specify item on specify collection in MongoDB.
deleteDB() :
User can delete specify item on specify collection in MongoDB.
2. package.json :
- Dependencies:
body-parser
cookie-session
ejs
express
express-session
express-formidable
mongodb
mongoose
path
3. public :
- css (Provide CSS webpage design for each page):
ClaimCss.css
LoginCss.css
main.css
messageCss.css
NewsCss.css
ReportiostCss.css
ShopCss.css
- graphics (Provide Image design for different elements):
background.png
edit.png
lock.png
logo.svg
logo2.svg
user.png
warning.png
white.png
x.png
4. views :
Claim.ejs
login.ejs
LostList.ejs
message_confirm.ejs
message_showing.ejs
NewsPage.ejs
Reportlost.ejs
Shop.ejs
ShopUpload.ejs
Update.ejs
==================================================================================

Cloud-based server URL:
https://projects381f-1076834146749.asia-east1.run.app/

==================================================================================

Operation guides:
Login Page:
Input correct account and password in order to login.
Account List:

	{name: 'cs01', password: '123', type:'customerService', username :'Tommy'},
	{name: 'cs02', password: '123', type:'customerService', username :'Harry'},
	{name: 'cs03', password: '123', type:'customerService', username :'Vincent'},
	{name: 'cs04', password: '123', type:'customerService', username :'Dainel'}, 
	{name: 'cs05', password: '123', type:'customerService', username :'Jimmy'} 


Message: Incorrect account or password will be shown if wrong account or password were inputed. 

Accounts:
Using different account to login will show up with different user name.

Login with name: cs01


Login with name: cs02


Feel free trying to login with other account !!!
Mall News Page:
Showing all mall news from MongoDB collection: newsTitleData 

- Delete
Providing DELETE Button for user to delete news from MongoDB collection: newsTitleData It will redirect to message_confirm page


After clicking Confirm will redirect to message_showing page and delete the news


After clicking Finish will redirect back to main page Mall News Page

Shop Information Page:
Showing all shop information from MongoDB collection: shops 

- Search
Providing Search Barand ENTER Button for user to search shop from MongoDB collection: shops with Shop NO.


- Upload
Providing UPLOAD SHOP + Button for user to add shop to MongoDB collection: shops
Clicking it will redirect to ShopUpload page


After clicking Upload button will redirect to message_showing page and upload shop informations to MongoDB collection: newsTitleData


After clicking Finish will redirect back to main page Mall News Page
Item will be added to Shop Information Page


- Delete
Providing DELETE Button for user to delete shop from MongoDB collection: shops
Clicking it will redirect to message_confirm page


After clicking Confirm will redirect to message_showing page and delete the news


After clicking Finish will redirect back to main page Mall News Page

Lost List Page:
Showing all lost report from MongoDB collection: lostItemData


- Search
Providing Search Barand ENTER Button for user to search item from MongoDB collection: lostItemData with Lost Item name.


- Update
Providing Update Button [] It will redirect to Update page


After clicking Update will redirect to message_showing page and update the report


After clicking Finish will redirect back to main page Mall News Page

Before Edit:


After Edit:


- Delete
Providing DELETE Button for user to delete lost report from MongoDB collection: lostItemData
Clicking it will redirect to message_confirm page


After clicking Confirm will redirect to message_showing page and delete the lost report


After clicking Finish will redirect back to main page Mall News Page

Claim/Report Lost Page:
Showing all claim item from MongoDB collection: claimData


- Search
Providing Search Barand ENTER Button for user to search item from MongoDB collection: claimData with Claim item name.


- Report Lost
Providing REPORT LOST + Button for user to add lost item to MongoDB collection: lostItemData
Clicking it will redirect to Reportlost page


After clicking Upload button will redirect to message_showing page and upload shop informations to MongoDB collection: lostItemDate


After clicking Finish will redirect back to main page Mall News Page
Item will be added to LOST LIST


- Delete
Providing DELETE Button for user to delete claim item from MongoDB collection: claimData
Clicking it will redirect to message_confirm page


After clicking Confirm will redirect to message_showing page and delete the item


After clicking Finish will redirect back to main page Mall News Page

==================================================================================

API Keys:
Shop APIs
Create New Shop Information:
curl -X POST -F "shop_no=321" -F "name=Trinkey Trove" -F "type=shop" -F "address=119" -F "open_time=08:00" -F "close_time=23:00" -F "status=closed" -F "phone=44444444" https://projects381f-1076834146749.asia-east1.run.app/api/shops/321

Read Shop Informations (base on Shop NO.):
curl -X GET https://projects381f-1076834146749.asia-east1.run.app/api/shops/321

Update Shop Informations (base on Shop NO.):
curl -X PUT -F "phone=99999999" https://projects381f-1076834146749.asia-east1.run.app/api/shops/321

Delete Shop Informations (base on Shop NO.):
curl -X DELETE https://projects381f-1076834146749.asia-east1.run.app/api/shops/321

Claim APIs
Create New Claim Item:
curl -X POST -F "claimId=321" -F "item=Phone" -F "color=Black" -F "date=24/08/2024" -F "pickUpPlace=G25" -F "status=Claimed" -F "picture=https://github.com/tommywkc/photo/blob/main/phone5.jpeg?raw=true" https://projects381f-1076834146749.asia-east1.run.app/api/claim/321

Read Claim Item (base on Claim ID):
curl -X GET https://projects381f-1076834146749.asia-east1.run.app/api/claim/321

Update Claim Item (base on Claim ID):
curl -X PUT -F "status=Storage room" https://projects381f-1076834146749.asia-east1.run.app/api/claim/321

Delete Claim Item (base on Claim ID):
curl -X DELETE https://projects381f-1076834146749.asia-east1.run.app/api/claim/321

==================================================================================

Reference
COMPS381F Lecture notes and Github
Stackoverflow
====================The End====================


