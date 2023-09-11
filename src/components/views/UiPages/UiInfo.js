import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UiInfo.css";
import Comment from "./InfoContent/Comment";
import BoardWrite from "./InfoContent/BoardWrite";
import SideBar from "./InfoContent/SideBar";
function UiInfo() {
  const navigate = useNavigate();
  const [uiContent, setUiContent] = useState("comment");
  const [isClicked, setIsClicked] = useState([true, false, false]);
  const [uiName, setUiName] = useState("댓글");

  const selectComponent = {
    comment: <Comment />,
    boardwrite: <BoardWrite />,
    sidebar: <SideBar />,
  };
  const handleClickButton = (e) => {
    const { name } = e.target;
    setUiContent(name);
    console.log(e.target.name);
    if (e.target.name === "comment") {
      setIsClicked([true, false, false]);
      setUiName("댓글 UI");
    } else if (e.target.name === "boardwrite") {
      setIsClicked([false, true, false]);
      setUiName("글 작성 UI");
    } else {
      setIsClicked([false, false, true]);
      setUiName("사이드바 UI");
    }
  };
  return (
    <div className="uiInfo_container">
      <div className="uiInfo_inner_container">
        <div className="uiInfo_content_container">
          <div className="uiInfo_title">새로운 디자인</div>

          <div className="uiInfo_button_container">
            <div>
              <button
                className={`uiInfo_comment_btn uiInfo_btn ${
                  isClicked[0] ? "clicked" : "unclicked"
                }`}
                onClick={handleClickButton}
                name="comment"
              >
                댓글 UI
              </button>
              <button
                className={`uiInfo_boardwrite_btn uiInfo_btn ${
                  isClicked[1] ? "clicked" : "unclicked"
                }`}
                onClick={handleClickButton}
                name="boardwrite"
              >
                글 작성 UI
              </button>
              <button
                className={`teamInfo_sidebar_btn uiInfo_btn ${
                  isClicked[2] ? "clicked" : "unclicked"
                }`}
                onClick={handleClickButton}
                name="sidebar"
              >
                사이드바 UI
              </button>
            </div>
            </div>
          </div>
          <div className="uiInfo_ui_content_container">
            {selectComponent[uiContent]}
          </div>
        </div>
      </div>
  );
}

export default UiInfo;