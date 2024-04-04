import logo from './logo.svg';
import './App.css';
import MetaTag from './pages/MetaTag';

function App() {
  return (
    <>

      <MetaTag
        title="Birds"
        description="척추동물의 한 강(綱)으로 앞다리는 날개로 변형되어 날 수 있고, 입은 부리로 되어 손을 대신하는 구실을 하며, 온몸이 깃털로 덮인 온혈동물이다. 모두 난생이고, 폐에 이어지는 기낭이 있고, 시력이 발달하였다."
        robots="noindex,nofollow"
        imgsrc=""
        url="https://terms.naver.com/entry.naver?docId=1141640&cid=40942&categoryId=32310"
      />

      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

    </>
  );
}

export default App;
