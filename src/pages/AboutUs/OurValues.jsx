import "./OurValues.css";

export default function OurValues() {
  return (
    <div className="ourvalues-container">

      <h2 className="ourvalues-title">Our Values</h2>

      <div className="values-grid">

        <div className="value-card">
          <h3>Innovation</h3>
          <p>새로운 기술과 아이디어를 통해 더 나은 개발 환경을 만듭니다.</p>
        </div>

        <div className="value-card">
          <h3>Quality</h3>
          <p>코드 품질을 중요하게 생각하며 지속적인 개선을 추구합니다.</p>
        </div>

        <div className="value-card">
          <h3>Collaboration</h3>
          <p>개발자와 AI가 협력하는 새로운 개발 방식을 지향합니다.</p>
        </div>

      </div>

    </div>
  );
}