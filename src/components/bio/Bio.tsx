import "./style.css";

type Props = {};

const Bio = (props: Props) => {
  return (
    <div id="bio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Bio</h2>
          <p>
            Hi There! I'm Maxime! 👋
            <br />
            <br />
            I'm a multilingual very curious individual with a background encompassing competitive swimming, athletics, sports science, coaching, homebrewing, language instruction... and software development! I'm always looking for opportunities to grow, striving to explore my potential but others as well!
            <br /><br />
            I've been focusing mostly on full stack web development, with technologies including Javascript/Typescript (React with Vite, Next.js, Node.js, NestJS), Python and .NET (C#). I am familiar with both NoSQL (MongoDB) and SQL (PostgresSQL, MS SQL) Databases and their respective Object Document Mapper and Object Relational Mapping. I also have experience in testing and quality assurance.
            <br />
            <br />
            This page is made with <a href="https://vitejs.dev/">Vite</a> development server with <a href="https://react.dev/">React</a> + TS Template, and designed with <a href="https://getbootstrap.com/">Bootstrap</a>.
            <br /><br />
            Scroll down or navigate to my Projects to see what I've come up thus far on my own. I'm also looking to participate into some collaborative projects in my spare time.
            <br /><br />
            If I'm not working on my computer, I'm probably around attending to my beers fermenting (but also make kombucha, kefir...), training for the World Swimming Masters Swimming Championships (or simply for pleasure...), on my bike going somewhere, mixing some music, learnign something new or taking care of the house!
            <br /><br />
            At the bottom of this page you'll find ways to reach out to me. Hope we can chat soon!
          </p>
        </div>
        {/* <div className="row">
          <div className="bio-items">
            {props.data
              ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                >
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                  />
                </div>
              ))
              : "Loading..."}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Bio;