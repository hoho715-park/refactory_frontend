import React from "react";
import "./KeyFeatures.css";

const features = [
  {
    icon: "📊",
    title: "Code Quality Analysis",
    detailTitle: "코드 품질 분석",
    items: [
      "코드 구조 분석",
      "코드 품질 평가"
    ],
    tags: ["결합도", "복잡도", "응집도", "크기"]
  },
  {
    icon: "🧠",
    title: "LLM Semantic Analysis",
    detailTitle: "LLM 기반 코드 분석",
    items: [
      "코드 의미 파악",
      "코드 문맥 분석"
    ],
    desc: "응집도는 정성적 의미이므로 LLM 기반 분석 활용"
  },
  {
    icon: "📈",
    title: "Visualization",
    detailTitle: "코드 구조 시각화",
    items: [
      "코드 관계 시각화",
      "분석 기반 다이어그램 제공"
    ],
    desc: "복잡한 코드 구조를 직관적으로 이해"
  },
  {
    icon: "⚙️",
    title: "Refactoring Support",
    detailTitle: "리팩토링 제안",
    items: [
      "코드 문제 인식",
      "리팩토링 포인트 제안",
      "개발 의사결정 지원"
    ]
  }
];

export default function KeyFeatures() {
  return (
    <section className="features">

      <h2 className="features-title">Key Features</h2>

      <div className="features-grid">
        {features.map((f, index) => (
          <div className="feature-card" key={index}>

            <div className="card-front">
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
            </div>

            <div className="card-hover">

              <h3>{f.detailTitle}</h3>

              <ul>
                {f.items.map((item, i) => (
                  <li key={i}>✔ {item}</li>
                ))}
              </ul>

              {f.tags && (
                <div className="feature-tags">
                  {f.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              )}

              {f.desc && <p>{f.desc}</p>}

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}