import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleEnter() {
    navigate("/dashboard");
  }

  return (
    <div className="home">
      <header>
        <img src="/logo.png" alt="FestNow logo" />
        <h1>페스나우에 오신걸 환영합니다!</h1>
        <button onClick={handleEnter}>QR 코드 찍고 입장</button>
      </header>
    </div>
  );
}

export default Home;
