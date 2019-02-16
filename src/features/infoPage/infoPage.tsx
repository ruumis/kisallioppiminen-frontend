import React from 'react'
import { connect } from 'react-redux'
import Chapter from '../coursePage/components/Chapter'

export function infoPage() {
  const app = () => {
    return (
      <div className="frontPageContainer">
        <h2>Tietoa sivusta</h2>
        <p>
          Tälle sivulle luodaan vuodesta 2015 alkaen uusien lukion opetussuunnitelmien perusteiden mukaisia avoimia oppimateriaaleja matematiikan opiskeluun ja
          opettamiseen. Materiaalit on erityisesti suunniteltu tukemaan tehostetun kisällioppimisen menetelmän käyttöä. Työ tehdään Helsingin kaupungin Mäkelänrinteen
          lukion ja Helsingin yliopiston matematiikan ja tilastotieteen laitoksen välisenä yhteistyönä. Hanketta rahoittaa Teknologiateollisuuden 100-vuotissäätiö.
        </p>
        <Chapter header="MITÄ ON TEHOSTETTU KISÄLLIOPPIMINEN?">
          <div>
            <p>
              Modernit tulkinnat kisällioppimisesta syntyivät 80-luvulla, kun ruvettiin tutkimaan, miten perinteisissä käsityöammateissa käytettyjä oppimisen menetelmiä
              voitaisiin soveltaa formaalissa kouluopetuksessa opetettaviin sisältöihin kuten matematiikkaan, lukemiseen ja kirjoittamiseen. Muun muassa näihin ajatuksiin
              perustui uusi näkökulma oppimiseen, jossa korostettiin oppimistilanteen merkitystä oppimisessa ja ennenkaikkea sitä, ettei oppimistilannetta voi erottaa
              opetettavasta sisällöstä. Esimerkiksi jos matematiikkaa opetetaan luennoimalla, niin oppilas ei ainoastaan opi opettajan esittelemää tietosisältöä, vaan
              oppimistilanteen myötä myös sen, että matematiikkaa opitaan kuuntelemalla opettajaa. Myös ne oppilaat, jotka eivät opi opettajan esittelemiä tietosisältöjä,
              oppivat koko ajan - he oppivat, että eivät ole hyviä matematiikassa, että matematiikka on tylsää, että tärppejä ulkoalukemalla pääsee kokeista läpi ja niin
              edelleen.
            </p>
            <p>
              Tehostetun kisällioppimisen menetelmää ruvettiin näiden ajatuksien pohjalta kehittämään Helsingin yliopiston tietojenkäsittelytieteen laitoksella vuonna
              2010 alkupään ohjelmointikursseja varten. Laitoksella oli havaittu, että oppilaat kyllä oppivat luentomuotoisessa opetuksessa vastaamaan oikein
              kurssikokeisiin, mutta luentotilanne ei varsinaisesti valmistanut heitä ohjelmoinnin osaamiseen. Koska ohjelmointia opitaan ohjelmoimalla, ruvettiin
              opetusjärjestelyitä siirtämään pois luentosaleista ja painopiste opetuksessa siirrettiin opiskelijoiden itsenäisen työskentelyn tukemiseen.{' '}
            </p>
            <p>
              Luonnollisesti tämä vaati opetusjärjestelyiden, materiaalin ja sisältöjen täydellistä uudistamista. Tapa, jolla laskuharjoitusassistentteja käytetään osana
              kursseja, täytyi miettiä täysin uusiksi. Koska opiskelijoiden tekemät tehtävät nousivat niin keskeiseen asemaan, täytyi ne uudistaa ja sisältöjen jaksotusta
              sekä tarkoituksenmukaisuutta jouduttiin kehittämään.{' '}
            </p>
            <p>
              Ohjelmoinnin opetuksesta saatujen hyvien kokemuksien siivittämänä samanlaista ajattelumallia päädyttiin kokeilemaan Helsingin yliopiston matematiikan
              opetuksessa keväällä 2011. Luonnollisesti oppimistilanteet matematiikassa ja ohjelmoinnissa eroavat toisistaan, mutta tehostetun kisällioppimisen menetelmän
              peruselementit pysyvät samoina. Peruselementtejä ovat asiantuntijuuteen kasvaminen henkilökohtaisen ponnistelun kautta ja sen tukeminen opetusjärjestelyin,
              jotka mahdollistavat jatkuvan kaksisuuntaisen palautteen. Matematiikan opetuksessa opetusjärjestelyitä ja tehtäviä piti siis muuttaa, varsinkin kun syksyllä
              2011 menetelmä skaalattiin toimimaan suurilla yli 400 opiskelijan kursseilla. Kehitystyö jatkuu edelleen sekä tietojenkäsittelytieteessä että matematiikan
              opetuksen kehittämisessä, josta jälkimmäistä voi seurata Kumpula opettaa -blogin kautta.{' '}
            </p>
            <p>
              Tehostetun kisällioppimisen menetelmää on kokeiltu myös lukion matematiikan opetuksessa hyvin tuloksin. Jälleen menetelmää on pitänyt muokata sopimaan
              lukion oppimistilanteeseen. Lukiokurssien materiaaleissa etenkin tehtäviä pitää uudistaa soveltuviksi opetusmenetelmälle.
            </p>
            <div>
              <div>AIHEESTA LISÄÄ:</div>
              <ul>
                <li>Vikberg T., Oinonen L. & Rämö J. (2015): Tehostettu kisällioppiminen matematiikan yliopisto-opetuksessa. Yliopistopedagogiikka. </li>
                <li>Lahdenperä J. (2015): Opiskelijoiden matemaattinen osaaminen tehostetun kisällioppimisen menetelmässä. Pro gradu -työ. Helsingin yliopisto.</li>
                <li>Torkkeli M. (2015): Opiskelijoiden kokemukset matematiikan tehostetussa kisällioppimisessa lukiossa. Pro gradu -työ. Helsingin yliopisto.</li>
                <li>
                  Rämö J., Oinonen L. & Vikberg T. (2015). Extreme Apprenticeship – Emphasising Conceptual Understanding in Undergraduate Mathematics. In K. Krainer & N.
                  Vondrová (Eds.), Proceedings of the Ninth Congress of the European Society for Research in Mathematics Education (pp. 2242–2248). Prague: Charles
                  University in Prague, Faculty of Education and ERME.
                </li>
              </ul>
            </div>
          </div>
        </Chapter>
        <Chapter header="BETA-KURSSIHALLINTAPALVELU">
          <div>
            <p>
              Beta-kurssihallintapalvelun avulla opettaja pystyy seuraaman opiskelijoiden edistymistä ja opiskelijat välittämään tietoa siitä miten he kokevat
              hallitsevansa tehtäviä. Palvelun on kehittänyt Helsingin yliopiston tietojenkäsittelytieteen laitoksen opiskelijat osana Ohjelmistotuotantoprojekti-kurssia.
            </p>
            <p>
              Kurssinhallntajärjestelmässä on edelleen ilmeisiä puutteita. Esimerkiksi kurssien päivittyessä vanhojen versioiden merkinnät joudutaan jyräämään, eikä
              palvelu sen takia sovellu opiskelijoiden pitkäaikaiseen kurssien ylittävään seurantaan.
            </p>
            <div>REKISTERÖITYMINEN PALVELUUN</div>
            <p>
              Palvelu edellyttää opettajalta ja opiskelijoilta Google-tunnuksia, joilla rekisteröidytään palveluun. Rekisteröitymisen yhteydessä palvelu saa tiedon
              käyttäjän nimestä ja sähköpostiosoitteesta. Muita tietoja ei kerätä eikä palvelua varten tarvitse luoda omia tunnuksia.
            </p>
            <ul>
              <li>Palvelun käyttöehdot</li>
              <li>Palvelun tietosuojaseloste</li>
            </ul>
            <div>KURSSIN LUONTI</div>
            <p>Rekisteröinnin jälkeen voit luoda kurssihallinta-sivulla uuden kurssin jolla on kurssiavain:</p>
            <p>
              Kun päivität Kurssihallinta-sivun, sivulle ilmestyy tekemäsi kurssi ja sen avain näkyy otsikossa. Painamalla kurssin otsikossa nuolta näet kaikki kurssin
              tehtävät.
            </p>
            <p>Kun opiskelijoita liittyy kurssille ja he rupeavat tekemään tehtäviä, näet heidän edistymisensä paneelissa:</p>
            <p>Kun liikutat hiirtä ruutujen päällä, näet mistä tehtävästä ja kenen vastauksesta on kyse.</p>
            <div>KURSSILLE ILMOITTAUTUMINEN</div>
            <p>Omat kurssit -sivulta voit ilmoittautua kurssille opettajan antaman kurssiavaimen avulla. Kurssin opettaja ei voi liittyä kurssinsa opiskelijaksi.</p>
            <div>OPISKELIJANA KURSSILLA</div>
            <p>Kun opiskelija menee ilmoittautumisen jälkeen kurssille ja avaa tehtävän voi hän valita kolmesta hymynaamasta:</p>
            <ol>
              <li>En osannut tehtävää. Tarvitsen apua.</li>
              <li>Ratkaisin tehtävän, mutta olen epävarma vastauksesta.</li>
              <li>Ratkaisin tehtävän ja osaan tämän.</li>
            </ol>
            <p>Kun opiskelija valitsee jonkin vaihtoehdon, tehtävän otsikko muuttaa väriä. Opiskelija voi jälkeenpäin muuttaa vastaustaan.</p>
            <p>Opiskelija näkee myös omat merkintänsä Omat kurssit -sivulta.</p>
          </div>
        </Chapter>
        <Chapter header="MITÄ OVAT AVOIMET OPPIMATERIAALIT?">
          <div>
            <p>
              Avoimista oppimateriaaleista on joitakin määritelmiä. Käytämme sanaa materiaali, vaikka englanniksi käytetään ehkä yleisemmäksi miellettyä resource-sanaa,
              kokonaisuudessaan open learning resource (OER). Materiaalilla ei siis tarkoiteta yksinomaan oppikirjoja, vaan mitä tahansa opetuksellista materiaalia kuten
              tuntisuunnitelmia, koemateriaaleja, videoita jne. UNESCO määrittelee avoimet oppimateriaalit miksi tahansa koulutukselliseksi materiaaliksi, joka on
              tekijänoikeudetonta tai julkaistu avoimella lisenssillä. UNESCO ei määrittele, mitä lisenssiä tulisi käyttää, mutta lisenssin pitäisi sallia materiaalin
              ilmainen kopiointi, käyttö, muokkaaminen ja uudelleen jakaminen ilman erillistä lupaa. OECD:n CERI-keskus lisää UNESCO:n määritelmään, että materiaalin
              tulee lähtökohtaisesti olla saatavissa verkossa.
            </p>
            <p>
              Vaikka muitakin avoimia lisenssejä on olemassa, niin käytännössä oppimateriaaleille standardiksi on muodostunut Creative Commons, eli CC-lisenssit.
              CC-lisenssijärjestelmä sisältää valmiita lisenssejä, joilla on erilaisia vapausasteita. Kisallioppiminen.fi-sivulla käytämme materiaaleille Creative Commons
              BY-NC-SA-lisenssiä, mikä tarkoittaa, että materiaaleja voi käyttää ja levittää vapaasti, kunhan alkuperäisten tekijöiden nimiä ei poisteta. Jos materiaaliin
              tekee muutoksia ja haluaa levittää muunneltua versiota, se täytyy lisensoida samanlaisella vapaalla lisenssillä. Lisäksi materiaalien käyttö kaupalliseen
              tarkoitukseen on ilman erillistä lupaa kielletty.
            </p>
            <p>
              Periaatteessa kyse on siis vain erilaisesta tavasta lisensoida sisältöä, mutta käytännössä avoimissa oppimateriaaleissa on kyse erilaisesta tavasta tuottaa
              oppimateriaaleja ja jakaa niitä. Avoimella lisenssillä julkaistu sisältö mahdollistaa, että muutkin kuin sisällön alkuperäiset tuottajat jatkavat tuotteen
              kehittämistä. Avoin verkkovälitteinen jakaminen taas haastaa perinteisiä liiketoimintamalleja, jotka ovat perustuneet fyysisten tuotteiden kappalekohtaiseen
              jakelulogiikkaan.
            </p>
            <p>
              Suomalaisille avoin kehittäminen on tuttua ohjelmistokehityksestä, jossa Linus Torvaldsin alullepanema Linux-käyttöjärjestelmä on toiminut suunnannäyttäjänä
              avoimelle lähdekoodille. Avoimen lähdekoodin ympärille on syntynyt harrasteyhteisöjä, kaupallisia yrityksiä sekä muita toimijoita, jotka omaksi ilokseen tai
              liikevoittoa tavoitellen kehittävät ja ylläpitävät avoimia ohjelmistoja. Menestyneiden avoimen lähdekoodin projektien ympärille muodostuneita tuotteita ja
              yhteisöä kutsutaan juhlallisesti ekosysteemiksi, ja usein näiden ekosyysteemien synnyttämiseen panostetaan määrätietoisesti.
            </p>
            <p>
              Miksi näitä ekosysteemejä ei ole juurikaan syntynyt avoimien oppimateriaalien ympärille? Syynä voi olla oppimateriaalien hankkijoiden ja kuluttajien
              tottuminen kappalepohjaisesti hankittaviin oppimateriaaleihin, ja ehkä myös epätietoisuus muista vaihtoehdoista. Kappalepohjaisilla liiketoimintamalliin
              nojaavilla sisällöntuottajilla on tietenkin myös omat intressinsä ylläpitää tätä tilannetta ja muunlaiset hankintaprosessit voivat olla ensi alkuun
              työläitä. Syynä voi myös olla pienen kielialueen tietynlainen muna-kana-ongelma, jossa oppimateriaalien asiakkaat toteavat, ettei laadukasta avointa
              oppimateriaalia ole saatavilla ja oppimateriaalin tuottajat eivät sellaista tuota, kun sille ei ole asiakkaita.
            </p>
            <p>
              Miksi sitten joku haluaisi hankkia tai käyttää avoimia oppimateriaaleja? Yksinkertainen vastaus olisi se, että se on ilmaista, mutta ilmaista se on vasta
              sen jälkeen, kun joku on panostanut siihen huomattavan paljon työpanosta. Miksi siis joku maksaisi siitä, että joku panostaisi avoimiin oppimateriaaleihin?
              Syitä voisivat olla toimittajaloukkujen välttäminen, halu sovittaa materiaalit paikallisiin tarpeisiin tai tarve hyödyntää sitä pedagogiseen kehittämiseen.
            </p>
            <p>
              Toimittajaloukku tarkoittaa tässä tilannetta, jossa oppimateriaalia on mahdollista hankkia vain tietyltä toimittajalta. Tällainen loukku voi syntyä, jos
              käytännössä vain samalla tai samoilla toimittajilla on rahkeita ja kykyä toimia oppimateriaalihankinnassa tarjoajana. Tällainen loukku estää kilpailun, mikä
              helposti näkyy kohonneina kustannuksina ja nostaa kynnystä parantaa materiaaleja. Jos oppimateriaalien hankinta kohdistuisi avoimiin oppimateriaaleihin,
              voisi seuraavana vuonna esimerkiksi kilpailuttaa materiaalin päivittämisen, ja siihen voisi osallistua myös muut kuin alkuperäinen toimittaja. Tilaaja ei
              myöskään olisi sidottu yhden tuottajan kokonaisratkaisuun, vaan voisi esimerkiksi kilpailuttaa materiaalin taiton, painatuksen tai kännykkäaplikaatioksi
              kehittämisen eri toimittajilla.
            </p>
            <p>
              Avoin oppimateriaali antaa paremmat mahdollisuudet sovittaa se paikallisiin tarpeisiin, sillä materiaalin tuottamista ei tarvitse aloittaa alusta.
              Esimerkiksi paikalliset opettajat ja kustantaja voisivat suhteellisen pienellä vaivalla sovittaa oppimateriaalin paikallisen opetussuunnitelman tarpeisiin,
              mikäli se olisi avoimesti lisensoitu. Avoin lisensointi helpottaa myös erinäköisiä pedagogisesti innovatiivisia opetusjärjestelyitä, joissa esimerkiksi
              oppijoilla on mahdollisuus muokata omaa oppimateriaaliaan.
            </p>
            <p>
              Toivomme, että julkaisemalla kisallioppiminen.fi-sivustolle lukion uuden opetussuunitelmien perusteiden mukaiset avoimet oppimateriaalit syntyisi
              ekosysteemi, jossa niitä hyödynnettäisiin ja kehitettäisiin erinäisissä opiskelijan työskentelyä korostavissa pedagogisissa malleissa kuten tehostetussa
              kisällioppimisessa, yksilöllisessä oppimisessa tai käänteisessä oppimisessa. Materiaaleja tullaan jatkuvasti kehittämään kokemuksiemme pohjalta ja toivomme
              myös muilta kommentteja ja konkreettisia muutosehdotuksia GitHub-versionhallintapalveluun.
            </p>
            <div>
              <div>AIHEESTA LISÄÄ:</div>
              <ul>
                <li>
                  Orr,D., M. Rimini & D. van Damme (2015), Open Educational Resources: A Catalyst for Innovation, Educational Research and Innovation, OECD Publishing,
                  Paris. DOI: http://dx.doi.org/10.1787/9789264247543-en{' '}
                </li>
                <li>
                  European Union (2014), Opening up Education - Innovative teaching and learning for all through new technologies and open educational resources,
                  Publications Office of the European Union, Luxembourg. DOI:10.2766/77543
                </li>
                <li>
                  World Open Educational Resources (OER) Congress, UNESCO, Paris, June 20-22, 2012, 2012 PARIS OER DECLARATION
                  http://www.unesco.org/new/fileadmin/MULTIMEDIA/HQ/CI/CI/pdf/Events/English_Paris_OER_Declaration.pdf
                </li>
                <li>Suomen avoimien tietojärjestelmien keskus – COSS ry: Tietoa avoimuudesta https://coss.fi/avoimuus/</li>
                <li>Avoimet oppimateriaalit ry http://avoimetoppimateriaalit.fi/</li>
                <li>Creative Commons Suomi http://creativecommons.fi/</li>
              </ul>
            </div>
          </div>
        </Chapter>
        <Chapter header="TIETOA TEKIJÖISTÄ">
          <div>
            <p>
              Lotta Oinonen on työskennellyt Helsingin yliopiston matematiikan ja tilastotieteen laitoksella tutkimusalanaan matematiikan yliopisto-opetus; tällä hetkellä
              hän keskittyy oppimateriaalien kirjoittamiseen. Hänellä on myös aineenopettajan pätevyys. Hän on toiminut erilaisissa opetustehtävissä Helsingin
              yliopistolla vuodesta 2001 lähtien. Lisäksi hän on toiminut matematiikan ja fysiikan opettajana muun muassa Helsingin ammattikorkeakoulu Stadiassa ja
              sittemmin Metropolia ammattikorkeakoulussa tekniikan ja liikenteen alalla yhteensä kymmenen vuoden ajan vuosien 2001 ja 2013 välillä.
            </p>
            <p>
              Piia Vikberg työskentelee matematiikan ja psykologian päätoimisena tuntiopettajana Mäkelänrinteen lukiossa Helsingissä. Hän opettaa pitkää ja lyhyttä
              matematiikkaa sekä psykologiaa. Hän on opettajajäsenenä Helsingin yliopiston LUMA-keskuksen ja LUMA Suomen alaisuudessa toimivan Summamutikka-keskuksen
              ohjausryhmässä. Lisäksi hän on kirjoittajana MFKA:n matematiikan ylioppilaskokeiden ratkaisukirjoissa.
            </p>
            <p>
              Juulia Lahdenperä työskentelee tohtorikoulutettavana Helsingin yliopiston matematiikan ja tilastotieteen laitoksella tutkimusalanaan yliopistomatematiikan
              opetus ja -oppiminen. Hänellä on myös aineenopettajan pätevyys. Kesällä 2014 hän loi avoimesti lisensoidun toiminnallisen matematiikan materiaalipankin
              Helsingin yliopiston LUMA-keskuksen ja LUMA Suomen alaisuudessa toimivalle Summamutikka-keskukselle. Lisäksi hän on ollut mukana käsikirjoittamassa
              matematiikka-aiheista opetuksellista sarjakuvaa suomalaiselle Clarified Studiolle.
            </p>
            <p>
              Lauri Hellstén työskentelee matematiikan ja fysiikan lehtorina Espoon yhteislyseon lukiossa. Hän kehittää aktiivisesti omaa opetustaan
              opiskelijakeskeisempään suuntaan ja täydennyskouluttaa opettajia mm. tieto- ja viestintäteknologian opetuskäytöstä LUMA-aineissa. Hän on ollut tekemässä
              uusia sähköisiä oppimateriaaleja mm. Opetus.tv ja Polku-verkkopalveluihin.
            </p>
            <p>Thomas Vikberg on matematiikan jatko-opiskelija Helsingin yliopistossa. Hänen tutkimusalansa on yliopisto-opetuksen kehittäminen.</p>
            <p>Sivun tekninen toteutus nojaa Agile Education Research (RAGE) -tutkimusryhmän kehittämän avoimen massiivisen verkkokurssin (MOOC) lähdekoodiin.</p>
          </div>
        </Chapter>
      </div>
    )
  }

  const ConnectedInfoPage = connect()(app)

  return <ConnectedInfoPage />
}
