import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/Main');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center space-y-4 mt-auto">
        <div className="text-9xl font-bold text-[#0046cf]">M</div>
        <h1 className="text-3xl font-bold text-gray-900">Ready To Meet</h1>
        <p className="text-gray-600">노쇼 걱정 없이 만나는 서비스</p>
      </div>

      <div className="mt-auto mb-3">
        <button
          onClick={handleLogin}
          className="bg-[#0046ef] text-white font-bold py-3 pl-12 pr-12 rounded-full flex items-center justify-center relative space-x-2 shadow-lg"
        >
          <img
            src="/buttonIcons/Oauth_kakao_button.png"
            className="w-6 h-6 rounded-full absolute left-4"
            alt="로그인 버튼"
          />
          <span className="mx-auto">카카오로 로그인</span>
        </button>
      </div>

      <div className="mt-auto mb-8 text-center text-gray-500 text-sm space-y-2">
        <p>상호명 : 레디투밋, 대표자 : 옥종훈 </p>
        <p>사업자등록번호 : 393-44-01190</p>
        <p>사업장 : 서울 강남구 강남대로 66길 14 1309호 </p>
        <p>고객지원 : readytomeet@naver.com </p>
        <p>약관 및 정책</p>
      </div>
    </div>
  );
}

export default LoginPage;
