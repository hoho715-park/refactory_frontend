import "./WhyRefactory.css";

export default function WhyRefactory() {
  return (
    <div className="why-refactory-container">

      <h2 className="why-refactory-title">Why RE:FACTORY</h2>

      <p className="why-refactory-text">
        RE:FACTORY는 코드 분석과 리팩토링을 지원하는 플랫폼입니다.
        개발자가 코드 구조를 더 쉽게 이해하고 개선할 수 있도록
        다양한 분석 기능과 시각화 도구를 제공합니다.
      </p>

      <div className="why-refactory-cards">

        <div className="why-card">
          <h3>Better Code Understanding</h3>
          <p>코드 구조와 관계를 직관적으로 파악할 수 있습니다.</p>
        </div>

        <div className="why-card">
          <h3>AI-Based Analysis</h3>
          <p>LLM 기반 의미 분석으로 코드 품질을 평가합니다.</p>
        </div>

        <div className="why-card">
          <h3>Refactoring Support</h3>
          <p>리팩토링이 필요한 부분을 쉽게 찾을 수 있습니다.</p>
        </div>

      </div>

    </div>
  );
}