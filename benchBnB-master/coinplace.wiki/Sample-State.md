    {
        entities: {
            users: { 
                    1: {
                        id: 1,
                        first_name: Ariana,
                        last_name: Simpson,
                        portfolio_value: 123,423,
                        buying_power: 123,254
                    },
                    2: {
                        id: 2,
                        first_name: Brian,
                        last_name: Armstrong,
                        portfolio_value: 123,423,
                        buying_power: 123,254
                    }
                },
            assets: {
                BTC: {
                    id: 1
                    last_price: [1d, 1w, 1m, 3m, 1y, 5y],
                    average_cost: 298.25,
                    total_cost: 2087.72,
                    today's_return: 8.96,
                    shares: 7,
                    percent_change: 0.47
                }
            },
            transaction: {
                1: {
                    user_id: 1,
                    asset_id: 1,
                    transaction: buy,
                    shares: 9,
                    asset_price: 274.88,
                    date: 05/20/2019
                }
            },
            watchlist: {
                1: {
                    user_id: 1,
                    asset_id: 1
                }
            },
        ui: {
            loading: false,
        },      
        session: {
            userId: 17
        }
    }