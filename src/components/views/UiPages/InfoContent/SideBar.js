import React from "react";
import "../uiContent.css";
function SideBar() {
  return (
    <div className="ui_content_container">
    <div className="ui_content_wrap">
      <div className="ui_content_label">
        기존에 답답했던 사이드바를 없애 이화이언이 더욱 깔끔해졌습니다.<br />
        또한 로그인과 레벨 확인을 바로 확인할 수 있어 가독성은 높이고 편리하게 이용할 수 있어요!

      </div>
    </div>
    <div className="img_wrap">
      <div className="ui_image">
        <div id="sidebar_before" className="pic sidepic"><div className="img_text">Before</div></div>
      </div>
      <div className="ui_image">
        <div id="sidebar_after" className="pic"><div className="img_text">After</div></div>
      </div>
    </div>
  </div>
  );
}

export default SideBar;