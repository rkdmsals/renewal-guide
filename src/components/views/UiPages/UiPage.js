import "./UiPage.css";
import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import EgardenPage from "../EgardenPage/EgardenPage";
import ServicePage from "../ServicePage/ServicePage";
import UiInfo from "./UiInfo";
import Home from "../HomePage/Home";
import ColorPage from "../ColorPage/ColorPage";

export default class UiPage extends React.Component {
  render() {
    return (
      <div className="background">
        <FullPage controls controlsProps={{ className: "slide-navigation" }}>
          <Slide>
            <div className="section-common section-area1">
              <Home />
            </div>
          </Slide>
          <Slide>
            <div className="section-common section-area2">
              <ColorPage />
            </div>
          </Slide>
          <Slide>
            <div className="section-common section-area3">
              <UiInfo />
            </div>
          </Slide>
          <Slide>
            <div className="section-common section-area4">
              <ServicePage />
            </div>
          </Slide>
          <Slide>
            <div className="section-common section-area5">
              <EgardenPage />
            </div>
          </Slide>
        </FullPage>
      </div>
    )
  }
}

