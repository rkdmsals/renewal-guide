import React from "react";
import "../uiContent.css";
function SideBar() {
  return (
    <div className="ui_content_container">
      <div className="ui_content_wrap">
        <div className="ui_content_label">
          - 모바일에서 개선된 검색 UI를 만나보세요!<br />
          - 상단의 검색바를 통해 이전보다 더욱 쉽게 게시글을 검색할 수 있습니다.

        </div>
      </div>
      <div className="img_wrap side_wrap">
        <div className="ui_image">
          <div id="sidebar_before" className="pic side_before_pic"><div className="img_text">Before</div></div>
        </div>
        <div className="ui_image">
          <div id="sidebar_after" className="pic side_after_pic"><div className="img_text">After</div></div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;