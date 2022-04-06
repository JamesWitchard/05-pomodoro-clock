import {useEffect, useRef, useState} from "react";

import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Controls from "./components/Controls";

import './App.css';

function App() {
	const [timerRunning, setTimerRunning] = useState(false);
	const [onBreak, setOnBreak] = useState(false);
	const [sessionTime, setSessionTime] = useState(60);
	const [breakTime, setBreakTime] = useState(5);
	const [timeTop, setTimeTop] = useState(Math.floor(breakTime * 0.75));
    const [mins, setMins] = useState(onBreak ? breakTime : sessionTime);
    const [secs, setSecs] = useState(0);


	const [intervalId, setIntervalId] = useState(null);
	const [timeInSeconds, setTimeInSeconds] = useState(onBreak ? breakTime * 60 : sessionTime * 60);

	const audioRef = useRef();

	let id = null;

	useEffect(resetDefaults, []);

	useEffect(() => {
		if (!onBreak) {
			setMins(sessionTime);
			setSecs(0);
			setTimeInSeconds(sessionTime * 60)
			setTimeout(() => {
				audioRef.current.pause();
				audioRef.current.currentTime = 0;
			}, audioRef.current.duration *1000);
		}
	}, [sessionTime, onBreak])

	useEffect(() => {
		if (onBreak) {
			setMins(breakTime);
			setSecs(0);
			setTimeInSeconds(breakTime * 60)
			setTimeTop(Math.floor(breakTime * 0.75));
			setTimeout(() => {
				audioRef.current.pause();
				audioRef.current.currentTime = 0;
			}, audioRef.current.duration *1000);
		}
	}, [breakTime, onBreak])

	useEffect(() => {
		if (timerRunning) {
			id = window.setInterval(() => {
				setTimeInSeconds(timeInSeconds => timeInSeconds - 1);
			}, 1000);
			return () => window.clearInterval(id)
		}
	}, [timerRunning]);

	useEffect(() => {
		setMins(Math.floor(timeInSeconds / 60));
		setSecs(timeInSeconds % 60);
		if (timeInSeconds < 0) {
			console.log("BEEP BEEP BEEP")
			audioRef.current.play();
			setOnBreak(onBreak => !onBreak);
		}
	}, [timeInSeconds])

	function  onPlay() {
		setTimerRunning(timerRunning => !timerRunning);
	}

	function pauseTimer() {
		setTimerRunning(false);
		window.clearInterval(id);
	}

	function resetDefaults () {
		pauseTimer();
		setOnBreak(false);
		setSessionTime(25);
		setBreakTime(5);
		setTimeInSeconds(onBreak ? breakTime * 60 : sessionTime * 60);
		audioRef.current.pause();
		audioRef.current.currentTime = 0;
		audioRef.current.volume = 0.1;
	}

	function incrementTimer(timer) {
		if (timerRunning) return;
		switch (timer) {
			case "session" : {
				setSessionTime(sessionTime < 60 ? sessionTime + 1 : sessionTime);
				break;
			}
			case "break": {
				setBreakTime(breakTime < 60 ? breakTime + 1 : breakTime);
				break
			}
			default:
				break;
		}
	}

	function decrementTimer(timer) {
		if (timerRunning) return;
		switch (timer) {
			case "session" : {
				setSessionTime(sessionTime > 1 ? sessionTime - 1 : sessionTime);
				break;
			}
			case "break": {
				setBreakTime(breakTime > 1 ? breakTime - 1 : breakTime);
				break
			}
			default:
				break;
		}
	}

	return (
		<div className="App">
			<div className="container">
				<h1>25 + 5 Clock</h1>
				<div className="counters">
					<Counter
						label="Break"
						timeValue={breakTime}
						inc={incrementTimer}
						dec={decrementTimer}
					/>
					<Counter
						label="Session"
						timeValue={sessionTime}
						inc={incrementTimer}
						dec={decrementTimer}
					/>
				</div>
				<Timer
					label={onBreak ? "Break" : "Session"}
					timeMins={mins}
					timeSecs={secs}
					timeTop={timeTop}
				/>
				<Controls
					timerRunning={timerRunning}
					onPlay={onPlay}
					resetClick={resetDefaults}
				/>

			</div>
			<p>Coded by</p>
			<a href="https://github.com/JamesWitchard">James Witchard</a>
			<audio src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
				id="beep" ref={audioRef} preload="auto"/>

		</div>
	);
}

export default App;
