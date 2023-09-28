import "./Home.css";
import React, { useEffect, useRef, useState } from 'react';

function Home() {
    const [TimerDays, SetTimerDays] = useState('00');
    const [TimerHours, SetTimerHours] = useState('00');
    const [TimerMinutes, SetTimerMinutes] = useState('00');
    const [TimerSeconds, SetTimerSeconds] = useState('00');

    let Interval = useRef();

    const StartTimer = () => {
        const countdownDate = new Date('October 10 , 2023 00:00:00').getTime();

        Interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(Interval.current);

            } else {
                SetTimerDays(days);
                SetTimerHours(hours);
                SetTimerMinutes(minutes);
                SetTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        StartTimer();
        return () => {
            clearInterval(Interval.current);
        };
    });

    return (
        <div className="Home_Background">

            <div className="Home_inner">
                <div className="Home_title">
                    NEW 이화이언
                </div>
                <div className="Home_comingsoon">
                    COMING SOON
                </div>

                <div className="timer">
                    <div className="timer-container">
                        <div className="timer-box">
                            <div className="timer-time">{TimerDays}</div>
                            <div className="timer-font">DAYS</div>
                        </div>
                        <span />
                        <div className="timer-box">
                            <div className="timer-time">{TimerHours}</div>
                            <div className="timer-font">HOURS</div>
                        </div>
                        <span />
                    </div>
                    <div className="timer-container">
                        <div className="timer-box">
                            <div className="timer-time">{TimerMinutes}</div>
                            <div className="timer-font">MINUTES</div>
                        </div>
                        <span />
                        <div className="timer-box">
                            <div className="timer-time">{TimerSeconds}</div>
                            <div className="timer-font">SECONDS</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home;