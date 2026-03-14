import "./WhyRefactory.css";

function WhyRefactory(){

  return (

    <div className="why-refactory">

      <h1 className="section-title">
        Why RE;Factory?
      </h1>

      <div className="why-cards">

        <div className="why-card">
          <h3>Traditional Tools</h3>
          <p>
            기존 정적 분석 도구는 코드 구조 중심 분석에
            집중되어 코드 의미와 개발 의도를 이해하기 어렵습니다.
          </p>
        </div>

        <div className="why-card">
          <h3>LLM Semantic Analysis</h3>
          <p>
            RE;Factory는 LLM 기반 의미 분석을 통해
            코드의 목적과 맥락을 이해하여
            응집도 기반 품질 평가를 수행합니다.
          </p>
        </div>

      </div>

    </div>

  )
}

export default WhyRefactory