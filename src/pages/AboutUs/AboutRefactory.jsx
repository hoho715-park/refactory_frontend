import "./AboutRefactory.css";
import useScrollReveal from "../../hooks/useScrollReveal";
import logo from "../../assets/aboutus-page/logo_dark.gif";

function AboutRefactory() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="about-refactory section"> {/* ⭐ 추가 */}

      <div className="hero-container">

        <img 
          src={logo} 
          alt="RE;Factory Logo" 
          className="logo_gif"
        />

        <h1 className="title">
          RE : FACTORY
        </h1>

        <h2 className="subtitle">
          LLM 기반 코드 품질 분석 플랫폼
        </h2>

        <p className="description">
          RE : FACTORY는 기존 정적 분석 도구의 한계를 넘어  
          <span>LLM 기반 의미 분석</span>을 통해 코드 품질을 평가하고  
          개발자가 이해하기 쉬운 <span>리팩토링 방향</span>을 제시합니다.
        </p>

      </div>

    </section>
  );
}

export default AboutRefactory;