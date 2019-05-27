
## Users

| Column name | Data Type    | Details                   |
| :---        |    :----     |          ---              |
| id          | integer      | not null, primary key     |
| username    | string       | not null, indexed, unique | 
| email       | string       | not null, indexed, unique |
| first_name  | string       | not null |
| last_name    | string       | not null | 
| portfolio_value | float    | not null |
| buying_power | float | not null |
| password_digest | string | not null |
| session_token | string | not null, indexed, unique |
| created_at | datetime | not null |
| updated_at | datetime| not null |

* index on username, email, session_token, unique: true
* user has one watchlist
* user has many transactions


## Assets

| Column name | Data Type    | Details                   |
| :---        |    :----     |          ---              |
| id          | integer      | not null, primary key     |
| name    | string       | not null, indexed | 
| symbol       | string       | not null, indexed, unique |
| transaction_id | integer | foreign key |
| description | string | 
| shares | integer |
| dividend_yield | float |
| last_price | float |
| total_return | float | 
| your_equity | float |
| ceo | string |
| employees | integer | 
| headquarters | string |
| founded | integer | 
| market_cap | string | 
| p-e ratio | float |
| created_at | datetime | not null |
| updated_at | datetime| not null |


* index on name, symbol
* symbol, unique: true
* transaction_id references transaction

## Transaction


| Column name | Data Type    | Details                   |
| :---        |    :----     |          ---              |
| id          | integer      | not null, primary key     |
| user_id    | integer       | not null, indexed, foreign key | 
| asset_id | integer | not null, index, foreign key |
| transaction | string | not null |
| shares | integer | not null |
| asset_price | float | not null |
| created_at | datetime | not null |
| updated_at | datetime| not null |

* user_id references user
* asset_id references asset
* index on user_id, asset_id

## WatchList_Items

| Column name | Data Type    | Details                   |
| :---        |    :----     |          ---              |
| id          | integer      | not null, primary key     |
| user_id    | integer       | not null, indexed, foreign key | 
| asset_id | integer | not null, index, foreign key |
| created_at | datetime | not null |
| updated_at | datetime| not null |

* user_id references user
* asset_id references asset
* index on user_id, asset_id
* watchlist has many users
* watchlist has many assets