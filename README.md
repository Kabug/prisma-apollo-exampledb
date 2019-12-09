# prisma-apollo-exampledb
That was a pain Dx

### Bash Commands:<br />
```sh
$ graphql get-schema (to make prisma schema if you made any changes to either schemas) <br />
$ prisma deploy (if you make any changes to prisma datamodel) <br />
$ node src/index.js (to start apollo/prisma server) <br />
```


# Example mutation: <br />
### Create<br />
```sh
<br />
mutation{ <br />
	createOrder( <br />
		createdby: "Bob Bobert" <br />
		createdbyemail: "Bob.Bobert@totallyrealcompany.com" <br />
		recipient: "Bobby Bobert" <br />
		newhire: false <br />
		hirename:"" <br />
		hiredate: "" <br />
		approvalmanager:"Big Bob" <br />
		businessunit: "Facility: D15, Cost Center: 4582SO" <br />
		attention: "Bobby Bobert" <br />
		shippingaddress:"123 Cookie Street" <br />
		items: "1 - 1. STANDARD - Dell Latitude 5490  1 - 1. DOCK - ALL LAPTOPS, 1 - 2. POWER - STANDARD & SERVICE Laptops," <br /> 
		total:1807.00 <br />
		comments:"It was a fine day in wilkhershed... until they removed the port docks! We need more!" <br />
	){ <br />
		id <br />
	} <br />
} <br />
```
### <br />
Delete<br />
```sh
mutation{<br />
  deleteOrder(<br />
  	id: "ck3uohlsn052m0837au9644xi"<br />
  ){<br />
    id<br />
  }<br />
}<br />
```
<br />
### Query<br />
```sh
query{<br />
  orders{<br />
    id<br />
  }<br />
 ```
 <br />
}<br />
