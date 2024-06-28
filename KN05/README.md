# KN05: Administration von MongoDB


![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/842a29cc-3756-448f-81d6-20f355b33a63)

´´´
use admin

db.createUser({
    user: 'user_2',
    pwd: '1234',
    roles: [
        {role: 'readWrite', db: 'concert'}
    ]
})

use concert

db.createUser({
    user: 'user_1',
    pwd: '1234',
    roles: [
        {role: "read", db: "concert"}
    ]
})
´´´


