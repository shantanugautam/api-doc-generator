"use strict";var apiGeneratorApp=angular.module("apiGeneratorApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","apiGeneratorControllers","apiGeneratorServices","yaru22.md"]);apiGeneratorApp.config(["$routeProvider",function(e){e.when("/apis",{templateUrl:"partials/api-list.html",controller:"ApiListCtrl"}).when("/apis/:apiHref",{templateUrl:"partials/api-detail.html",controller:"ApiDetailCtrl"}).otherwise({templateUrl:"partials/main.html",redirectTo:"/"})}]);var apiGeneratorControllers=angular.module("apiGeneratorControllers",[]);apiGeneratorControllers.controller("MainCtrl",["$scope","$http",function(e,t){t.get("/apis/main.json").success(function(t){e.info=t,console.log(t)}),e.info=[{playgroundUrl:"https://sg-uat-5.mmvpay.com/playground",features:[{title:"Places",description:"Seamlessly empower fully researched growth strategies and interoperable internal sources.",imgPath:"images/pin.png"},{title:"Settings",description:"Collaboratively administrate turnkey channels whereas virtual e-tailers an other media. ",imgPath:"images/settings.png"},{title:"Easy",description:"Interactively procrastinate high-payoff content without backward-compatible data. ",imgPath:"images/easy.png"},{title:"Global",description:"Credibly innovate granular internal or 'organic' sources whereas high standards in web-readiness. ",imgPath:"images/saturn.png"}]}]}]),apiGeneratorControllers.controller("ApiListCtrl",["$scope","yaru22.md","Api",function(e,t){e.apis=t.query(),e.orderProp="name"}]),apiGeneratorControllers.controller("ApiDetailCtrl",["$location","$scope","$routeParams","Api",function(e,t,a,r){t.apis=r.query(),t.orderProp="name",t.currentPage="/apis/:apiHref",t.go=function(t){e.path(t)},t.api=r.get({apiHref:a.apiHref},function(e){t.data=e,t.getParams=e.methods,t.typeofpackage=function(){return"vcard-resource"===e.package?"resource":"v1/errors"===e.package[0]?"errors":"v1"===e.package[0]?"api":void 0},t.isEmpty=function(){return t.$nodesScope&&t.$nodesScope.$modelValue&&0===t.$nodesScope.$modelValue.length},t.isChild=function(e){var a=t.childNodes();return a&&a.indexOf(e)>-1},t.prev=function(){var e=t.index();return e>0?t.siblings()[e-1]:void 0},t.childNodesCount=function(){return angular.isDefined(t.childNodes())?t.childNodes().length:0},t.hasChild=function(){return t.childNodesCount()>0},t.childNodes=function(){return angular.isDefined(t.$childNodesScope)&&angular.isDefined(t.$childNodesScope.$modelValue)?t.$childNodesScope.childNodes():void 0}})}]);var apiGeneratorServices=angular.module("apiGeneratorServices",["ngResource"]);apiGeneratorServices.factory("Api",["$resource",function(e){return e("apis/:apiHref.json",{},{query:{method:"GET",params:{apiHref:"apis"},isArray:!0}})}]),function(e){try{e=angular.module("apiGeneratorApp")}catch(t){e=angular.module("apiGeneratorApp",[])}e.run(["$templateCache",function(e){e.put("partials/api-detail.html",'<section><section st-section="banner"><h1>{{Apiname}} Documentation</h1></section><section st-section="version"><div st-section="miniInfo"><h3>Optimus Prime</h3><span class="inline-block-el" vertical-align="middle">API reference /{{api.version}}/</span><input type="search" placeholder="Search"></div><ul st-section="sidebar"><li name="routeChanger" id="routeChanger" ng-model="route.selectedRoute" ng-change="go(route.selectedRoute)" ng-repeat="api in apis"><a ng-href="index.html#/apis/{{api.href}}">{{api.name}}</a></li></ul></section><section st-section="documentation"><h2 ng-model="route.selectedRoute">{{api.name}}</h2><section st-section="content" ng-switch="typeofpackage()"><div ng-switch-when="api"><div st-section="subSection" data-ng-repeat="method in getParams"><div st-section="apiName"><h3>{{method.name}}</h3></div><div st-section="apiInfo"><dl><dt>Description</dt><dd>{{method.description}}</dd></dl><table ng-if="method.response"><tr><th>Response</th></tr><tr><td><table><tr><th>No</th><th>Name</th><th>Type</th><th>Description</th></tr><tr data-ng-repeat="response in method.response"><td class="index"><p>{{$index + 1}}</p></td><td class="name"><p>{{response.name}}</p></td><td class="description {{response.type}}Type"><p>{{response.type}}</p></td><td class="descTxt"><p>{{response.description}}</p><div ng-if="response.type == \'array\'"><h5>Additional Info</h5><code>\n                                                {{response}}\n                                                </code></div></td></tr></table></td></tr></table><table ng-if="method.requests"><tr><th>Request</th></tr><tr><td><table><tr><th>No</th><th>Name</th><th>Type</th><th>Optional</th></tr><tr data-ng-repeat="(key, value) in method.requests"><td>{{key + 1}}</td><td>{{value.name}}</td><td>{{value.type}}</td><td class="descTxt">{{value.optional}}</td></tr></table></td></tr></table></div></div></div><div ng-switch-when="errors"><div st-section="subSection" data-model="getParams"><div st-section="apiName"><h2>Error Name</h2><br><h3>{{data.name}}</h3></div><div st-section="apiInfo"><dl><dt>Description</dt><dd>{{data.description}}</dd></dl><table><tr><th>Contents</th></tr><tr><td><table><tr><th>Name</th><th>Description</th></tr><tr data-ng-repeat="content in data.contents"><td>{{content.name}}</td><td class="descTxt">{{content.description}}</td></tr></table></td></tr></table></div></div></div><div ng-switch-when="resource"><div st-section="subSection" data-model="getParams"><div st-section="apiInfo"><md class="contentMarkdown" ng-include="\'/apis/API-Readme.md\'"></md></div></div></div></section></section></section>')}])}(),function(e){try{e=angular.module("apiGeneratorApp")}catch(t){e=angular.module("apiGeneratorApp",[])}e.run(["$templateCache",function(e){e.put("partials/api-list.html",'<section><section st-section="banner"><h1>{{Apiname}} Documentation</h1><form><input type="search" placeholder="Search documentation"></form></section><section st-section="version"><div class="button dropdown" vertical-align="middle"></div><ul><li ng-repeat="api in apis | filter:query | orderBy:orderProp"><a href="#/apis/{{api.href}}" class="thumb">{{api.name}}</a></li></ul><span class="inline-block-el" vertical-align="middle">/ API reference</span></section><section st-section="documentation"><aside ng-include="\'partials/search.html\'" scope="" onload=""></aside><section st-section="content"></section></section></section>')}])}(),function(e){try{e=angular.module("apiGeneratorApp")}catch(t){e=angular.module("apiGeneratorApp",[])}e.run(["$templateCache",function(e){e.put("partials/header.html",'<nav><a class="brand" ng-href="#/"><img src="https://dxaqyiu0mg0nl.cloudfront.net/uploads/2014/04/21074126/logo.png" height="44"></a></nav>')}])}(),function(e){try{e=angular.module("apiGeneratorApp")}catch(t){e=angular.module("apiGeneratorApp",[])}e.run(["$templateCache",function(e){e.put("partials/main.html",'<div class="main"><header><div class="wrap"><div class="header-wrapper"><h1>MatchMove Wallet <span>Api</span></h1><p>Access the Ins and out of the wallet functionality via safe secure APIs</p><div class="buttons-wrapper"><a href="https://sg-uat-5.mmvpay.com/playground" class="button">Explore Playground</a> <a href="#/apis/36798f3d4cb6f50b75589793173e7f68" class="button button-stripe">View Documentation</a></div></div></div></header><div class="spanning"><div class="discover clearfix"><div class="wrap"><div class="alignCenter"><h2>You Create</h2><p>Create the Wallet You Want. Dont Need the entire Wallet? Pick and choose the functionality that you desire.</p></div><div class="discover-img"><div class="discover-img-inside"><img src="images/discover.png" height="486" width="634" alt=""></div></div></div></div><div class="promo clearfix"><div class="wrap"><div class="alignCenter"><h2>We handle the rest</h2><p>With a secure API , built by the best engineers in town , you need not worry about the backend system being not secure enough or not scalable enough</p></div><div class="promo-wrapper clearfix"><div class="promo-column"><img src="images/pin.png" height="32" width="24" alt=""><h5>Places</h5><p>Seamlessly empower fully researched growth strategies and interoperable internal sources.</p></div><div class="promo-column"><img src="images/settings.png" height="32" width="33" alt=""><h5>Settings</h5><p>Collaboratively administrate turnkey channels whereas virtual e-tailers an other media.</p></div><div class="promo-column"><img src="images/easy.png" height="32" width="34" alt=""><h5>Easy</h5><p>Interactively procrastinate high-payoff content without backward-compatible data.</p></div><div class="promo-column"><img src="images/saturn.png" height="32" width="32" alt=""><h5>Global</h5><p>Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness.</p></div></div></div></div><div class="comments clearfix"><div class="wrap"><div class="tab"><div class="box visible"><h4>People talking about <a href="#">#MatchMoveWallet</a></h4><p>MatchMoveWallet Recently crowned winner as innovator of year as Sibos 2014</p></div><div class="box"><h4>People talking about <a href="#">#MatchMoveWallet</a></h4><p>MatchMoveWallet Recently crowned winner as innovator of year as Sibos 2014</p></div><div class="box"><h4>People talking about <a href="#">#MatchMoveWallet</a></h4><p>MatchMoveWallet Recently crowned winner as innovator of year as Sibos 2014</p></div><ul class="tabs"><li class="active"></li><li></li><li></li></ul><a href="#" class="tab-prev"></a> <a href="#" class="tab-next"></a></div></div></div></div></div>')}])}(),function(e){try{e=angular.module("apiGeneratorApp")}catch(t){e=angular.module("apiGeneratorApp",[])}e.run(["$templateCache",function(e){e.put("partials/search.html","")}])}(),function(e){try{e=angular.module("apiGeneratorApp")}catch(t){e=angular.module("apiGeneratorApp",[])}e.run(["$templateCache",function(e){e.put("partials/includes/readme.html",'# Authentication and Resource access (OAuth 1.0-a) ## How can I Login? -- Requesting for an OAuth Request Token In order to start using the resources, you need to login to an user that will be the host or subject of the transactions. This is done everytime the application is requesting rights from the user to access his/her account. ### Resource https://api.mmvpay.com/server/access/token ### Steps 1. #### Gather `parameters` Provide values for the following: * ##### oauth_consumer_key Also referred to as *API* Key which identifies the application account that is used to connect to the API system. * ##### oauth_nonce Any random *alphanumeric* value that identifies the transaction being requested. This must be unique within 5 minutes. * ##### oauth_signature_method Method used to create the signature of the request. Currently, we only support [HMAC-SHA1](http://en.wikipedia.org/wiki/Hash-based_message_authentication_code). * ##### oauth_timestamp Time when the request is being call in [Unix Timestamp Format](http://www.unixtimestamp.com/index.php). * ##### oauth_version The version of OAuth you are connecting to. Currenly, we only support [OAuth 1.0-a](http://oauth.net/core/1.0a/) 2. #### Sort `parameters` descendingly according to keys 3. #### Generate `parameters` payload `signature` a. ##### Encode the `method`, `url` and the `query` parameters using [RFC-3986](www.rfc-base.org/rfc-3986.html). * `method` -- UPPERCASE http `method` used in connecting to the server. * `url` -- URL to connect to. In this case, `https://api.mmvpay.com/server/request/token`. * `query` -- The `parameters` your from *[Step 2]*. b. ##### Join the `payload` (`method`, `url`, `query`) with `&` from *[Step 3a]*. c. ##### Encode the *[API Secret]* using [RFC-3986](www.rfc-base.org/rfc-3986.html). **API Secret** is also referred to as **OAuth Secret Key**. d. ##### Encrypt `payload` from *[Step 3b]* with key `secret` in *[Step 3c]* using the specified encryption method in *[Step 1]*. 4. #### Encrypt the user\'s username a. ##### Append the [API Secret] from *[Step 3]* to the URI encoded `signature` b. ##### Hash the result from *[Step 4a]* using [MD5](http://en.wikipedia.org/wiki/MD5) c. ##### Encrypt the `username` using [AES 256](http://en.wikipedia.org/wiki/Advanced_Encryption_Standard), mode *CBC*, Padding *PKCS7* with the MD5 in *[Step 4b]* as the `key` 5. #### Encrypt the user\'s password Following the same process in *[Step 4]*, but encrypt the `password` instead. 6. #### Combine the `signature`, `ecrypted username` and the `ecrypted password` to the rest of the `parameters`. In additions to the `parameters` in *[step 1]*, add the following: * ##### oauth_signature Result of *[Step 3]*. * ##### oauth_user_name Result of *[Step 4]*. * ##### oauth_user_password Result of *[Step 5]*. 7. #### Send the `parameters` to the `host` using the `method` specified in *[Step 3]*. If done properly, this will result to a JSON containing the *oauth_token* and *oauth_token_secret*. Errors will be sent the as an HTTP error status. ## Now that I am logged in, can I now access the resources? -- Requesting for an OAuth Access Token\\n\\nWell, not yet. Now that the user granted the permission, it would still be tidious and risky to use the user\'s\\ncredentials all the time. To deal with this, we need to request for an access token that we can use evertime\\nwe ask for resources. ### Resource https://api.mmvpay.com/server/access/token ### Steps 1. #### Gather `parameters` This is the same as *[Step 1]* in **\\"Requesting for an OAuth Request Token\\"** , and add the following: * ##### oauth_token This is the *oauth_token* from **\\"Requesting for an OAuth Request Token\\"**. 2. #### Sort `parameters` descendingly according to keys 3. #### Generate `parameters` payload `signature` a. ##### Encode the `method`, `url` and the `query` parameters using [RFC-3986](www.rfc-base.org/rfc-3986.html). * `method` -- UPPERCASE http `method` used in connecting to the server. * `url` -- URL to connect to. In this case, `https://api.mmvpay.com/server/access/token`. * `query` -- The `parameters` your from *[Step 2]* b. ##### Join the `payload` (`method`, `url`, `query`) with `&` from *[Step 3a]*. c. ##### Encode the *[API Secret]* using [RFC-3986](www.rfc-base.org/rfc-3986.html). **API Secret** is also referred to as **OAuth Secret Key**. d. ##### Encode the [OAuth Request Token Secret] from **\\"Requesting for an OAuth Request Token\\"** using RFC-3986. e. ##### Concatinate *[Step 3c]* and *[Step 3d]* with `&` f. ##### Encrypt `payload` from *[Step 3b]* with key `signature` in *[Step 3e]* using the specified encryption method in *[Step 1]*. 4. #### Combine the `signature` to the rest of the `parameters`. In additions to the `parameters` in *[step 1]*, add the following: * ##### oauth_signature Result of *[Step 3]*. 5. #### Send the `parameters` to the `host` using the `method` specified in *[Step 3]*. If done properly, this will result to a JSON containing the *oauth_token* and *oauth_token_secret*. Errors will be sent the as an HTTP error status. ## Can I now use the resources? -- Using the Resources Yes! Now that the system recognizes the application and the user, resources can now be used at your will. To do this, we need to cover the basics. The resources or **APIs** is using [ReST or Representational State Transfer architecture](http://en.wikipedia.org/wiki/Representational_state_transfer) and delivered in [JSON format](http://en.wikipedia.org/wiki/JSON). A resource is an entity normally tied up to on URI of a specific set of information, like USERS, CARDS and TRANSACTIONS. We can perform [methods](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html) to manipulate these information. ### HTTP Methods * #### POST Creates a resource. Information for the resource can be sent using the query body. * #### PUT Updates/Modifies a resource. Information for the resource can be sent using the query body. * #### GET Reads/Retrieves a resource. Information for filtering the resource can be sent using the query URI. #### DELETE Delete/Removes a resource. The item being removed is idenfied depends the URI. ### Steps 1. #### Gather `parameters` This is the same as *[Step 1]* in **\\"Requesting for an OAuth Request Token\\"** and the `query parameters` for then resource and the following: * ##### oauth_token This is the *oauth_token* from **\\"Requesting for an OAuth Access Token\\"**. 2. #### Sort `parameters` descendingly according to keys 3. #### Generate `parameters` payload `signature` a. ##### Encode the `method`, `url` and the `query` parameters using [RFC-3986](www.rfc-base.org/rfc-3986.html). * `method` -- UPPERCASE http `method` used in connecting to the server. * `url` -- Resource URI to connect to. * `query` -- The `parameters` your from *[Step 2]*. b. ##### Join the `payload` (`method`, `url`, `query`) with `&` from *[Step 3a]*. c. ##### Encode the *[API Secret]* using [RFC-3986](www.rfc-base.org/rfc-3986.html). **API Secret** is also referred to as **OAuth Secret Key**. d. ##### Encode the [OAuth Access Token Secret] from **\\"Requesting for an OAuth Access Token\\"** using RFC-3986. e. ##### Concatinate *[Step 3c]* and *[Step 3d]* with `&` f. ##### Encrypt `payload` from *[Step 3b]* with key `signature` in *[Step 3e]* using the specified encryption method in *[Step 1]*. 4. #### Combine the `signature` to the rest of the `parameters`. In additions to the `parameters` in *[step 1]*, add the following: * ##### oauth_signature Result of *[Step 3]*. 5. #### Send the `parameters` to the `host` using the `method` specified in *[Step 3]*.')}])}();