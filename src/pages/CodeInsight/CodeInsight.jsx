import Header from '../../components/Header';
import './CodeInsight.css';

function CodeInsight() {
  return (
    <div className="code-insight-page">
      <Header />
      <main className="page-content">
        <h1>Code Insight</h1>
        <p>코드의 구조와 품질을 한눈에 파악하세요.</p>
        <p>복잡한 코드베이스를 시각적으로 분석하고 개선점을 찾아드립니다.</p>
      </main>
    </div>
  );
}

export default CodeInsight;
