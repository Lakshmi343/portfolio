import data from "../../data/index.json"

export default function Services() {
  return (
    <section className="services--section" id="myservices">
      <div className="services--container">
   
        <h2 className="services--section--heading">Services</h2>
      </div>
      <div className="services--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="services--section--card">
            <div className="services--section--card--content">
              <h3 className="services--section--title">{item.title}</h3>
              <p className="services--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}