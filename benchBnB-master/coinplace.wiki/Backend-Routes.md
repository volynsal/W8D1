# HTML
* GET / StaticPagesController#root

# API endpoints
### Users
* POST /api/users (sign up)
### Session 
* POST /api/session (login)
* DELETE /api/session (logout)
### Assets
* GET /api/assets (returns search for all assets)
* GET /api/assets/:symbol (returns specific searched asset)
### Transaction
* POST /api/assets/:symbol/transaction
* DELETE /api/assets/:symbol/transaction
### Watchlist
* POST /api/watchlist/:symb (adds specific asset to watchlist)
* DELETE /api/watchlist/:symb (removes specific asset from watchlist)