## Ecommerce App with fake data in service


## login functionality for two users

login -> user, admin -> username ==  admin password ==12345 => admin dashboard
username=="" password=username.slice(0,3)+"123" => userdashboard

## Admin panel functionality 

1. create project and components like login,dashboard,addproducts,manageproducts,viewproducts and product service

2. import FormsModule,ReactiveFormsModule,HttpClientsModule in app-module.ts 

3. create routing for all components  
 
4. implement login page with reactive forms, if login is success redirect to another page and store value in localStorage

5. in dashboard.component.ts check for value in localStorage if it is not existed we need to redirect user to login 

6. create a class called product in service folder to use it as datatype in service layer

7. in productService create array of objects as productlist array with datatype of product

8. create getLaptops method in service to return array of objects when it is called

9. in viewproducts component create DI for productService and call getLaptops when the component is loaded

10. create addLaptops method in service with a parameter, this method push new products to productlist

11. in addproduct component create a form with all the fields and whenever form is valid send the form values to addLaptops method in service 

12. create deleteLaptops method in service which accepts productid as parameter, based product id find the index of the product then delete using splice 

13. create updateLaptops method in service which accepts updated product object as parameter 
now we need to find the index of the product then we can update product details by replacing entire object using splice

14. in manage.html when update button is clicked we need to execute two tasks: one is displaying a modal with input fields to update values, second update the values of dummy variable with object where button is clicked 
15. in the modal display all the fields along with updateproduct button when it is clicked pass all the data to service method called updatedLaptops

-> update btn -> 2 tasks -> modal, dummy = product



## userdashboard implementation :


1. implement view products in user dashboard 
2. create routing for details component as details/:pid here pid stores the value from url
3. add anchor tag to the product card when user clicked on card we should open details component to display product details
4. in details component read the value from url when it is loaded and pass pid to getLaptopById method in service to get laptop details 
5. now implement cart service with addtocart, getcartitems, getcartlength methods 
6. when add to cart button in details component is clicked pass object to addtocart method in service
7. to get updated cart length everytime in user dashboard call getcartlength method in ngDoCheck of userdashboard

8. now in cart component, when it is loaded call getCartItems method to display all products 
in cart 

9. now to work with buy now, we need to load a modal when buy now button is clicked and create service called order service to store all orders 

10. in order service create methods like placeorder, getallorders, getordersbyusername 
	getallorders- admin have to see all the orders
	getOrderbyusername - every user has to see their orders 

11. in cart component when buy now button is clicked display a modal in that read product properties, username, address, phone number, here we already have product properties and username(in local storage)

12. when placeorder button in the modal is clicked call a service method called placeorder and pass an object which has product fields,username,phone,address to order service

13. in userdashboard we have view orders, when it is loaded perform two tasks one is read username from local storage and call getOrdersByUsername from order service

14. in admin panel create allorders component to display all the orders by calling getallorders service method from order service

15. complete wishlist functionality, delete cart items, getCartItemsByUsername

