import "./ServicePage.css";
import React from "react";
import { useEffect, useState } from "react";

function ServicePage() {
    const [currentImage, SetCurrentImage] = useState("/img/calculator.png");

    const handleDiv1Click = (e) => {
        SetCurrentImage('/img/calculator.png')
    };
    const handleDiv2Click = (e) => {
        SetCurrentImage('/img/alba_tag.png')
    };
    const handleDiv3Click = (e) => {
        SetCurrentImage('/img/main_contents.png')
    };

    return (
        <div className="servicePage_container">
            <div className="servicePage_main_container">
                <div className="servicePage_left_container">
                    <div className="servicePage_left_title">
                        새로운 기능
                    </div>
                    <div className="servicePage_left_content">
                        <div className="servicePage_left_content_1" onClick={handleDiv1Click}>
                            <div className="servicePage_left_content_title">
                                평점 계산기
                            </div>
                            <div className="servicePage_left_content_body">
                                평점 계산기 기능이 새롭게 추가되었습니다.
                                <br />
                                4.5 평점 변환 기능도 함께 제공되어
                                <br />
                                다양한 방식으로 성적을 확인하실 수 있습니다.
                            </div>
                        </div>
                        <div className="servicePage_left_content_2" onClick={handleDiv2Click}>
                            <div className="servicePage_left_content_title">
                                함께해요
                            </div>
                            <div className="servicePage_left_content_body">
                                스터디룸의 이름이 '함께해요'로 새롭게 변경되었습니다. 
                                스터디를 넘어 대외활동, 소모임 등에 벗들을 모아 함께해보세요!
                            </div>
                        </div>
                        <div className="servicePage_left_content_3" onClick={handleDiv3Click}>
                            <div className="servicePage_left_content_title">
                                메인화면에서 글 확인하기
                            </div>
                            <div className="servicePage_left_content_body">
                                이제 메인화면에서 모든 카테고리의 글들을 만나보실 수 있습니다.
                                이화인 인증의 회원의 경우, 화원과 E-화원의 글까지 확인하실 수 있습니다.
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default ServicePage;