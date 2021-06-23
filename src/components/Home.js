const Home = () => {
  return (
    <div className="home-wrapper">
      <h1 className="main-heading color-heading">CASA Website</h1>
      <div className="home">
        <h1>CASA - Das „grüne Haus“ wird bunt!</h1>
        <br />
        <h2>Neueröffnung am 03.+04. September</h2>
        <br />
        {/* <div id="logo-wrapper">
          <h1 className="logo">
            <span className="logo_clr1">C</span>
            <span className="logo_clr2">A</span>
            <span className="logo_clr3">S</span>
            <span className="logo_clr4">A</span>
          </h1>
        </div> */}
        <div className="home-article">
          <p>
            Maria Dardis-Ulbrich mit ihrem Casa Verde ist seit 2001 weithin
            bekannt für außergewöhnliche Blumengestaltung. Nach einem Jahr Pause
            eröffnet sie mit ihrem Partner Sven Wacker das CASA mit neuem
            Konzept, um Raum für Kunst und Kreatives, Workshops und Vorträge,
            Tanz und Bewegung sowie Wissenschaft und Technik zu schaffen.
          </p>
          <p>
            Die Begegnung mit der Pilates- und Gymnastiklehrerin Birgit Hemmer
            trägt dazu bei, dass beide Frauen nun ihre Träume erfüllen können.
            Zusammen mit Sven Wacker bilden sie das Initiativteam und gestalten
            das neue CASA bis September um. Der ehemalige Verkaufsraum wird nun
            zu einer freien Fläche mit toller Atmosphäre.
          </p>
          <p>
            Hier bietet Birgit Hemmer Unterricht in Ballett, Pilates und Barre
            Workout an. Kinder, Jugendliche und Erwachsene können in
            verschiedenen Altersgruppen jede Woche trainieren und tanzen.
            Besonders erwachsene Einsteigerinnen, Ältere, aber auch
            Fortgeschrittene dürfen sich trauen, das neue tänzerische Training
            an der Stange und am Boden auszuprobieren. Dafür wurde das Haus
            eigens mit Schwingboden, Spiegelwand und Ballettstangen
            ausgestattet.
          </p>
          <p>
            Der Ingenieur und Entwickler Sven Wacker kümmert sich im neuen Casa
            um die Technik sowie die Gestaltung der Webseite. Er unterstützt
            Maria und ist offen für weitere Themen rund um Gesundheit, Natur,
            Wissenschaft, Technik und das Handwerk.
          </p>
          <p>
            Mit bunter Vielfalt öffnet das CASA auch für Gäste mit neuen Ideen:
            externe Interessenten sind eingeladen, die Räumlichkeiten sowie den
            Außenbereich zu mieten und das CASA als Plattform zu nutzen. Zum
            Beispiel könnte draußen ein regionaler Obststand, ein
            Kunsthandwerkermarkt, im Innenbereich eine Kunstausstellung oder
            eine kleine Hochzeitsmesse stattfinden.
          </p>
          <p>
            In der CASA-Kreativwerkstatt wird sich Maria Dardis-Ulbrich
            weiterhin um Bestellungen kümmern, ausgewählte Blumenkreationen,
            eine nochmals erweiterte Blumenstation und Blumenworkshops anbieten.
            Das neue bunte CASA soll neben der Blumenkunst ein Forum sein für
            Gestaltung, Bewegung und Begegnung.
          </p>
        </div>
        <img
          className="casa-image"
          src={`${process.env.PUBLIC_URL}/#casa.jpg`}
          alt="Foto von den Drei vom Casa"
        />
      </div>
    </div>
  );
};

export default Home;
