# User Story - Adminisztrátori szerepkör

---

---

## Férj/Feleség kölcsönző

---

> _Az alkalmazás célja, hogy segítséget nyújtson a felhasználóknak a házkörüli feladatok elvégzésében segítséget, illetve szabadidőben alkalmi munkát találni._

---

### _1. Főoldal_

---

**1. Agilis felhasználói történet:**

> _A főoldalon egy rövid ismertetőt követően, 3db-3db kártyán a legfrissebb munka, illetve munkaerő lehetőségek olvashatóak._

**Elfogadási kritérium:**

-  üdvözlés
-  rövid ismertető,
-  3db kártya a legfrissebb munkalehetőséggel
-  3db kártya a legújabb munkaerőkkel
-  bejelentkezési lehetőség

### _*2. Bejelentkezési oldal*_

---

**1. Agilis felhasználói történet:**

> _Szeretnék bejelentkezni az oldalra._

**Elfogadási kritérium:**

-  Űrlapot tartalmaz (felhasználónév és jelszó)
-  A helyes azonosító adatok megadásával be lehet jelentkezni a felületre.
-  A profil nélküli felhasználóknak lehetőségük van regisztrálni.

**2. Agilis felhasználói történet:**

> _Az bejelentkezési kísérletem sikeres vagy sikertelen._

**Elfogadási kritériumok:**

-  Sikeres bejelentkezés esetén a Dashboardra navigál
-  Sikertelen bejelentkezés esetén hibaüzenetet jelenít meg

---

### _*3. Dashboard*_

---

**1. Agilis felhasználói történet:**

> _Grafikonok és adatkártyák segítségével szeretném látni a legfontosabb mérőszámokat._

**Elfogadási kritériumok:**

-  Intuitív
-  Legfontosabb mutatókat tartalmazza

---

### _*4. Munkalehetőség adatbázis*_

---

**1. Agilis felhasználói történet:**

> _Táblázatos formában szeretném látni a munkalehetőségeket._

**Elfogadási kritériumok:**

-  A munkák minden adata jelenjen meg.
-  Tartalmazza:
   -  Munka megnevezését
   -  Munka jellegét
   -  Munkavégzés helyét
   -  Munkavégzés időpontját
   -  Munkavégzés hosszát
   -  Munka státuszát
   -  Munkaadó felhasználó nevét

**2. Agilis felhasználói történet:**

> _Az egyes munkalehetőségekre kattintva megjelenik egy részletes adatlap a munkáról._

**Elfogadási kritérium:**

-  Csak a választott munka részletes adatait jeleníti meg.
-  Tartalmazza:
   -  Munka megnevezését
   -  Munka jellegét
   -  Munka leírását
   -  Munkavégzés helyét
   -  Munkavégzés időpontját
   -  Munkavégzés hosszát
   -  Munka eszköz szükségletét
   -  Munka bérezését
   -  Bér
   -  Munka státuszát
   -  Munkaadó felhasználó nevét

**3. Agilis felhasználói történet:**

> _Különböző szempontok alapján szeretném szűrni a munkalehetőségeket._

**Elfogadási kritériumok:**

-  A szűrési paraméterek minden kategóriát tartalmazzanak
-  Lehetőséget biztosít összetett szűrések elvégzésére

**4. Agilis felhasználói történet:**

> _Különböző kategóriák alapján lehet rendezni a munkalehetőségeket._

**Elfogadási kritériumok:**

-  Minden egyes kategória szerint legyen sorbarendezhető az adatbázis
-  Növekvő és csökkenő sorrendbe is legyenek rendezhetőek az adatok

**5. Agilis felhasználói történet:**

> _Szeretnék új munkalehetőséget felvinni az adatbázisba._

**Elfogadási kritériumok:**

-  Egy üres adatlap jelenik meg az új munkalehetőség felvitelére.
-  Mezők validációja az adatok felvitele során megtörténik.
-  Az adatok bevitele után a munkalehetőségek listája töltődjön be újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására és betölti újra az adatbázist.

**6. Agilis felhasználói történet:**

> _Szeretném módosítani az egyik munkalehetőséget._

**Elfogadási kritériumok:**

-  Mezők validációja az adatok módosítása során megtörténik.
-  Az adatok módosítása után a munkalehetőségek listája töltődjön be újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására, ebben esetben az adatok módosítása nélkül betölti újra az adatbázist.

**7. Agilis felhasználói történet:**

> _Szeretném törölni az egyik munkalehetőséget._

**Elfogadási kritériumok:**

-  A munkalehetőség törlése után az adatbázis töltődjön be újra automatikusan.
-  Adjon lehetőséget a folyamat megszakítására az adatbázis módosítása nélkül.

---

### _*5. Munkaerő adatbázis*_

---

**1. Agilis felhasználói történet:**

> _Táblázatos formában szeretném látni a munkaerőket._

**Elfogadási kritériumok:**

