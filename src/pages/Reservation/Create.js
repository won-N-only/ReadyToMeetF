import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

function ReservationCreatePage() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const navigate = useNavigate();

    const navigateToPage = (path) => {
        navigate(path);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-white px-4">
            {/* 상단 로고와 사용자 아이콘 */}
            <div className="flex justify-between items-center w-full py-4">
                <button onClick={() => navigateToPage('/MainPage')} className="text-6xl text-[#0046af] font-extrabold">M</button >
                <h1 className="text-3xl text-[#0046af] mt-1 font-extrabold">예약 생성하기</h1>
                <button onClick={() => navigateToPage('/MyPage')} className="text-3xl text-gray-700">
                    <FaUserCircle className="text-5xl text-[#0046af]"></FaUserCircle>
                </button>
            </div>

            {/* 입력 틀 */}
            <div className="w-full max-w-md mt-8 space-y-4 bg-[#0046af] p-8 rounded-3xl">
                <input
                    type="text"
                    placeholder="제목을 입력하세요"
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#0046af]"
                />

                <div className="relative">
                    <input
                        type="text"
                        placeholder="거래 희망 장소를 검색하세요"
                        className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#0046af]"
                    />
                    <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
                </div>

                <div className="flex space-x-4">
                    {/* 날짜 선택 */}
                    <div className="w-auto">
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="yyyy.MM.dd"
                            className="w-full p-2 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#0046af]"
                            placeholderText="날짜를 선택하세요"
                        />
                    </div>

                    {/* 시간 선택 */}
                    <div className="w-auto">
                        <DatePicker
                            selected={selectedTime}
                            onChange={(time) => setSelectedTime(time)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            dateFormat="h:mm aa"
                            className="w-full p-2 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#0046af]"
                            placeholderText="시간을 선택하세요"
                        />

                    </div>
                </div>


                <textarea
                    placeholder="메모를 입력하세요. 자세한 설명메모를 입력하세요."
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#0046af] h-32 resize-none"
                />

                <select className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#0046af]">
                    <option>예약금을 설정하세요.</option>
                    <option value="1">옵션 1</option>
                    <option value="2">옵션 2</option>
                    <option value="3">옵션 3</option>
                    <option value="4">옵션 4</option>
                </select>

            </div>
            <button className="w-full max-w-md  bg-[#0046af] text-white font-bold p-4 rounded-lg text-lg mt-4" onClick={() => navigate('/OnConstruction')}>
                예약 생성하기
            </button>
        </div>
    );
}

export default ReservationCreatePage;
