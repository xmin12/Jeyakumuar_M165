# Jeyakumuar_M165

# KN01: Installation und Verwaltung von MongoDB


## A) Installation (40%)

![Screenshot 2024-05-27 144016](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/f79231f9-f84a-4ad2-9ba2-331280a8afe8)

![Screenshot 2024-05-27 144153](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/be09d855-ada1-4d2b-8726-db4f05d2bce6)

### Connection String
mongodb://admin:1234@5.173.72.195:27017/? authSource=admin&readPreference=primary&ssl=false

Der authSource-Parameter gibt an, welche Database für die Authentifizierung verwendet wird. Standardmässig ist dies die "admin"-Collection.

### Linux Befehl sed
Der sed-Befehl sucht einen Textabschnitt und überschreibt ihn mit einem neuen Wert. Dies ermöglicht das automatische Bearbeiten von Dateien, ohne dass manuell Text geändert werden muss. Mit 0.0.0.0 wird MongoDB angewiesen, auf allen Netzwerken sichtbar zu sein, während 127.0.0.1 den Zugriff auf das lokale Gerät (localhost) beschränkt. Das Skript soll ausserdem die Sicherheitsfunktionen von MongoDB aktivieren.

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/a2b83710-9c48-44d8-8e25-215011d326e5)


# B) Erste Schritte GUI (40%)

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/1aa60698-8a23-4f48-a110-80ac8734047f)

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/8591cfac-0e76-45b9-953d-a1cedebdfcde)

## Export Datei
### Erklärung zu Datentyp:
> String: Einfache Textdarstellung des Datums (z.B. "2023-01-01").
> Date: Spezifischer Datentyp für Datum und Zeit, ermöglicht zeitbasierte Operationen und Vergleiche (z.B. ISODate("2023-01-01T00:00:00Z")).

# C) Erste Schritte Shell (20%)

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/52a40f37-620a-4900-a7ea-d8c1d0c01b50)

![image](https://github.com/xmin12/Jeyakumuar_M165/assets/112725311/2d408cf6-4263-41ca-b709-cebc446abc58)

## Erklärung der Befehle
1. Listet alle vorhandenen Datenbanken auf, welche auf dem MongoDB Server sind
2. Ist der gleiche Befehl wie 1. einfach in einer anderen Schreibweise
3. Dieser Befehl wechselt den Kontext zu der angegebenen Datenbank
4. Dieser Befehl zeigt die liste aller vorhandenen Kollektionen n der aktiven DAtenbank
5. Dieser Befehl ist der selbe wie 4. aber er ist nicht für MongoDB geeignet



