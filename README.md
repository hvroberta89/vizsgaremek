# User Story - Adminisztrátori szerepkör

---

---

## Férj/Feleség kölcsönző

---

> _Az alkalmazás célja, hogy lehetőséget adjon a felhasználóknak a házkörüli feladatok elvégzésében segítséget, illetve szabadidőben alkalmi munkát találni._

---

### _1. Főoldal_

---

**1. Agilis felhasználói történet:**

> _A főoldalon egy rövid ismertetőt követően, 3db-3db kártyán a legfrissebb munka, illetve munkaerő lehetőségek olvashatóak._

**Elfogadási kritérium:**

-  Üdvözlés
-  Rövid ismertető,
-  3db kártya a legfrissebb munkalehetőséggel
-  3db kártya a legújabb munkaerőkkel
-  Bejelentkezési lehetőség

---

### _*2. Bejelentkezési oldal*_

---

**1. Agilis felhasználói történet:**

> _Be lehet jelentkezni az oldalra._

**Elfogadási kritérium:**

-  Űrlapot tartalmaz (felhasználónév és jelszó)
-  A helyes azonosító adatok megadásával be lehet jelentkezni a felületre.
-  A profil nélküli felhasználóknak lehetőségük van regisztrálni.

**2. Agilis felhasználói történet:**

> _A bejelentkezési kísérlet sikeres vagy sikertelen._

**Elfogadási kritériumok:**

-  Sikeres bejelentkezés esetén a Dashboardra navigál
-  Sikertelen bejelentkezés esetén hibaüzenetet jelenít meg

---

### _*3. Dashboard*_

---

**1. Agilis felhasználói történet:**

> _Grafikonok és adatkártyák segítségével láthatóak a legfontosabb mérőszámokat._

**Elfogadási kritériumok:**

-  Intuitív
-  Legfontosabb mutatókat tartalmazza

---

### _*4. Munkalehetőség adatbázis*_

---

**1. Agilis felhasználói történet:**

> _Táblázatos formában láthatóak a munkalehetőségek._

**Elfogadási kritériumok:**

-  A munkák minden adata megjelenik.
-  Tartalmazza:
   -  Munka megnevezését
   -  Munka jellegét
   -  Munkavégzés helyét
   -  Munkavégzés időpontját
   -  Munkavégzés hosszát
   -  Munka státuszát
   -  Munkaadó felhasználó nevét
   -  Elvégző felhasználó nevét

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
   -  Elvégző felhasználó nevét

**3. Agilis felhasználói történet:**

> _Különböző szempontok alapján lehet szűrni a munkalehetőségeket._

**Elfogadási kritériumok:**

-  A szűrési paraméterek minden kategóriát tartalmazzanak
-  Lehetőséget biztosít összetett szűrések elvégzésére

**4. Agilis felhasználói történet:**

> _Különböző kategóriák alapján lehet rendezni a munkalehetőségeket._

**Elfogadási kritériumok:**

-  Minden egyes kategória szerint sorbarendezhető az adatbázis
-  Növekvő és csökkenő sorrendbe is rendezhetőek az adatok

**5. Agilis felhasználói történet:**

> _Új munkalehetőséget lehet felvinni az adatbázisba._

**Elfogadási kritériumok:**

-  Egy üres adatlap jelenik meg az új munkalehetőség felvitelére.
-  Mezők validációja az adatok felvitele során megtörténik.
-  Az adatok bevitele után a munkalehetőségek listája betöltődik újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására és betölti újra az adatbázist.

**6. Agilis felhasználói történet:**

> _Lehet módosítani a munkalehetőségeket._

**Elfogadási kritériumok:**

-  Munkalehetőségek mellett található szerkesztő gombok egy új felületre irányítanak.
-  Mezők validációja az adatok módosítása során megtörténik.
-  Az adatok módosítása után a munkalehetőségek listája betöltődik újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására, ebben esetben az adatok módosítása nélkül betölti újra az adatbázist.

**7. Agilis felhasználói történet:**

> _Lehet törölni a munkalehetőségeket._

**Elfogadási kritériumok:**

-  Munkalehetőségek mellett található törlő gombokkal tudunk egy-egy rekordot törölni.
-  A munkalehetőség törlése után az adatbázis betöltődik újra automatikusan.
-  Van lehetőséget a folyamat megszakítására az adatbázis módosítása nélkül.

---

### _*5. Munkaerő adatbázis*_

---

**1. Agilis felhasználói történet:**

> _Táblázatos formában láthatóak a munkaerők._

