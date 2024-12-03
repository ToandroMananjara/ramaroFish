### README: Executing GraphQL Cart Operations

This README provides instructions for executing GraphQL operations (queries and mutations) related to the **Cart** module using tools like **Postman**. 

---

### Prerequisites
1. **Node.js** and **npm/yarn** installed.
2. **NestJS** application set up with a **GraphQL module** configured.
3. A running **Prisma** instance with a database connection.
4. **Postman** installed for testing GraphQL APIs.
5. The API is running locally or deployed (e.g., `http://localhost:3000/graphql`).

---

### Operations
#### 1. **Create a Cart**
**Mutation:** `createCart`

#### GraphQL Syntax
```graphql
mutation CreateCart {
    createCart(
        buyer_id: 1
        seller_id: 2
        publication_id: 1
        total_price: 1000
        transaction_date: "02-12-2024"
    ) {
        id
        buyer_id
        seller_id
        publication_id
        quantity
        total_price
        transaction_date
        status
        is_deleted
    }
}

---

#### 2. **Get All Carts**
**Query:** `getAllCarts`

#### GraphQL Syntax
```graphql
query {
  getAllCarts {
    id
    buyer_id
    seller_id
    publication_id
    total_price
    transaction_date
    quantity
    status
    is_deleted
  }
}
```

---

#### 3. **Update a Cart**
**Mutation:** `updateCart`

#### GraphQL Syntax
```graphql
mutation UpdateCart {
    updateCart(
        id: null // assignena
        buyer_id: null //assignena
        seller_id: null /assignena
        publication_id: null //assignena
        transaction_date: null //assignena
    ) {
        id
        buyer_id
        seller_id
        publication_id
        quantity
        total_price
        transaction_date
        status
        is_deleted
    }
}

```


---

#### 4. **Delete a Cart**
**Mutation:** `deleteCart`

#### GraphQL Syntax
```graphql
mutation DeleteCart {
    deleteCart(id: 1) {
        id
        buyer_id
        seller_id
        publication_id
        quantity
        total_price
        transaction_date
        status
        is_deleted
    }
}

```


---

### Testing with Postman

#### Steps:
1. Open Postman and create a **new request**.
2. Set the request type to **POST**.
3. Set the URL to the GraphQL endpoint, e.g., `http://localhost:3000/graphql`.
4- Execute query or mutation (in function of the operation)

6. Click **Send** to execute the operation.
7. Check the response for success or errors.

---

### Common Issues and Debugging
1. **Ensure the server is running:** Confirm the GraphQL endpoint is active.
2. **Date format errors:** Ensure `transaction_date` is in ISO 8601 format, e.g., `"2024-12-01T10:00:00Z"`.
3. **Authorization issues:** Add necessary tokens if required.


### References
- **NestJS Documentation:** [NestJS GraphQL](https://docs.nestjs.com/graphql/quick-start)
- **Postman Documentation:** [Postman GraphQL Requests](https://learning.postman.com/docs/sending-requests/supported-api-frameworks/graphql/)