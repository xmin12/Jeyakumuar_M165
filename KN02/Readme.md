# KN02: Datenmodellierung für MongoDB

## A) Konzeptionelles Datenmodell (40%)


> Modell KMD

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/e5dd07f9-ebf5-4693-80a0-a6eeafaad555)

#### In diesem Szenario entsprechen Fans den Kunden, die Konzerttickets kaufen. Jedes Ticket führt zu einer Rechnung. Zwischen Tickets und CD gibt es eine komplexe Beziehung: Tickets können verschiedene CD enthalten, die bei verschiedenen Veranstaltungen verkauft werden können.

## B) Logisches Modell für MongoDB (50%)

> Modell LGM

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/da208443-200b-4bea-b97e-82421f9b8231)


#### Die gewählte Variante verwendet Verschachtelungen, um eine natürlichere und effizientere Datenmodellierung zu erreichen. Dadurch können Beziehungen zwischen Entitäten wie Fans (Customers), Konzerttickets (ConcertTickets) und CDs klar dargestellt werden, ohne die Notwendigkeit einer separaten Verknüpfungstabelle für viele-zu-viele-Beziehungen. Dies verbessert die Datenintegrität und vereinfacht Abfragen, indem alle relevanten Informationen in den jeweiligen Dokumenten gespeichert werden.


## C) Anwendung des Schemas in MongoDB (10%)

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/594af9f4-a35b-481e-b9d6-c93866aed831)
![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/e67b9b36-89ef-4ac5-886d-fa59c2691de2)
