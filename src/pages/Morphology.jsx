function Morphology() {
  return (
    <div className="container py-5">
      <h1 className="display-5 text-center mb-5">Зовнішній вигляд Антилопи звичайної</h1>
      <h2 className="text-center text-muted mb-5">(Vulpes vulpes)</h2>

      <div className="text-center mb-5">
        <img 
          src="/images/antylope-head.jpg" 
          className="img-fluid rounded shadow-lg" 
          alt="Антилопа звичайна" 
          style={{ maxHeight: '520px' }}
        />
      </div>

      <div className="row">
        <div className="col-lg-7">
          <h3>Загальна будова тіла</h3>
          <p>Га́рна — одна з небагатьох антилоп, самці та самки яких мають різне забарвлення, тобто в них виражений статевий диморфізм.</p>

          <h4 className="mt-4">Основні розміри:</h4>
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Параметр</th>
                <th>Значення</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Довжина тіла</td><td>100—150 см</td></tr>
              <tr><td>Висота в холці:</td><td>60-85 см.</td></tr>
              <tr><td>Маса:</td><td>25-45 кг</td></tr>
              <tr><td>Кількість дитинчат</td><td>4–6</td></tr>
            </tbody>
          </table>

          <h3 className="mt-5">Характерні особливості</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Шерсть навколо очей, підборіддя, черева і грудей має білий колір. Штопороподібні роги сягають у довжину 70 см.</strong></li>
            <li className="list-group-item"><strong>Голова: великі очі й вуха.</strong></li>
          </ul>
        </div>

        <div className="col-lg-5">
          <div className="row g-3">
            <div className="col-6"><img src="/images/antylope-head.jpg" className="img-fluid rounded shadow" alt="Голова" /></div>
            <div className="col-6"><img src="/images/antylope-tail.jpg" className="img-fluid rounded shadow" alt="Хвіст" /></div>
            <div className="col-12"><img src="/images/antylope-ears.jpg" className="img-fluid rounded shadow" alt="Вуха" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Morphology;