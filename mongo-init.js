db.createUser(
    {
        user: 'user',
        pwd: 'user',
        roles: [
            {
                role: 'readWrite',
                db: 'sep-2022'
            }
        ]
    }
)
