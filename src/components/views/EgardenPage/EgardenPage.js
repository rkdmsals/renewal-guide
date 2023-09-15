import "./EgardenPage.css";
import React, { useState } from 'react';

function EgardenPage() {

    const [imageSrc, setImageSrc] = useState("../../../../public/img/Egarden_pic1.png");

    const handleClick1 = () => {
        setImageSrc("../../../../public/img/Egarden_pic1.png");
        console.log(1);
    };
    const handleClick2 = () => {
        setImageSrc("../../../../public/img/Egarden_pic2.png");
        console.log(2);
    };
    const handleClick3 = () => {
        setImageSrc("../../../../public/img/Egarden_pic3.png");
        console.log(3);
    };

    return (
        <div className="EgardenPage_Background">

            <div className="EgardenPage_inner">
                <div className="EgardenPage_script">
                    <div className="EgardenPage_title">
                        <span className="Egarden_hidden">편리해진 </span>E-화원
                    </div>
                    <div className="EgardenPage_text">
                        전공, 취미, 시험 등등 관심 분야에 따라 E-화원을 자유롭게 생성하고 가입할 수 있습니다. <br />
                        자신이 가입한 E-화원들은 이화이언 메인 페이지에서도 바로 확인하실 수 있습니다. <br />
                        벗들과 함께 원하는 주제에 대해 자유롭게 소통할 수 있는 E-화원, 기대해주세요!
                    </div>
                </div>
                <div className="EgardenM_pictures">
                    <div className="EgardenM_buttons">
                        <button id="Eb1" className="Eb" onClick={handleClick1}>1</button>
                        <button id="Eb2" className="Eb" onClick={handleClick2}>2</button>
                        <button id="Eb3" className="Eb" onClick={handleClick3}>3</button>
                    </div>
                    <img className="EgardenM_pic" 
                        src={imageSrc}
                        alt="오류" />
                </div>
            </div>
            <div className="EgardenPage_pictures">
                    <div id="EgardenPage_pic1" className="EgardenPage_pic" />
                    <div id="EgardenPage_pic2" className="EgardenPage_pic" />
                    <div id="EgardenPage_pic3" className="EgardenPage_pic" />
            </div>

        </div>
    )

}


export default EgardenPage;



