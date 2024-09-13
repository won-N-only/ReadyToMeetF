import React from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';

function OnConstruction() {
    const navigate = useNavigate();

    const navigateToPage = (path) => {
        navigate(path);
    };

    return (<div className='flex flex-col items-center'>
        <button>


            <img onClick={() => navigateToPage('/MainPage')}
                src="/OnConstruction.gif"
                alt="공사중"
            />
            <pr></pr>
            그림을 눌러 메인페이지로 이동하기
        </button>


    </div>
    )

}

export default OnConstruction;
