# KN05: Administration von MongoDB

## A) Rechte und Rollen (40%)

## Abgabe
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/842a29cc-3756-448f-81d6-20f355b33a63)

> created user and admin
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

## Abgaben
###Backup Variante 1:
> Bakingup in AWS TERMINAL
- before deleting 
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/0cde161b-86a9-4e3f-99b5-fa8c5a1187be)

- created snapshots
![Screenshot 2024-07-01 133023](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/a728532e-55fc-4c1e-9258-8361eef6fbcc)

- after deleting
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/71ded4b9-a088-44ff-90f3-56351c148670)

- restoring
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/77f543ed-a79c-42b9-bee7-24253a1c23f7)

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/aab67092-422f-443f-abb3-059a367ac0b8)

- restored DB
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/11c388ec-5c05-4410-b8d4-a433d8d94b72)

### Backup Variante 2:
> backuping MongoCommpas GUI
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/9fb02b58-0b9b-463e-8b4f-683c5d8615a8)
before deleting
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/d9e6d676-21a8-463c-9a4d-c1829956ace0)

creating dump 
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/4c361606-84a0-4f12-9cf3-16d6777335a3)

after deleting 
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/9d089a31-5a0b-4547-98eb-d9ea683be8cc)
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/534500f4-04b2-4888-bc58-5b0fff4d14f1)

restored backup
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/f589baf2-16b4-4de1-862a-9ff70ae4e86c)
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/db079d07-de97-4799-a740-cd8cc90d772e)

creating dump
```
sudo mongodump -v --username backUser --password 1234
```
restoring
```
 mongorestore ./dump --username restoreUser --password 1234
```

## Abgabe
## C) Skalierung (20%)
- Replikation
> Replikation bedeutet, dass Daten von einem Hauptserver auf mehrere andere Server kopiert werden. Das sorgt dafür, dass die Daten immer verfügbar sind und schneller gelesen werden können. Wenn der Hauptserver ausfällt, übernimmt einer der anderen Server automatisch. Die zusätzlichen Server können auch genutzt werden, um die Leseanfragen zu verteilen und zu beschleunigen.
 
- Partition
> Partition teilt eine grossee Datenbank in kleinere Teile, sogenannte Shards, um die Datenbank effizienter zu machen. Jeder Shard enthält einen Teil der gesamten Daten, wodurch die Last auf einzelne Server verteilt wird. Das verbessert die Leistung und erlaubt es der Datenbank, mehr Daten zu verwalten. Allerdings erfordert Sharding eine sorgfältige Verwaltung, um sicherzustellen, dass die Daten gleichmässig und sinnvoll verteilt sind.
 
- Empfehlung an Firma:
> Ich schlage vor, dass wir Replikation einführen, um unsere Datenbank robuster und schneller zugänglich zu machen. Ausserdem sollten wir Partition nutzen, um besser mit grosse Datenmengen und vielen Anfragen umgehen zu können.






