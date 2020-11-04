db.createUser(
    {
        user: "ada",
        pwd: "password",
        roles: [
            {
                role: "readWrite",
                db: "demurr-app-db"
            }
        ]
    }
);