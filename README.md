# Clothing Retailer Website 
##### A Tech Test

## Specification

#### User Stories

These user stories are ordered according to priority, implement each feature starting from the top.

```
As a User
I can add a product to my shopping cart.

As a User
I can remove a product from my shopping cart.

As a User
I can view the total price for the products in my shopping cart.

As a User
I can apply a voucher to my shopping cart.

As a User
I can view the total price for the products in my shopping cart with discounts applied.

As a User
I am alerted when I apply an invalid voucher to my shopping cart.

As a User
I am unable to add Out of Stock products to the shopping cart.
```

#### Product List

|Product Name | Category | Price | Quantity in Stock |
|-------------|----------|-------|-------------------|
|Almond Toe Court Shoes, Patent Black|Women’s Footwear|£99.00|5|
|Suede Shoes, Blue|Women’s Footwear|£42.00|4|
|Leather Driver Saddle Loafers, Tan|Men’s Footwear|£34.00|1|2
|Flip Flops, Red|Men’s Footwear|£19.00|6|
|Flip Flops, Blue|Men’s Footwear|£19.00|0|
|Gold Button Cardigan, Black|Women’s Casualwear|£167.00|6|
|Cotton Shorts, Medium Red|Women’s Casualwear|£30.00|5|
|Fine Stripe Short Sleeve Shirt, Grey|Men’s Casualwear|£49.99|9|
|Fine Stripe Short Sleeve Shirt, Green|Men’s Casualwear|~~£49.99~~ £39.99| 3|
|Sharkskin Waistcoat, Charcoal|Men’s Formalwear|£75.00|2|
|Lightweight Patch Pocket Blazer, Deer|Men’s Formalwear|£175.50|1|
|Bird Print Dress, Black|Women’s Formalwear|£270.00|10|
|Mid Twist Cut­Out Dress, Pink|Women’s Formalwear|£540.00|5|

The product list will be stored in a local file rather than in a database.

#### Discounts

Given that one of the products on the list has been discounted by £10.00 I will assume that individual items can be temporarily discounted. 

Discounts vouchers can be redeemed, the following offers are available:
 - £5.00 off your order
 - £10.00 off orders over £50.00
 - £15.00 off orders over £75.00 and including footwear

I have assumed that the user is not allowed to combine discount vouchers.

Discount vouchers will be applied when viewing the basket, codes will be entered into a box and the site will alert the user as to whether or not the conditions for the voucher have been met. Voucher discounts, along with item discounts, will be stored in a local file alongside the products. 

## Site Mockups

The main page of the site will display all products, on a realistic site the main page would likely display information about the company and its products along with a dropdown menu with links to each category of product. I would prefer to implement a database and create models for items, colours and discounts before doing that.

![user flow](./public/user-flow.png)

## Stack

Node.js and Express

Testing with Jest

Packages:
 - [Pug](https://github.com/pugjs/pug) (formerly Jade): html template engine for Node
 - [Session](https://github.com/expressjs/session): Session middleware for Express
 - [Supertest](https://github.com/visionmedia/supertest): library for testing Node HTTP servers.

## Running

Make sure you have [node.js](https://nodejs.org/en/) and npm installed. Npm comes with node but if you haven't updated it in a while you can do so with the command `npm install npm@latest -g`

Move into the directory and run `npm install` to set up the environment.

Run the app with `npm start`, Run the tests with `npm test`

## App Structure

The app has two controllers, products and cart.

#### Products Controller

The products controller has one which renders the product list with buttons to add or remove each product to the session cart. The product list is strored in a local file and passed to a pug file to render the view. Each button for the adding and removing from the cart makes a post request to the cart controller

#### Cart Controller

| Route | Action |
|-------|--------|
| GET / | Renders cart total and voucher form |
| POST /add | Adds product to cart |
| POST /remove | Removes product to cart |
| POST /discount | Applys voucher to cart |

The cart is a hash object stored on the session, post requests to `/add` and `/remove` are made with a product id in the request body. The controller uses a cartService to increase/decrease the quantity of product in the cart. The `/discount` route takes the voucher code from the post request and adds it to the session.

The get "/" uses the cartService to calculate the cart total and the voucherService to apply the sessions voucher to the cart.

#### cartService

The cartService checks the product stock before adding it to the cart, removes product from the cart, and calculates the cart total.

#### voucherService

The voucherService checks if a the session voucher exists in the local deals file and then checks if the conditions for said deal are met. If the voucher exixts and the conditions are met then the module will return the cart total discounted, otherwise it returns the cart total with no discounts applied

## Thigs to Do

Currently the cart is simply a hash object on the session, as a result it was necessary to create a cart service to handle adding/removing products and claculating the total. If the cart was an object with methods to add/remove products and a "cartTotal" variable then the code would not violate the "Ask don't tell" principle.

The tests for cartController do no mock out the services, tests need to be written using spies to assert that these modules are called.
