import React from "react";
import { useUserStore } from "./Login";

function MyPage() {
  const { user } = useUserStore();
  console.log(user?.email);
  return (
    <div>
      <h1>Mypage</h1>
    </div>
  );
}

export default MyPage;
