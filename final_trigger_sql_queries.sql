

-- it will update the product stock value whenever a supplier supplies a stock
use finaldbmsproject;
drop Trigger if exists UpdateProductStock;
delimiter |
Create Trigger UpdateProductStock after insert on supplies
for each row
begin

update product set product.stocks  = product.stocks + new.quantity where new.Product_pid = pid;
end;
|
delimiter ;

--  it will update the cart's amount and cost whenever the new entry is inserted in cart_has_product but initially cart is initialised with cart id  = (?),quantity= 0,cost = 0,customer_cid = (?)

use finaldbmsproject;
drop Trigger if exists UpdateCartQuantityAmount;
delimiter |
Create Trigger UpdateCartQuantityAmount after insert on cart_has_product
for each row
begin
update cart set cart.quantity  = cart.quantity + new.quantity where new.Cart_cartid = cartid;
update cart set cart.cost = cart.cost + (new.quantity* (select price from product p where new.Product_pid = p.pid));
end;
|
delimiter ;

-- it will update the order amount according to cart amountvalue when we add new order record in table
use finaldbmsproject;
drop Trigger if exists GenerateOrder;
delimiter |
Create Trigger GenerateOrder before insert on finaldbmsproject.order
for each row 
begin
set new.amount = (select cost from cart where cart.Customer_cid  = Customer_cid);
end;
|
delimiter ;


--  it will add the all products corresponding to order id in order_has_products when the order id is generated at checkout

use finaldbmsproject;
drop Trigger if exists GenerateOrderHasProduct;
 delimiter |
Create Trigger GenerateOrderHasProduct after insert on finaldbmsproject.order
for each row 
begin
insert into order_has_product(select oid, Product_pid,quantity from finaldbmsproject.order , cart_has_product where Cart_cartid = (select cartid from cart where cart.Customer_cid = Customer_cid));

end;
|
delimiter ;





use finaldbmsproject;
drop Trigger if exists UpdateProductStockFromOrder;
 delimiter |
Create Trigger UpdateProductStockFromOrder after insert on finaldbmsproject.order_has_product
for each row 
begin
update product set product.stocks  = product.stocks - new.quantity where new.Product_pid = pid;
end;
|
delimiter ;
 




