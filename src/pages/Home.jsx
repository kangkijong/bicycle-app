import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="home">

      {/* Hero 섹션 */}
      <section className="hero">
        <div className="hero-content">
          <h1>당신의 라이딩, 더 즐겁게</h1>
          <p>구매부터 대여, 여행까지 — 자전거의 모든 것을 한 곳에서.</p>
          <Link to="/purchase" className="btn-primary">지금 시작하기</Link>
        </div>
      </section>

      {/* 자전거 판매 */}
      <section className="section sale">
        <h2>인기 자전거</h2>
        <div className="bike-grid">
          <div className="bike-card">
            <img src="/images/bike1.png" alt="Bike1" />
            <h3>불렛</h3>
            <p>강력한 퍼포먼스로 최고의 주행력을 선사하는 전기자전거 모델</p>
            <Link to="/purchase" className="btn-outline">구매하기</Link>
          </div>
          <div className="bike-card">
            <img src="/images/bike2.png" alt="Bike2" />
            <h3>엘리엇</h3>
            <p>수많은 대회 우승을 통해 성능을 검증한 엘리엇은 더욱 높은 에어로 성능을 갖추어 어떤 레이스에서도 승리할 수 있습니다.</p>
            <Link to="/purchase" className="btn-outline">구매하기</Link>
          </div>
          <div className="bike-card">
            <img src="/images/bike3.png" alt="Bike3" />
            <h3>케인</h3>
            <p>풀체인지를 통해 넘치는 개성을 표현한 새로운 케인 시리즈</p>
            <Link to="/purchase" className="btn-outline">구매하기</Link>
          </div>
        </div>
      </section>

      {/* 대여 소개 */}
      <section className="section rental">
        <div className="rental-content">
          <h2>자전거 대여 서비스</h2>
          <p>가볍게 떠나고 싶을 때, 가까운 대여소에서 손쉽게 이용하세요.</p>
          <Link to="/rental" className="btn-primary">대여하러 가기</Link>
        </div>
      </section>

      {/* 여행지 추천 */}
      <section className="section travel">
        <h2>추천 라이딩 코스</h2>
        <div className="travel-cards">
          <div className="travel-card">
            <img src="/images/travel1.png" alt="Jeju Bike Trip" />
            <h3>제주 해안도로 코스</h3>
          </div>
          <div className="travel-card">
            <img src="/images/travel2.jpg" alt="Han River" />
            <h3>한강 라이딩 코스</h3>
          </div>
          <div className="travel-card">
            <img src="/images/travel3.jpg" alt="Nami Island" />
            <h3>남이섬 코스</h3>
          </div>
        </div>
        <Link to="/travel" className="btn-outline">더보기</Link>
      </section>

      {/* 고객센터 CTA */}
      <section className="section support">
        <h2>도움이 필요하신가요?</h2>
        <p>제품 등록, A/S, 문의사항은 고객센터에서 빠르게 해결하세요.</p>
        <Link to="/support" className="btn-outline2">고객센터 바로가기</Link>
      </section>
    </div>
  );
}