-  A munkaerők minden adata jelenjen meg.
-  Tartalmazza:
   -  Felhasználó nevét
   -  Rendelkezésre állást
   -  Vállalt munkák típusát
   -  Helyét
   -  Értékelés

**2. Agilis felhasználói történet:**

> _Az egyes munkalehetőségekre kattintva megjelenik egy részletes adatlap a munkáról._

**Elfogadási kritérium:**

-  Csak a választott munka részletes adatait jeleníti meg.
-  Tartalmazza:
   -  Felhasználó nevét
   -  Rendelkezésre állást
   -  Vállalt munkák típusát
   -  Helyét
   -  Értékelés
   -  Vélemények

**3. Agilis felhasználói történet:**

> _Különböző szempontok alapján szeretném szűrni a munkaerőket._

**Elfogadási kritériumok:**

-  A szűrési paraméterek minden kategóriát tartalmazzanak
-  Lehetőséget biztosít összetett szűrések elvégzésére

**4. Agilis felhasználói történet:**

> _Különböző kategóriák alapján lehet rendezni a munkaerőket._

**Elfogadási kritériumok:**

-  Minden egyes kategória szerint legyen sorbarendezhető az adatbázis.
-  Növekvő és csökkenő sorrendbe is legyenek rendezhetőek az adatok.

**5. Agilis felhasználói történet:**

> _Szeretnék új munkaerőket felvinni az adatbázisba._

**Elfogadási kritériumok:**

-  Egy üres adatlap jelenik meg az új munkaerő felvitelére.
-  Mezők validációja az adatok felvitele során megtörténik.
-  Az adatok bevitele után a munkaerők listája töltődjön be újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására és betölti újra az adatbázist.

**6. Agilis felhasználói történet:**

> _Szeretném módosítani az egyik munkaerőket._

**Elfogadási kritériumok:**

-  Mezők validációja az adatok módosítása során megtörténik.
-  Az adatok módosítása után a munkalehetőségek listája töltődjön be újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására, ebben esetben az adatok módosítása nélkül betölti újra az adatbázist.

**7. Agilis felhasználói történet:**

> _Szeretném törölni az egyik munkaerőt._

**Elfogadási kritériumok:**

-  A munkaerő törlése után az adatbázis töltődjön be újra automatikusan.
-  Adjon lehetőséget a folyamat megszakítására az adatbázis módosítása nélkül.

---

### _*6. Regisztrált felhasználók adatbázisa*_

---

**1. Agilis felhasználói történet:**

> _Táblázatos formában szeretném látni a regisztrált felhasználókat._

**Elfogadási kritériumok:**

-  A felhasználók minden adata jelenjen meg.
-  Tartalmazza:
   -  Felhasználónevét
   -  Vezeték-, keresztnevét
   -  Nemét
   -  Születési idejét
   -  Email címét
   -  Mobiltelefonszámát

**2. Agilis felhasználói történet:**

> _Különböző szempontok alapján szeretném szűrni a felhasználókat._

**Elfogadási kritériumok:**

-  A szűrési paraméterek minden kategóriát tartalmazzanak
-  Lehetőséget biztosít összetett szűrések elvégzésére

**3. Agilis felhasználói történet:**

> _Különböző kategóriák alapján lehet rendezni a felhasználókat._

**Elfogadási kritériumok:**

-  Minden egyes kategória szerint legyen sorbarendezhető az adatbázis.
-  Növekvő és csökkenő sorrendbe is legyenek rendezhetőek az adatok.

**4. Agilis felhasználói történet:**

> _Szeretnék új felhasználókat felvinni az adatbázisba._

**Elfogadási kritériumok:**

-  Egy üres adatlap jelenik meg az új felhasználók felvitelére.
-  Mezők validációja az adatok felvitele során megtörténik.
-  Az adatok bevitele után a felhasználókat listája töltődjön be újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására és betölti újra az adatbázist.

**5. Agilis felhasználói történet:**

> _Szeretném módosítani az egyik felhasználót._

**Elfogadási kritériumok:**

-  Mezők validációja az adatok módosítása során megtörténik.
-  Az adatok módosítása után a felhasználók listája töltődjön be újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására, ebben esetben az adatok módosítása nélkül betölti újra az adatbázist.

**6. Agilis felhasználói történet:**

> _Szeretném törölni az egyik felhasználót._

**Elfogadási kritériumok:**

-  A munkaerő törlése után az adatbázis töltődjön be újra automatikusan.
-  Adjon lehetőséget a folyamat megszakítására az adatbázis módosítása nélkül.

---

### _*Projekt egyéb adatai*_

**Felhasználói felület:**

-  Reszponzív megjelenés
-  Intuitív kezelői felület

**Prioritás:**

> magas

**Megvalósítás időtartama:**

> 5 hét

**További fejlesztési lehetőségek:**

-  Cégek adatbázisának létrehozása
-  Részletes értékelést lehessen adni mind a munkaerőről, mind a munkaadóról
