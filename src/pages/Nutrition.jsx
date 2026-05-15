function Nutrition() {
  return (
    <div className="container py-5">
      <h1 className="display-5 text-center mb-5">Харчування антилоп</h1>

      <div className="text-center mb-5">
        <img src="/images/antylope-main.jpeg" className="img-fluid rounded shadow" alt="Лисиця на полюванні" style={{maxHeight: '500px'}} />
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h3>Тип харчування</h3>
          <p>Антилопи — <strong>травоїдні тварини</strong>. Основу раціону складають трав'яні продукти.</p>

          <h4 className="mt-4">Основний раціон:</h4>
          <ul className="list-group">
            <li className="list-group-item">Більшу частину дня гарни жують жуйку, лежачи у затінку.)</li>
            <li className="list-group-item">Раціон антилопи залежить від пори року, загалом це трава і їй подібні.</li>
            <li className="list-group-item">Ласує корінцями, які видобуває, розкопуючи землю копитами або носом.</li>
          </ul>

          <div className="mt-5 p-4 bg-light rounded">
            <h5>Цікавий факт</h5>
            <p>Антилопи роблять запаси їжі і чудово пам’ятають, де їх заховали.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;