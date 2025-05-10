# Homantin Plaza Customer Service System
This Website is designed for Customer Service in Homantin Plaza.
Our Website Link: [Click Me](https://projects381f-1076834146749.asia-east1.run.app/) <br />
[(Read this file on github for better reading experience.)](https://github.com/Harry5317/ProjectS381F/blob/main/README.md)

==================================================================================
## Hello World! We are Group 36 !!!
### Our Developers:
- __[13017740] Ng Man Hei__
- __[13077944] Wong Kwok Ching__
- __[13137889] Lee Chung Ho__
- __[13138794] Hui Lin Fung__
- __[13134144] Leung Yu Ching__

==================================================================================
### Front-end Development:
- Figma (UI design)
- HTML (Building the structure of the webpage)
- CSS (Achieve web page UI design)
- JavaScript (Achieve web page interaction

### Back-end Development:
- Node.js (Server-side scripting)
- EJS (Template engine)
- MongoDB (Database)

### Code Hosting System:
- GitHub (Version control and collaboration)
- Google Cloud (Online Server)

==================================================================================
## File Path:
```
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
```

==================================================================================
# Project File Introduction:
## 1. server.js :
### Features :
- __User Login__:
  * Users can login with specify username and password.
  * Login information will be saved in Cookie.
- __User Logout__:
  * User can logout with clicking ```LOGOUT``` button.
- __finddb()__ :
  * Server return the array of collection from MongoDB.
- __finddb_para()__ :
  * Server return the specify collection base on type and item parameter from MongoDB.
- __addDB()__ :
  * User can upload item onto specify collection in MongoDB.
- __updateDB()__ :
  * User can update specify item on specify collection in MongoDB.
- __deleteDB()__ :
  * User can delete specify item on specify collection in MongoDB.

## 2. package.json :

### - __Dependencies__:
  * body-parser
  * cookie-session
  * ejs
  * express
 * express-session
  * express-formidable
  * mongodb
  * mongoose
  * path

## 3. public :

### - __css (Provide CSS webpage design for each page)__:
* ClaimCss.css
* LoginCss.css
* main.css
* messageCss.css
* NewsCss.css
* ReportiostCss.css
* ShopCss.css

### - __graphics (Provide Image design for different elements)__:
* background.png
* edit.png
* lock.png
* logo.svg
* logo2.svg
* user.png
* warning.png
* white.png
* x.png

## 4. views :
- Claim.ejs
- login.ejs
- LostList.ejs
- message_confirm.ejs
- message_showing.ejs
- NewsPage.ejs
- Reportlost.ejs
- Shop.ejs
- ShopUpload.ejs
- Update.ejs

==================================================================================
# Cloud-based server URL:
https://projects381f-1076834146749.asia-east1.run.app/

==================================================================================
# Operation guides:
# *Login Page*:
__Input correct account and password in order to login.__ <br />
Account List:
```
	{name: 'cs01', password: '123', type:'customerService', username :'Tommy'},
	{name: 'cs02', password: '123', type:'customerService', username :'Harry'},
	{name: 'cs03', password: '123', type:'customerService', username :'Vincent'},
	{name: 'cs04', password: '123', type:'customerService', username :'Dainel'}, 
	{name: 'cs05', password: '123', type:'customerService', username :'Jimmy'} 
```
<img src="https://github.com/Harry5317/PhotoOfPage/blob/10a56ef289c2441183b9a0f2890c00a201dd7ee3/Mainpage.png" width="600" height="350">

__Message__: ```Incorrect account or password``` will be shown if wrong account or password were inputed.
<img src="https://github.com/Harry5317/PhotoOfPage/blob/10a56ef289c2441183b9a0f2890c00a201dd7ee3/error%20account.png" width="300" height="350">

----------------------------------------------------------------------------------
# *Accounts*:
__Using different account to login will show up with different user name.__
- Login with name: ```cs01```
<img src="https://github.com/Harry5317/PhotoOfPage/blob/f4aba031301e608c6cd85325b1d5dcf4bf9ce34f/BlackTommy.png" width="1000" height="50">

- Login with name: ```cs02```
<img src="https://github.com/Harry5317/PhotoOfPage/blob/f4aba031301e608c6cd85325b1d5dcf4bf9ce34f/Harry.png" width="1000" height="50">

### Feel free trying to login with other account !!!
----------------------------------------------------------------------------------
# *Mall News Page*:
__Showing all mall news from MongoDB collection: ```newsTitleData```__
<img src="https://github.com/Harry5317/PhotoOfPage/blob/1f281cfdda590ee5176956ed0ec5d242d92d0ff0/news.png" width="1000" height="350">

### - Delete
__Providing ```DELETE``` Button for user to delete news from MongoDB collection: ```newsTitleData```__
__It will redirect to message_confirm page__<br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/abc471f8f24fda76b06c837a4f68206256d89c88/comfirm%20delete.png" width="300" height="150"><br />

__After clicking ```Confirm``` will redirect to message_showing page and delete the news__<br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/abc471f8f24fda76b06c837a4f68206256d89c88/deleted.png" width="300" height="150"><br />

__After clicking ```Finish``` will redirect back to main page Mall News Page__

----------------------------------------------------------------------------------

# *Shop Information Page*:
__Showing all shop information from MongoDB collection: ```shops```__
<img src="https://github.com/Harry5317/PhotoOfPage/blob/ececd7b7f36b6617cafea8d03dcd372ee161165c/shop.png" width="1000" height="320">

### - Search
__Providing ```Search Bar```and ```ENTER``` Button for user to search shop from MongoDB collection: ```shops``` with Shop NO.__<br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/ececd7b7f36b6617cafea8d03dcd372ee161165c/shop%20search.png" width="1000" height="280">

### - Upload
__Providing ```UPLOAD SHOP +``` Button for user to add shop to MongoDB collection: ```shops```__<br />
__Clicking it will redirect to ShopUpload page__<br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/cae81a94bf8e3cb2f2b227a7a23ecf8bef51acde/shoptest.png" width="600" height="350"><br />

__After clicking ```Upload``` button will redirect to message_showing page and upload shop informations to MongoDB collection: ```newsTitleData```__<br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/eb1e8a5c824a43bf3b47144c4a6c9c4f7a1bf637/Upload%20Finished.png" width="300" height="150"><br />

__After clicking ```Finish``` will redirect back to main page Mall News Page__<br />
__Item will be added to Shop Information Page__<br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/cae81a94bf8e3cb2f2b227a7a23ecf8bef51acde/ShopResult.png" width="1000" height="160">
 
### - Delete
__Providing ```DELETE``` Button for user to delete shop from MongoDB collection: ```shops```__<br />
__Clicking it will redirect to message_confirm page__<br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/abc471f8f24fda76b06c837a4f68206256d89c88/comfirm%20delete.png" width="300" height="150"><br />

__After clicking ```Confirm``` will redirect to message_showing page and delete the news__<br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/abc471f8f24fda76b06c837a4f68206256d89c88/deleted.png" width="300" height="150"><br />

__After clicking ```Finish``` will redirect back to main page Mall News Page__<br />

----------------------------------------------------------------------------------
# *Lost List Page*:
__Showing all lost report from MongoDB collection: ```lostItemData```__ <br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/8e1eeb0aa03571d6951c9c115dc1750af14c68f8/lost%20list1.png" width="1000" height="380">

### - Search
__Providing ```Search Bar```and ```ENTER``` Button for user to search item from MongoDB collection: ```lostItemData``` with Lost Item name.__<br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/c0eae28a349af5a3b0e77f4f0695d329f9c9e36c/lostSearch.png" width="1000" height="340">

### - Update
__Providing ```Update``` Button [<img src="https://github.com/Harry5317/ProjectS381F/blob/b8f63471f2b48113fc7fbfd600921b769cd905bd/public/graphics/edit.png" width="30" height="30">] It will redirect to Update page__<br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/d3e87d5d353d86d1dd8bdf90ca339e4b5cf61079/Lost%20Update.png" width="600" height="350"><br />

__After clicking ```Update``` will redirect to message_showing page and update the report__<br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/d3e87d5d353d86d1dd8bdf90ca339e4b5cf61079/UpdateFinish.png" width="300" height="150"><br />

__After clicking ```Finish``` will redirect back to main page Mall News Page__<br />

* __Before Edit__:
 <img src="https://github.com/Harry5317/PhotoOfPage/blob/d3e87d5d353d86d1dd8bdf90ca339e4b5cf61079/edit1.png" width="1000" height="80">
 
* __After Edit__:
 <img src="https://github.com/Harry5317/PhotoOfPage/blob/d3e87d5d353d86d1dd8bdf90ca339e4b5cf61079/edit2.png" width="1000" height="80">

### - Delete
__Providing ```DELETE``` Button for user to delete lost report from MongoDB collection: ```lostItemData```__<br />
__Clicking it will redirect to message_confirm page__<br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/abc471f8f24fda76b06c837a4f68206256d89c88/comfirm%20delete.png" width="300" height="150"><br />

__After clicking ```Confirm``` will redirect to message_showing page and delete the lost report__<br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/abc471f8f24fda76b06c837a4f68206256d89c88/deleted.png" width="300" height="150"><br />

__After clicking ```Finish``` will redirect back to main page Mall News Page__<br />

----------------------------------------------------------------------------------
# *Claim/Report Lost Page*:
__Showing all claim item from MongoDB collection: ```claimData```__ <br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/cae81a94bf8e3cb2f2b227a7a23ecf8bef51acde/claim.png" width="1000" height="380">

### - Search
__Providing ```Search Bar```and ```ENTER``` Button for user to search item from MongoDB collection: ```claimData``` with Claim item name.__<br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/c0eae28a349af5a3b0e77f4f0695d329f9c9e36c/claimsearch.png" width="1000" height="540">

### - Report Lost
__Providing ```REPORT LOST +``` Button for user to add lost item to MongoDB collection: ```lostItemData```__<br />
__Clicking it will redirect to Reportlost page__<br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/8e1eeb0aa03571d6951c9c115dc1750af14c68f8/ReportLost.png" width="600" height="350"><br />

__After clicking ```Upload``` button will redirect to message_showing page and upload shop informations to MongoDB collection: ```lostItemDate```__<br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/eb1e8a5c824a43bf3b47144c4a6c9c4f7a1bf637/Upload%20Finished.png" width="300" height="150"><br />

__After clicking ```Finish``` will redirect back to main page Mall News Page__<br />
__Item will be added to LOST LIST__<br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/8e1eeb0aa03571d6951c9c115dc1750af14c68f8/Lostlist%20after.png" width="1000" height="400">

### - Delete
__Providing ```DELETE``` Button for user to delete claim item from MongoDB collection: ```claimData```__<br />
__Clicking it will redirect to message_confirm page__<br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/abc471f8f24fda76b06c837a4f68206256d89c88/comfirm%20delete.png" width="300" height="150"><br />

__After clicking ```Confirm``` will redirect to message_showing page and delete the item__<br />
<img src="https://github.com/Harry5317/PhotoOfPage/blob/abc471f8f24fda76b06c837a4f68206256d89c88/deleted.png" width="300" height="150"><br />

__After clicking ```Finish``` will redirect back to main page Mall News Page__<br />

==================================================================================
# API Keys:
- ## Shop APIs
	* Create New Shop Information: <br />
  ```curl -X POST -F "shop_no=321" -F "name=Trinkey Trove" -F "type=shop" -F "address=119" -F "open_time=08:00" -F "close_time=23:00" -F "status=closed" -F "phone=44444444" https://projects381f-1076834146749.asia-east1.run.app/api/shops/321```

	* Read Shop Informations (base on Shop NO.): <br />
 ```curl -X GET https://projects381f-1076834146749.asia-east1.run.app/api/shops/321```

	* Update Shop Informations (base on Shop NO.): <br />
 ```curl -X PUT -F "phone=99999999" https://projects381f-1076834146749.asia-east1.run.app/api/shops/321```

	* Delete Shop Informations (base on Shop NO.): <br />
 ```curl -X DELETE https://projects381f-1076834146749.asia-east1.run.app/api/shops/321```

- ## Claim APIs
  	* Create New Claim Item: <br />
   ```curl -X POST -F "claimId=321" -F "item=Phone" -F "color=Black" -F "date=24/08/2024" -F "pickUpPlace=G25" -F "status=Claimed" -F "picture=https://github.com/tommywkc/photo/blob/main/phone5.jpeg?raw=true" https://projects381f-1076834146749.asia-east1.run.app/api/claim/321```

	* Read Claim Item (base on Claim ID): <br />
 ```curl -X GET https://projects381f-1076834146749.asia-east1.run.app/api/claim/321```

	* Update Claim Item (base on Claim ID): <br />
 ```curl -X PUT -F "status=Storage room" https://projects381f-1076834146749.asia-east1.run.app/api/claim/321```

	* Delete Claim Item (base on Claim ID): <br />
 ```curl -X DELETE https://projects381f-1076834146749.asia-east1.run.app/api/claim/321```

==================================================================================
# Reference
- [COMPS381F Lecture notes and Github](https://github.com/yalin-liu/cloudserver381-2024/tree/main)
- Stackoverflow

====================The End====================
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
![GIF](https://github.com/Harry5317/PhotoOfPage/blob/00137627d4e5b2d908e29d9c98918019b623ec7e/abc.gif)
<br />
You Just Got RickRolled!!!
