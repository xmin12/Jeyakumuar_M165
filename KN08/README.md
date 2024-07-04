# KN08: Datenabfrage und -Manipulation

## A) Daten hinzufügen (20%)
- Siehe "creat_script.txt" im Repo.
> Ich wollte mit mehr Objekte pro Label brauchen statt 3-5 ich habe mit 10 Objekte gearbeitet.

## B) Daten abfragen (20%)

> Alle Bestellungen, die von 2024 kommen
```
MATCH (o:Order)
WHERE o.orderDate >= date('2024-01-01')
RETURN o
````
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/8a0a21b5-6824-4d8b-8664-f85e4c58e13f)

> Alle Invoices, die nicht bezahlt sind

```
MATCH (i:Invoice)
WHERE i.payDate IS NULL
RETURN i
````
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/1bb3f310-1fbb-425c-83a3-0a07c8497cb5)


> Alle Kunden und ihre Id sowie Email (Abfragung für Backend)

```
MATCH (c:Customer)
RETURN c.id, c.email
````
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/13955f93-a711-4dbe-bb83-6450b7e8f775)


> Anzahl der verkauften Produkte

```
MATCH (:Order)-[:hasProduct]->(p:Product)
RETURN COUNT(p)
````
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/1fc99d5c-7964-4895-be82-3e20a49ff06b)

## C) Daten löschen (20%)

#### Ohne DETACH
````
MATCH (n:Customer)
WHERE n.email = 't@g.com'
DELETE n;
````
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/33c88b4c-c13d-41d1-b19f-37b12bb8b242)

> Erklärung:

- Vor der Ausführung des DELETE-Statements war der Knoten für den Kunden mit der E-Mail 't@g.com' noch vorhanden.
- Nach der Ausführung des Statements wurde der Knoten für den Kunden gelöscht. Alle Beziehungen zu diesem Kunden wurden ebenfalls entfernt.

#### Mit DETACH
````
MATCH (n:Customer)
WHERE n.email = 't@g.com'
DETACH DELETE n;
````
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/55a610d2-6566-4254-b28a-5f15f9a9410a)

> Erklärung:

- Vor der Ausführung des DETACH DELETE-Statements war der Knoten für den Kunden mit der E-Mail 't@g.com' noch vorhanden.
- Nach der Ausführung des Statements wurde der Knoten für den Kunden gelöscht. Alle Beziehungen zu diesem Kunden wurden ebenfalls entfernt, und zwar unabhängig davon, ob es sich um eingehende oder ausgehende Beziehungen handelte.

## D) Daten verändern (20%)

### Szenario 1: Zusammenführung von Kundenprofilen

- Beschreibung:
- Zwei Kundenprofile ('anna@gmail.com' und 'alex@example.com') sollen zusammengeführt werden, indem das Kunden-ID-Feld von 'anna@gmail.com' auf die ID von 'alex@example.com' gesetzt wird. Dies wird durchgeführt, um redundante Profile zu vermeiden und die Datenintegrität zu verbessern.
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/48746366-8f88-4d83-8f22-e2aad8b9ad0e)

### Szenario 2: Rückzahlung einer Rechnung

-Beschreibung: 
Die Zahlungsinformationen für eine spezifische Rechnung mit der Referenznummer '99887766' sollen entfernt werden, indem das Zahlungsdatum auf null gesetzt wird.
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/c8cd2fc6-c1eb-4cf4-8e21-f2f0fe43331b)

### Szenario 3: Aktualisierung des Preises eines Produkts in einer Produktliste.
- Beschreibung:
- Der Preis des Produkts "Teapot" soll von 418.0 auf 429.0 aktualisiert werden.
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/e4516690-bf1f-4d4b-81d4-6b94ced35ad6)


## E) Zusätzliche Klauseln (20%)
#### 1. Produkte erstellen:

- Ich erstelle neue Produkte ('Keyboard', 'Mouse', 'Monitor') in unserer Neo4j-Datenbank. Falls diese Produkte noch nicht existieren, werden sie neu erstellt und mit einer zufälligen UUID, einem Preis von 0.0 und einer Standardbeschreibung versehen.
````
UNWIND ['Keyboard', 'Mouse', 'Monitor'] AS productName
MERGE (p:Product {name: toLower(productName)}) 
ON CREATE SET p.id = randomUUID(), p.price = 0.0, p.description = 'Default description';
````
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/c000a1f6-49d9-49f3-9663-4bfea56db6e8)

#### 2. Kunden finden, die mindestens eine Bestellung aufgegeben haben

- Ich suche nach Kunden, die mindestens eine Bestellung aufgegeben haben, und gebe deren E-Mail-Adressen zurück.
````
MATCH (c:Customer)-[:hasOrder]->()
RETURN c.email AS customerEmail;
````
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/2dc190bf-8782-482a-ac8d-74c23c3e9d18)

