# Project Setup

1. **Clone the project on your local machine.**
2. **Execute `npm install` in the root directory of the downloaded project.**
3. **Create a `.env` file in the root directory and add the following environment variable:**

    ```plaintext
    PORT=3000
    ```

4. **Inside the `src/config` folder, create a new file `config.json` and then add the following JSON:**

    ```json
    {
      "development": {
        "username": "<YOUR_DB_LOGIN_NAME>",
        "password": "<YOUR_DB_PASSWORD>",
        "database": "Flights_Search_DB_DEV",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
    }
    ```

5. **Once you've added your DB config as listed above, go to the `src` folder from your terminal and execute:**

    ```sh
    npx sequelize db:create
    npx sequelize db:migrate
    ```

## DB Design

- **Airplane Table**
- **Flight**
- **Airport**
- **City**

### Relationships

- A flight belongs to an airplane but one airplane can be used in multiple flights.
- A city has many airports but one airport belongs to a city.
- One airport can have many flights, but a flight belongs to one airport.

## Tables

### City

- `id`
- `name`
- `created_at`
- `updated_at`

### Airport

- `id`
- `name`
- `address`
- `city_id`
- `created_at`
- `updated_at`

### Relationship

- A city has many airports, and an airport belongs to a city (one to many).
- An airport has many flights, and a flight belongs to one airport (one to many).
- A flight belongs to an airplane, but one airplane can be used in multiple flights (one to many).
