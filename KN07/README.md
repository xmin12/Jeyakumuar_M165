# KN07: Installation und Datenmodellierung für Neo4j

## Installation / Account erstellen (30%)
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/6c2f45ec-de28-4d7f-8305-79255553f6f4)
- installed Neo4j aura

## B) Logisches Modell für Neo4j (70%)
### Mein Bild des logischen Datenmodells.
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/d604c814-0481-4edb-a9a1-d703968ef924)

- Original-Datei siehe im Repo.
- Erklärung zu den Attributen und wieso diese auf die entsprechenden Knoten und Kanten
verteilt wurden
#### **Knoten (Nodes)**

1. **Fans**
   - **_id:** UUID
   - **email:** string
   - **password:** string

   **Erklärung:** 
   - **_id:** Eindeutige Identifikation jedes Fans.
   - **email:** Wichtige Information für Kontakt und Authentifizierung.
   - **password:** Erforderlich für die sichere Anmeldung.

   **Verteilung:** Die Attribute beschreiben die grundlegenden Eigenschaften und Identifikationsmerkmale eines Fans. Sie sind daher auf den Knoten "Fans" verteilt.

2. **Cds**
   - **_id:** UUID
   - **title:** string
   - **price:** float
   - **description:** string

   **Erklärung:** 
   - **_id:** Eindeutige Identifikation jeder CD.
   - **title:** Notwendig zur Beschreibung des Produkts.
   - **price:** Wichtig für die Kauftransaktion.
   - **description:** Detaillierte Beschreibung der CD.

   **Verteilung:** Diese Attribute beschreiben die Produktinformationen einer CD. Daher sind sie auf dem Knoten "Cds" angesiedelt.

3. **Invoice**
   - **_id:** UUID
   - **refNumber:** int
   - **netPrice:** float
   - **dueDate:** Date

   **Erklärung:** 
   - **_id:** Eindeutige Identifikation jeder Rechnung.
   - **refNumber:** Referenznummer für die Zuordnung.
   - **netPrice:** Der zu zahlende Betrag.
   - **dueDate:** Fälligkeitsdatum der Zahlung.

   **Verteilung:** Die Attribute gehören zu den Rechnungsdetails, die für die Abwicklung und Nachverfolgung von Zahlungen notwendig sind, daher sind sie auf dem Knoten "Invoice" verteilt.

4. **ConcertTicket**
   - **_id:** UUID
   - **fanId:** FANId
   - **purchaseDate:** Date
   - **isDelivered:** boolean
   - **cds:** Array<CDId>

   **Erklärung:** 
   - **_id:** Eindeutige Identifikation jedes Tickets.
   - **fanId:** Referenz zu dem Fan, der das Ticket gekauft hat.
   - **purchaseDate:** Datum des Ticketkaufs.
   - **isDelivered:** Status der Lieferung.
   - **cds:** Liste der CDs, die mit dem Ticket verbunden sind.

   **Verteilung:** Die Attribute beschreiben die Kaufdetails und den Status des Tickets und sind daher auf dem Knoten "ConcertTicket" verteilt.

#### **Kanten (Relationships)**

1. **Fans --> ConcertTicket**
   - **Erklärung:** Diese Kante zeigt die Beziehung, dass ein Fan ein oder mehrere Konzerttickets kaufen kann.

   **Verteilung:** Die Kante verbindet den Knoten "Fans" mit dem Knoten "ConcertTicket" und verdeutlicht die Beziehung des Besitzens und Kaufens.

2. **Cds --> ConcertTicket**
   - **Erklärung:** Diese Kante zeigt, dass Konzerttickets mit CDs verbunden sein können.

   **Verteilung:** Die Kante verbindet den Knoten "Cds" mit dem Knoten "ConcertTicket" und verdeutlicht die Beziehung, dass Tickets mit bestimmten CDs gebündelt sein können.

3. **ConcertTicket --> Invoice**
   - **Erklärung:** Diese Kante zeigt die Beziehung, dass zu jedem Ticket eine Rechnung gehört.

   **Verteilung:** Die Kante verbindet den Knoten "ConcertTicket" mit dem Knoten "Invoice" und verdeutlicht die Beziehung, dass jedes Ticket eine zugehörige Rechnung hat.

