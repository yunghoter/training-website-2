function Photo() {
  return (
    <div className="container py-5">
      <h1 className="display-5 text-center mb-5">Фотогалерея антилоп</h1>

      <div id="foxCarousel" className="carousel slide shadow-lg" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#foxCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#foxCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#foxCarousel" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#foxCarousel" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#foxCarousel" data-bs-slide-to="4"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/antylope-ears.jpeg" className="d-block w-100 rounded" alt="Антилопа в лісі" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Антилопа в лісі</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/antylope-head.jpeg" className="d-block w-100 rounded" alt="Антилопа з рогами" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Антилопа з рогами</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/antylope-image" className="d-block w-100 rounded" alt="Антилопи ніжаться" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Антилопи ніжаться</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/antylope-main.jpeg" className="d-block w-100 rounded" alt="Рогата антилопа в пустелі" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Рогата антилопа в пустелі</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/antylope-tail.jpeg" className="d-block w-100 rounded" alt="Антилопа в пустелі" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Антилопа в пустелі</h5>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#foxCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#foxCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default Photo;