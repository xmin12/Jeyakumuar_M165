# KN05: Administration von MongoDB

## A) Rechte und Rollen (40%)

### Abgabe

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/842a29cc-3756-448f-81d6-20f355b33a63)

```javascript
use admin

db.createUser({
    user: 'user_2',
    pwd: '1234',
    roles: [
        { role: 'readWrite', db: 'concert' }
    ]
})

use concert

db.createUser({
    user: 'user_1',
    pwd: '1234',
    roles: [
        { role: "read", db: "concert" }
    ]
})
````

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/a5ba2ec4-5289-48ef-a65a-a499661d5ad7)

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/3078c68c-75c2-4005-adad-85769a0ddd8c)

## B) Backup und Restore (40%)

### Abgaben

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/1df4ae84-5130-4e4c-aab7-93055abf97d8)

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/0cde161b-86a9-4e3f-99b5-fa8c5a1187be)

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/b48abe1b-971b-415b-9661-5459acf0972e)

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/c76db7ea-2706-483d-a15a-6b0a230d67dc)

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/0c7342bf-214f-4fe1-8de6-6c7d0c1502aa)






