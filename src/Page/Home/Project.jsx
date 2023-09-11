import data from "../../data/index.json"




export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title"> My Portfolio </p>
          <h2 className="section--heading">Recent Projects</h2>
         
        </div>
        <div>
          <button className="btn btn-github"> <a href="https://github.com/Lakshmi343">
             
            Visit My GitHub</a>
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        { data?.porject?.map((item, index) => {
          console.log(item.src);
          return(

            
            <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={`images/${item.src}`} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                {item.link}
                
              </p>
            </div>
          </div>
        )
          })}
      </div>
    </section>
  );
}