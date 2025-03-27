import React from "react";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>내 테이블 번호 : 23번</h2>
      <div className="menu-container">
        <button onClick={() => alert("채팅")}>채팅</button>
        <button onClick={() => alert("채팅")}>통화</button>
        <button onClick={() => alert("채팅")}>합석 제안</button>
      </div>
    </div>
  );
}

export default Dashboard;
