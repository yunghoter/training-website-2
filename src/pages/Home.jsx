import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero d-flex align-items-center text-center text-white"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/antylope-main.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '85vh'
        }}
      >
        <div className="container">
          <h1 className="display-3 fw-bold mb-3">Антилопа звичайна</h1>
          <h2 className="display-6 mb-4">Vulpes vulpes</h2>
          <p className="lead mb-4">Дуже гарний лісний ссавець</p>
          <Link to="/morphology" className="btn btn-light btn-lg">
            Дізнатися більше →
          </Link>
        </div>
      </section>

      {/* Картки */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Дізнайтесь більше про антилопу</h2>
          <div className="row g-4">
            {[
              { title: "Зовнішній вигляд", link: "/morphology", img: "/images/antylope-head.jpeg" },
              { title: "Харчування", link: "/nutrition", img: "/images/antylope-ears.jpeg" },
              { title: "Ареал та популяція", link: "/population", img: "/images/antylope-tail.jpeg" },
              { title: "Фотогалерея", link: "/photo", img: "/images/antylope-main.jpeg" }
            ].map((item, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card h-100 shadow">
                  <img src={item.img} className="card-img-top" alt={item.title} style={{height: "210px", objectFit: "cover"}} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.title}</h5>
                    <Link to={item.link} className="btn btn-primary mt-auto">Перейти</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;