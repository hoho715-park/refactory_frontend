import React from "react";
import "./KeyFeatures.css";

const features = [
  {
    icon: "🧠",
    title: "LLM Semantic Analysis",
    desc: "대형 언어 모델을 활용하여 코드의 의미와 문맥을 이해하고 정성적인 응집도 분석을 수행합니다."
  },
  {
    icon: "📊",
    title: "Code Quality Metrics",
    desc: "복잡도, 결합도, 크기, 응집도 등 다양한 지표를 통해 코드 품질을 정량적으로 평가합니다."
  },
  {
    icon: "🔎",
    title: "Code Structure Insight",
    desc: "코드 구조와 함수 간 관계를 분석하여 복잡한 코드베이스를 쉽게 이해할 수 있도록 지원합니다."
  },
  {
    icon: "⚙️",
    title: "Refactoring Recommendation",
    desc: "분석 결과를 기반으로 코드 개선 및 리팩토링 포인트를 제안합니다."
  }
];

export default function KeyFeatures() {
  return (
    <section className="features-section">
      
      <div className="features-header">
        <h2>Key Features</h2>
        <p>
          Refactory는 코드 구조 분석과 LLM 기반 의미 분석을 결합하여
          더 정확한 코드 품질 평가와 리팩토링 인사이트를 제공합니다.
        </p>
      </div>

      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            
            <div className="feature-icon">
              {f.icon}
            </div>

            <div className="feature-content">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}