# prisma-apollo-exampledb
That was a pain Dx
This is a boilerplate I created for myself. Feel free to use if you'd like!

### Bash Commands:
```sh
$ graphql get-schema (to make prisma schema if you made any changes to either schemas) 
$ prisma deploy (if you make any changes to prisma datamodel) 
$ node src/index.js (to start apollo/prisma server) 
```


# Example mutations: <br />
### Create

```sh
mutation{ 
	createOrder( 
		createdby: "Bob Bobert"
		createdbyemail: "Bob.Bobert@totallyrealcompany.com" 
		recipient: "Bobby Bobert" 
		newhire: false 
		hirename:"" 
		hiredate: "" 
		approvalmanager: "Big Bob" 
		businessunit: "Facility: D15, Cost Center: 4582SO" 
		attention: "Bobby Bobert" 
		shippingaddress:"123 Cookie Street" 
		items: "1 - 1. STANDARD - Dell Latitude 5490  1 - 1. DOCK - ALL LAPTOPS, 1 - 2. POWER - STANDARD & SERVICE Laptops,"
		total:1807.00 
		comments:"It was a fine day in wilkhershed... until they removed the port docks! We need more! also a laptop please :)" 
	){ 
		id 
	} 
} 
```
Note: Date has to be format YYYY-MM-DD<br />
### Delete
```sh
mutation{
  deleteOrder(
  	id: "ck3uohlsn052m0837au9644xi"
  ){
    	id
  }
}
```
### Query
```sh
query{
  orders{
    id
  }
}
```

