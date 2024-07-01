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
Backup Variante 1:
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/0cde161b-86a9-4e3f-99b5-fa8c5a1187be)
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/71ded4b9-a088-44ff-90f3-56351c148670)
![Screenshot 2024-07-01 133023](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/a728532e-55fc-4c1e-9258-8361eef6fbcc)

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/77f543ed-a79c-42b9-bee7-24253a1c23f7)

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/aab67092-422f-443f-abb3-059a367ac0b8)

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/11c388ec-5c05-4410-b8d4-a433d8d94b72)

Backup Variante 2:







