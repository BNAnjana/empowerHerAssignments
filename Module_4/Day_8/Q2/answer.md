1. Why is db.json not suitable as a database for real projects?

db.json is useful only for:

- Learning
- Mock servers
- Demos

Limitations of file-based storage: 

a. Performance issues:

- No indexing: Queries require scanning the entire file, which becomes slow as data grows.
- Slow read/write: Every read/write operation involves opening and parsing the file, which is much slower than optimized database engines.
- Concurrency problems: Multiple users or processes trying to read/write simultaneously can cause corrupted data.

b. Scalability issues:

- File size limits: As the JSON file grows, operations become very slower. A few MBs might be fine, but hundreds of MBs or GBs are impractical.
- No transactions: Unlike real databases, you can’t distribute data across servers.

c. Reliability issues:

- Data corruption risk: If the application crashes during a write, the JSON file can become invalid or partially written.
- No backup/recovery mechanisms: You’d have to manually copy files for backups, and restoring is error-prone.

2. What are the ideal characteristics of a database system (apart from just storage)?

Ideal Characteristics of a Database System are:
Performance
- Fast query execution: Optimized indexing, caching, and query planning ensure quick responses even with large datasets.
- Efficient writes: Handles inserts, updates, and deletes without slowing down as data grows.
- Low latency: Critical for applications like e-commerce or banking where delays can impact user experience.

Concurrency
- Multi-user support: Allows many users or applications to access and modify data simultaneously.
- Transaction isolation: Prevents conflicts when multiple operations happen at the same time (e.g., two people booking the last seat).
- Locking & scheduling: Smart mechanisms to avoid deadlocks and ensure fairness among concurrent processes.

Reliability
- Durability of data: Once a transaction is committed, it remains safe even after crashes or power failures.
- Crash recovery: Built-in mechanisms (like write-ahead logs) restore the database to a consistent state after unexpected shutdowns.
- Consistent uptime: Designed to run continuously without frequent failures.

Data Integrity
- ACID compliance: Guarantees Atomicity, Consistency, Isolation, and Durability for transactions.
- Validation rules: Enforces constraints (e.g., no duplicate primary keys, valid foreign keys).
- Preventing corruption: Ensures data is stored and retrieved exactly as intended, without silent errors.

Scalability
- Vertical scaling: Efficiently uses more powerful hardware (CPU, RAM, SSDs).
- Horizontal scaling: Distributes data across multiple servers (sharding, replication).
- Elastic growth: Can handle increasing workloads without major redesigns.

Fault Tolerance
- Replication: Copies of data across servers ensure availability even if one fails.
- Automatic failover: Switches to backup systems seamlessly during outages.
- Resilience to hardware/software failures: Keeps services running despite unexpected breakdowns.

3. How many types of databases are there? What are their use cases or applications?

There are 2 types of databases:

- Relational database (SQL)
- Non-Relational database (NoSQL)

a. Relational Database: 

- Relational databases store data in structured tables(rows and columns).
- Relationships between tables are made using keys.

Characteristics

- Table-based
- Fixed schema
- Strong consistency
- Structured relationships

Use Cases

- Banking systems
- ERP platforms
- Inventory & finance apps

b. Non-Relational Database:

- Non-Relational Databases store data in flexible format like documents, key-value pairs, graphs without fixed schemas.

Characteristics

- Flexible schema
- High scalability
- Document or key–value based

Use Cases

- Social media platforms
- Real-time analytics
- Chat applications