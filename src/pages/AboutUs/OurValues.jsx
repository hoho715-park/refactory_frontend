import "./OurValues.css";

function OurValues(){

  return(

    <div className="our-values">

      <h1 className="section-title">
        Our Values
      </h1>

      <div className="values">

        <div className="value">
          <h3>Innovation</h3>
          <p>LLM 기반 코드 분석 기술 혁신</p>
        </div>

        <div className="value">
          <h3>Reliability</h3>
          <p>신뢰 가능한 코드 품질 평가</p>
        </div>

        <div className="value">
          <h3>Developer First</h3>
          <p>개발자를 위한 도구</p>
        </div>

      </div>

    </div>

  )
}

export default OurValues