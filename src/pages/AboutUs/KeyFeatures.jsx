import "./KeyFeatures.css";

const features = [

  {
    title:"Code Quality Analysis",
    items:[
      "코드 구조 분석",
      "정적 메트릭 분석",
      "코드 품질 평가"
    ]
  },

  {
    title:"LLM Semantic Analysis",
    items:[
      "코드 의미 분석",
      "맥락 기반 이해",
      "응집도 평가"
    ]
  },

  {
    title:"Refactoring Guide",
    items:[
      "리팩토링 방향 제시",
      "코드 개선 추천",
      "품질 향상 지원"
    ]
  }

]

function KeyFeatures(){

  return(

    <div className="key-features">

      <h1 className="section-title">
        Key Features
      </h1>

      <div className="feature-cards">

        {features.map((feature,index)=>(

          <div className="feature-card" key={index}>

            <h3>{feature.title}</h3>

            <ul>
              {feature.items.map((item,i)=>(
                <li key={i}>{item}</li>
              ))}
            </ul>

          </div>

        ))}

      </div>

    </div>

  )
}

export default KeyFeatures