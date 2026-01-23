Database Relationships

A database relationship defines how two or more tables are connected to each other using keys.

Relationships allow a database to:

- Store data without duplication
- Maintain data integrity
- Retrieve related data efficiently

In relational databases, relationships describe how one entity interacts with another. For example, how customers relate to orders in an e-commerce system.

Types of Database Relationships

There are three main types of database relationships:

1. One-to-One (1:1)
2. One-to-Many (1:M)
3. Many-to-Many (M:N)

One-to-One (1:1) Relationship

In a one-to-one relationship, one record in Table A is associated with one and only one record in Table B, and vice versa.

E-commerce Example

Customer <---> CustomerProfile

- Each customer has exactly one profile.
- Each profile belongs to exactly one customer.

Tables

Customers (CustomerID, Name, Email)

CustomerProfile (ProfileID, CustomerID, Address, Phone)

CustomerID is a foreign key in CustomerProfile.

Diagram
Customers                     CustomerProfile
-----------                   ----------------
CustomerID (PK)  -----------  CustomerID (FK)
Name                           Address
Email                          Phone

One-to-Many (1:M) Relationship

In a one-to-many relationship, one record in Table A can be associated with many records in Table B, but each record in Table B relates to only one record in Table A.

E-commerce Example

Customer → Orders

- One customer can place many orders
- Each order belongs to one customer

Tables

Customers (CustomerID, Name)

Orders (OrderID, CustomerID, OrderDate, TotalAmount)

CustomerID is a foreign key in Orders.

Diagram
Customers                     Orders
-----------                   ----------------
CustomerID (PK)  -----------< OrderID (PK)
Name                            CustomerID (FK)
                               OrderDate
                               TotalAmount

Many-to-Many (M:N) Relationship

In a many-to-many relationship, multiple records in Table A can be related to multiple records in Table B.

It requires a junction table.

E-commerce Example

Orders <---> Products

- One order can contain many products
- One product can appear in many orders

Tables

Orders (OrderID, OrderDate)

Products (ProductID, ProductName, Price)

OrderItems (OrderID, ProductID, Quantity)

OrderItems is the junction table.

Diagram
Orders          OrderItems             Products
--------        -----------            ----------
OrderID (PK) -- OrderID (FK) --------> ProductID (PK)
                 ProductID (FK)
                 Quantity