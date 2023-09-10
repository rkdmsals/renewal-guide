import "./Home.css";
import { FullPage, Slide } from 'react-full-page';
import React from 'react';

export default class Home extends React.Component {
    render() {
      return (
        <div className="Home_Background">
            <FullPage controls>
                <Slide>
                    <div className="Home_inner">
                        <div className="title">
                            NEW 이화이언
                        </div>
                        <div className="coming soon">
                            COMING SOON
                        </div>
                        <div className="clock"> </div>
                    </div>
                </Slide>
            </FullPage>
        </div>
      )
    }
  }