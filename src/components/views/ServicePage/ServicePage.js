import "./ServicePage.css";
import React from "react";
import { useEffect, useState } from "react";

function ServicePage() {
    const [div1Image, SetDiv1Image] = useState("calculator.jpg");
    const [div2Image, SetDiv2Image] = useState("jobTag.jpg");
    const [div3Image, SetDiv3Image] = useState("mainPageBoard.jpg");

    const handleDiv1Click = (e) => {
        SetDiv1Image('calculator.jpg')
    };
    const handleDiv2Click = (e) => {
        SetDiv2Image('jobTag.jpg')
    };
    const handleDiv3Click = (e) => {
        SetDiv3Image('mainPageBoard.jpg')
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
                                전체 평점기 기능이 새롭게 추가되었습니다.
                                <br />
                                4.5 평점 변환 기능도 함께 제공되어
                                <br />
                                다양한 방식으로 성적을 확인하실 수 있습니다.
                            </div>
                        </div>
                        <div className="servicePage_left_content_2" onClick={handleDiv2Click}>
                            <div className="servicePage_left_content_title">
                                구인/구직 태그
                            </div>
                            <div className="servicePage_left_content_body">
                                알바하자 게시판에 구인/구직 카테고리가 추가되어
                                알바 구인 및 구직 정보를 쉽게 확인하고 공유할 수 있게 되었습니다.
                            </div>
                        </div>
                        <div className="servicePage_left_content_3" onClick={handleDiv3Click}>
                            <div className="servicePage_left_content_title">
                                메인 화면에서 글 확인하기
                            </div>
                            <div className="servicePage_left_content_body">
                                이제 메인화면에서 라이프/이벤트/공지사항/컨텐츠 카테고리의 글들은 만나보실 수 있습니다.
                                로그인 시에는 화원과 E-화원의 글까지 메인화면에서 확인하실 수 있습니다.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="servicePage_right_container">
                    핸드폰 이미지
                </div>
            </div>
        </div>
    );
}

export default ServicePage;