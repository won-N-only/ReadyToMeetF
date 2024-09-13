import React from 'react';
import { FaUserCircle, FaPencilAlt, FaMoneyCheckAlt, FaPhone, FaCalendarAlt, FaQuestionCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function MyPage() {
    const navigate = useNavigate();

    const navigateToPage = (path) => {
        navigate(path);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-white px-4">
            {/* 상단 로고와 사용자 아이콘 */}
            <div className="flex justify-between items-center w-full py-4">
                <button onClick={() => navigateToPage('/MainPage')} className="text-6xl text-[#0046af] font-extrabold">M</button >
                <h1 className="text-3xl text-[#0046af] mt-1 font-extrabold">마이 페이지</h1>
                <button onClick={() => navigateToPage('/MyPage')} className="text-3xl text-gray-700">
                    <FaUserCircle className="text-5xl text-[#0046af]"></FaUserCircle>
                </button>
            </div>


            {/* 메뉴 리스트 */}
            <div className="w-full max-w-md mt-8">
                <hr className='border-solid border-[#0046af] 6px mb-8'></hr>

                {/* 메뉴 항목 */}
                <div className="flex items-center mb-4 cursor-pointer" onClick={() => navigateToPage('/OnConstruction')}>
                    <FaPencilAlt className="text-3xl text-[#0046af] mr-4" />
                    <h2 className="text-xl font-bold text-[#0046af]">닉네임 변경</h2>
                </div>

                <div className="flex items-center mb-4 cursor-pointer" onClick={() => navigateToPage('/OnConstruction')}>
                    <FaMoneyCheckAlt className="text-3xl text-[#0046af] mr-4" />
                    <h2 className="text-xl font-bold text-[#0046af]">계좌번호 변경</h2>
                </div>

                <div className="flex items-center mb-4 cursor-pointer" onClick={() => navigateToPage('/OnConstruction')}>
                    <FaPhone className="text-3xl text-[#0046af] mr-4" />
                    <h2 className="text-xl font-bold text-[#0046af]">전화번호 변경</h2>
                </div>

                <div className="flex items-center mb-4 cursor-pointer" onClick={() => navigateToPage('/OnConstruction')}>
                    <FaCalendarAlt className="text-3xl text-[#0046af] mr-4" />
                    <h2 className="text-xl font-bold text-[#0046af]">예약 조회</h2>
                </div>

                <div className="flex items-center mb-4 cursor-pointer" onClick={() => navigateToPage('/OnConstruction')}>
                    <FaQuestionCircle className="text-3xl text-[#0046af] mr-4" />
                    <h2 className="text-xl font-bold text-[#0046af]">개발자에게 문의하기</h2>
                </div>
                <hr className='border-solid border-[#0046af] 6px mt-6'></hr>
            </div>

            {/* 하단 링크 */}
            <div className="w-full max-w-md text-center mt-auto mb-8">
                <div className="flex flex-col items-center">
                    <a href="/terms" className="text-[#0046af] mb-2">약관 및 정책</a>
                    <a href="/withdraw" className="text-[#0046af]">회원 탈퇴</a>
                </div>
            </div>
        </div>
    );
}

export default MyPage;
