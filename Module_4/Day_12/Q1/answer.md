Schema Design Fundamentals

1. What schema design is and what a database schema represents

Schema design is the process of planning and defining the structure of a relational database before any data is stored.

A schema defines:

- What tables exist
- What columns each table has
- The data type of each column
- The rules (constraints) that data must follow

In simple words, Schema design is deciding how data is structured and protected inside the database.

2. Why schema design is required before writing backend code

Schema design must come first because the backend depends entirely on how data is stored and accessed.

Reasons:

Backend logic (CRUD operations) depends on table structure

APIs need to know relationships between entities

Queries, joins, and transactions assume a fixed schema

Changing schemas later can break existing code

A poorly designed schema forces developers to:

Write complex queries

Add workarounds in code

Duplicate validation logic in the backend

Good schema design allows backend code to be simpler, safer, and more predictable.

3. How poor schema design impacts data consistency, maintenance, and scalability
Data consistency

Missing constraints can allow invalid or conflicting data

Duplicate data may become out of sync

Relationships may not be enforced correctly

Maintenance

Schema changes become risky and expensive

Developers struggle to understand unclear table purposes

Bug fixes require touching many parts of the system

Scalability

Inefficient table structures slow down queries

Redundant data increases storage and update costs

Poor indexing choices degrade performance as data grows

In short, bad schema design creates technical debt that compounds over time.

4. What validations are in schema design and why databases enforce them

Validations are rules defined at the database level to ensure data correctness and integrity.

Common examples:

NOT NULL – prevents missing required values

UNIQUE – ensures values (like emails or usernames) are not duplicated

DEFAULT – assigns a value when none is provided

PRIMARY KEY – uniquely identifies each row

FOREIGN KEY – enforces valid relationships between tables

Databases enforce validations because:

They act as a last line of defense against invalid data

Multiple applications may access the same database

Backend bugs should not corrupt stored data

Validation at the database level is more reliable than only in code

5. The difference between a database schema and a database table
Database Schema	Database Table
Logical blueprint	Actual data structure
Defines multiple tables and rules	Stores rows of data
Describes relationships	Represents one entity
High-level organization	Low-level storage unit

A schema is the design, while a table is one component inside that design.

6. Why a table should represent only one entity

Each table should model one real-world entity (e.g., User, Order, Product).

Reasons:

Keeps data organized and understandable

Prevents duplicated or unrelated columns

Makes relationships explicit via foreign keys

Simplifies queries and updates

Mixing multiple entities in one table leads to:

Many nullable columns

Confusing semantics

Update anomalies and data inconsistency

This principle follows normalization rules in relational databases.

7. Why redundant or derived data should be avoided in table design

Redundant data is stored multiple times unnecessarily.
Derived data can be calculated from existing data.

Problems caused:

Data inconsistency (values not updated everywhere)

Extra storage usage

More complex update logic

Higher chance of bugs

Example:

Storing total_price when it can be calculated from quantity × unit_price

Instead:

Store base data

Compute derived values when needed (or use views/materialized views if required for performance)

8. The importance of choosing correct data types while designing tables

Choosing the correct data type ensures:

Data accuracy

Efficient storage

Better query performance

Proper validation

Examples:

INT vs BIGINT for IDs

DATE vs DATETIME

VARCHAR(255) vs TEXT

DECIMAL for monetary values (not FLOAT)

Incorrect data types can:

Waste storage

Cause precision errors

Prevent index usage

Introduce unexpected bugs