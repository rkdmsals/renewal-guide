import "./UiPage.css";
import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import EgardenPage from "../EgardenPage/EgardenPage";
import ServicePage from "../ServicePage/ServicePage";

export default class UiPage extends React.Component {
  render() {
    return (
      <div className="background">
        <FullPage controls controlsProps={{ className: "slide-navigation" }}>
          <Slide>
            <div className="section-common section-area1">
              1
            </div>
          </Slide>
          <Slide>
            <div className="section-common section-area2">
              2
            </div>
          </Slide>
          <Slide>
            <div className="section-common section-area3">
              {/* <ServicePage /> */}
            </div>
          </Slide>
          <Slide>
            <div className="section-common section-area4">
              <EgardenPage />
            </div>
          </Slide>
        </FullPage>
      </div>
    )
  }
}

