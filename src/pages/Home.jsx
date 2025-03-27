import React from "react";

function Home() {
  return (
    <div className="home">
      <header>
        <img src="/logo.png" alt="FestNow logo" />
        <h1>페스나우에 오신걸 환영합니다!</h1>
        <button onClick={() => alert("입장")}>QR 코드 찍고 입장</button>
      </header>
    </div>
  );
}

export default Home;
