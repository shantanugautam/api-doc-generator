# Authentication and Resource access (OAuth 1.0-a)
                        
## How can I Login? 
-- Requesting for an OAuth Request Token
In order to start using the resources, you need to login to an user that will be the host or subject of the transactions. This is done everytime the application is requesting rights from the user to access his/her account.


### Resource
https://api.mmvpay.com/server/access/token


### Steps

1. #### Gather `parameters`
   Provide values for the following:
   * ##### oauth_consumer_key

   Also referred to as *API* Key which identifies the application
account that is used to connect to the API system.


	* ##### oauth_nonce

	  Any random *alphanumeric* value that identifies the transaction being requested.

		This must be unique within 5 minutes.

	* ##### oauth_signature_method

  		Method used to create the signature of the request. Currently, we only support [HMAC-SHA1](http://en.wikipedia.org/wiki/Hash-based_message_authentication_code).
  
	* ##### oauth_timestamp

	  Time when the request is being call in [Unix Timestamp Format](http://www.unixtimestamp.com/index.php).

	* ##### oauth_version

		The version of OAuth you are connecting to. Currenly, we only support [OAuth 1.0-a](http://oauth.net/core/1.0a/)
		
		

2. #### Sort `parameters` descendingly according to keys




3. #### Generate `parameters` payload `signature`

	a. ##### Encode the `method`, `url` and the `query` parameters using [RFC-3986](www.rfc-base.org/rfc-3986.html).

		* `method` -- UPPERCASE http `method` used in connecting to the server.

		* `url`    -- URL to connect to. In this case, `https://api.mmvpay.com/server/request/token`.

		* `query`  -- The `parameters` your from *[Step 2]*.

	b. ##### Join the `payload` (`method`, `url`, `query`) with `&` from *[Step 3a]*.

	c. ##### Encode the *[API Secret]* using [RFC-3986](www.rfc-base.org/rfc-3986.html). **API Secret** is also referred to as **OAuth Secret Key**.

	d. ##### Encrypt `payload` from *[Step 3b]* with key `secret` in *[Step 3c]* using the specified encryption method in *[Step 1]*.
	
	
	
4. #### Encrypt the user's username
	
	a. ##### Append the [API Secret] from *[Step 3]* to the URI encoded `signature`
	
	b. ##### Hash the result from *[Step 4a]* using [MD5](http://en.wikipedia.org/wiki/MD5)
	
	c. ##### Encrypt the `username` using [AES 256](http://en.wikipedia.org/wiki/Advanced_Encryption_Standard), mode *CBC*, Padding *PKCS7* with the MD5 in *[Step 4b]* as the `key`
	
	
	
5. #### Encrypt the user's password 
  
 	Following the same process in *[Step 4]*, but encrypt the `password` instead.
 	
 	

6. #### Combine the `signature`, `ecrypted username` and the `ecrypted password` to the rest of the `parameters`.

	In additions to the `parameters` in *[step 1]*, add the following:
	* ##### oauth_signature
		Result of *[Step 3]*.
	* ##### oauth_user_name
		Result of *[Step 4]*.
	* ##### oauth_user_password
		Result of *[Step 5]*.
		
		
		
7. #### Send the `parameters` to the `host` using the `method` specified in *[Step 3]*.

	If done properly, this will result to a JSON containing the *oauth_token* and *oauth_token_secret*. Errors will be sent the as an HTTP error status.
	
	## Now that I am logged in, can I now access the resources? 
	
	-- Requesting for an OAuth Access Token\n\nWell, not yet. Now that the user granted the permission, it would still be tidious and risky to use the user's\ncredentials all the time. To deal with this, we need to request for an access token that we can use evertime\nwe ask for resources.
	
	### Resource
	https://api.mmvpay.com/server/access/token
	
	### Steps
	
	1. #### Gather `parameters`
		
		This is the same as *[Step 1]* in 
		**\"Requesting for an OAuth Request Token\"**, and add the 		following:
		 * ##### oauth_token
		 This is the *oauth_token* from **\"Requesting for an OAuth Request Token\"**.
		 
	2. #### Sort `parameters` descendingly according to keys
		
	3. #### Generate `parameters` payload `signature`
		
		a. ##### Encode the `method`, `url` and the `query` parameters using [RFC-3986](www.rfc-base.org/rfc-3986.html).
				* `method` -- UPPERCASE http `method` used in connecting to the server.
				* `url`    -- URL to connect to. In this case, `https://api.mmvpay.com/server/access/token`.
				* `query`  -- The `parameters` your from *[Step 2]*
				
		b. ##### Join the `payload` (`method`, `url`, `query`) with `&` from *[Step 3a]*.
			
		c. ##### Encode the *[API Secret]* using [RFC-3986](www.rfc-base.org/rfc-3986.html). **API Secret** is also referred to as **OAuth Secret Key**.
			
		d. ##### Encode the [OAuth Request Token Secret] from 
		**\"Requesting for an OAuth Request Token\"** using RFC-3986.
		
		e. ##### Concatinate *[Step 3c]* and *[Step 3d]* with `&`
			
		f. ##### Encrypt `payload` from *[Step 3b]* with key `signature` in *[Step 3e]* using the specified encryption method in *[Step 1]*.
			
			
	4. #### Combine the `signature` to the rest of the `parameters`.
		In additions to the `parameters` in *[step 1]*, add the following:
			* ##### oauth_signature
			Result of *[Step 3]*.
			
			
	5. #### Send the `parameters` to the `host` using the `method` specified in *[Step 3]*.
		
		If done properly, this will result to a JSON containing the *oauth_token* and *oauth_token_secret*. Errors will be sent the as an HTTP error status.
	
	
		## Can I now use the resources?
	
		-- Using the Resources
		
		Yes! Now that the system recognizes the application and the user, resources can now be used at your will. To do this, we need to cover the basics.
		
		The resources or **APIs** is using [ReST or Representational State Transfer architecture](http://en.wikipedia.org/wiki/Representational_state_transfer) and delivered in [JSON format](http://en.wikipedia.org/wiki/JSON). A resource is an entity normally tied up to on URI of a specific set of information, like USERS, CARDS and TRANSACTIONS. We can perform [methods](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html) to manipulate these information.
		
		
		
		### HTTP Methods
		
		
		* #### POST
		
			Creates a resource. Information for the resource can be sent using the query body.
		
		* #### PUT
		
			Updates/Modifies a resource. Information for the resource can be sent using the query body.
		
		* #### GET
		
			Reads/Retrieves a resource. Information for filtering the resource can be sent using the query URI.
		
		* #### DELETE
		
		Delete/Removes a resource. The item being removed is idenfied depends the URI.
		
		
		### Steps
		
		1. #### Gather `parameters`
			
			This is the same as *[Step 1]* in 
			**\"Requesting for an OAuth Request Token\"** 
			and the `query parameters` for then resource and the following:
				* ##### oauth_token
				This is the *oauth_token* from 
				**\"Requesting for an OAuth Access Token\"**.
		2. #### Sort `parameters` descendingly according to keys
			
		3. #### Generate `parameters` payload `signature`
			
			a. ##### Encode the `method`, `url` and the `query` parameters using [RFC-3986](www.rfc-base.org/rfc-3986.html).
				
				* `method` 
				-- UPPERCASE http `method` used in connecting to the server.
				* `url`    
				-- Resource URI to connect to.
				
				* `query`  
				-- The `parameters` your from *[Step 2]*.
			
			b. ##### Join the `payload` (`method`, `url`, `query`) with `&` from *[Step 3a]*.
				
			c. ##### Encode the *[API Secret]* using [RFC-3986](www.rfc-base.org/rfc-3986.html). **API Secret** is also referred to as **OAuth Secret Key**.
				
			d. ##### Encode the [OAuth Access Token Secret] from 
			**\"Requesting for an OAuth Access Token\"** using RFC-3986.
			
			e. ##### Concatinate *[Step 3c]* and *[Step 3d]* with `&`
			
			f. ##### Encrypt `payload` from *[Step 3b]* with key `signature` in *[Step 3e]* using the specified encryption method in *[Step 1]*.
				
		4. #### Combine the `signature` to the rest of the `parameters`.

			In additions to the `parameters` in *[step 1]*, add the following:
			
			* ##### oauth_signature
			Result of *[Step 3]*.
			
		5. #### Send the `parameters` to the `host` using the `method` specified in *[Step 3]*.