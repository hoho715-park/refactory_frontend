import "./KeyFeatures.css";

export default function KeyFeatures() {

  const features = [
    {
      title: "Code Quality Analysis",
      items: ["코드 구조 분석", "코드 품질 평가"]
    },
    {
      title: "LLM Semantic Analysis",
      items: ["코드 의미 파악", "코드 문맥 분석"]
    },
    {
      title: "Visualization",
      items: ["코드 관계 시각화", "다이어그램 제공"]
    },
    {
      title: "Refactoring Support",
      items: ["코드 문제 인식", "리팩토링 포인트 추천"]
    }
  ];

  return (
    <div className="keyfeatures">

      <h2 className="keyfeatures-title">Key Features</h2>

      <div className="keyfeatures-grid">

        {features.map((feature, index) => (
          <div className="keyfeatures-card" key={index}>

            <h3>{feature.title}</h3>

            <ul>
              {feature.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

          </div>
        ))}

      </div>

    </div>
  );
}