**Elfogadási kritériumok:**

-  A munkaerők minden adata megjelenik.
-  Tartalmazza:
   -  Felhasználó nevét
   -  Rendelkezésre állást
   -  Vállalt munkák típusát
   -  Helyét
   -  Értékelés

**2. Agilis felhasználói történet:**

> _Az egyes munkaerőkre kattintva megjelenik egy részletes adatlap a munkáról._

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

> _Különböző szempontok alapján lehet szűrni a munkaerőket._

**Elfogadási kritériumok:**

-  A szűrési paraméterek minden kategóriát tartalmaznak
-  Lehetőséget biztosít összetett szűrések elvégzésére

**4. Agilis felhasználói történet:**

> _Különböző kategóriák alapján lehet rendezni a munkaerőket._

**Elfogadási kritériumok:**

-  Minden egyes kategória szerint sorbarendezhető az adatbázis.
-  Növekvő és csökkenő sorrendbe is rendezhetőek az adatok.

**5. Agilis felhasználói történet:**

> _Új munkaerőket lehet felvinni az adatbázisba._

**Elfogadási kritériumok:**

-  Egy üres adatlap jelenik meg az új munkaerő felvitelére.
-  Mezők validációja az adatok felvitele során megtörténik.
-  Az adatok bevitele után a munkaerők listája betöltődik újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására és betölti újra az adatbázist.

**6. Agilis felhasználói történet:**

> _Lehet módosítani a munkaerőket._

**Elfogadási kritériumok:**

-  Munkaerők mellett található szerkesztő gombok egy új felületre irányítanak.
-  Mezők validációja az adatok módosítása során megtörténik.
-  Az adatok módosítása után a munkalehetőségek listája betöltődik újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására, ebben esetben az adatok módosítása nélkül betölti újra az adatbázist.

**7. Agilis felhasználói történet:**

> _Lehet törölni a munkaerőket._

**Elfogadási kritériumok:**

-  Munkaerő mellett található törlő gombokkal tudunk egy-egy rekordot törölni.
-  A munkaerő törlése után az adatbázis betöltődik újra automatikusan.
-  Van lehetőséget a folyamat megszakítására az adatbázis módosítása nélkül.

---

### _*6. Regisztrált felhasználók adatbázisa*_

---

**1. Agilis felhasználói történet:**

> _Táblázatos formában lehet látni a regisztrált felhasználókat._

**Elfogadási kritériumok:**

-  A felhasználók minden adata megjelenik.
-  Tartalmazza:
   -  Felhasználónevét
   -  Vezeték-, keresztnevét
   -  Nemét
   -  Születési idejét
   -  Email címét
   -  Mobiltelefonszámát

**2. Agilis felhasználói történet:**

> _Különböző szempontok alapján lehet szűrni a felhasználókat._

**Elfogadási kritériumok:**

-  A szűrési paraméterek minden kategóriát tartalmaznak
-  Lehetőséget biztosít összetett szűrések elvégzésére

**3. Agilis felhasználói történet:**

> _Különböző kategóriák alapján lehet rendezni a felhasználókat._

**Elfogadási kritériumok:**

-  Minden egyes kategória szerint sorbarendezhető az adatbázis.
-  Növekvő és csökkenő sorrendbe is rendezhetőek az adatok.

**4. Agilis felhasználói történet:**

> _Új felhasználókat lehet felvinni az adatbázisba._

**Elfogadási kritériumok:**

-  Egy üres adatlap jelenik meg az új felhasználók felvitelére.
-  Mezők validációja az adatok felvitele során megtörténik.
-  Az adatok bevitele után a felhasználók listája betöltődik újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására és betölti újra az adatbázist.

**5. Agilis felhasználói történet:**

> _Lehet módosítani a felhasználókat._

**Elfogadási kritériumok:**

-  A felhasználók mellett található szerkesztő gombok egy új felületre irányítanak.
-  Mezők validációja az adatok módosítása során megtörténik.
-  Az adatok módosítása után a felhasználók listája betöltődik újra automatikusan.
-  Lehetőséget biztosít a folyamat megszakítására, ebben esetben az adatok módosítása nélkül betölti újra az adatbázist.

**6. Agilis felhasználói történet:**

> _Lehet törölni a felhasználókat._

**Elfogadási kritériumok:**

-  Felhasználók mellett található törlő gombokkal tudunk egy-egy rekordot törölni.
-  A felhasználók törlése után az adatbázis betöltődik újra automatikusan.
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
