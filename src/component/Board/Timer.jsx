import React, {useEffect, useRef, useState} from 'react';
import NewButton from "../NewButton/NewButton";
import Color from "../Figure/Color";
import NewModal from "../NewModal/NewModal";

const Timer = ({currentPlayer, restart}) => {
    const [whiteTimer, setWhiteTimer] = useState(300);
    const [blackTimer, setBlackTimer] = useState(300);
    const [active, setActive] = useState({activeModal: false, player: null})
    const timer = useRef(null);

    useEffect(() => {
        startTimer();
    }, [currentPlayer])

    useEffect(() => {
        if (blackTimer <= 0) {
            setActive({activeModal: true, player: currentPlayer?.color});
            handleRestart();
        }
        if (whiteTimer <= 0) {
            setActive({activeModal: true, player: currentPlayer?.color});
            handleRestart();
        }
    }, [whiteTimer, blackTimer])

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current);
        }
        const callback = currentPlayer?.color === Color.WHITE ? decrementWhiteTimer : decrementBlackTimer;
        timer.current = setInterval(callback, 1000);
    }

    function decrementBlackTimer() {
        setBlackTimer((prev) => prev - 1);
    }

    function decrementWhiteTimer(whiter) {
        setWhiteTimer((prev) => prev - 1);
    }

     const handleRestart = () => {
        setWhiteTimer(300);
        setBlackTimer(300);
        restart();
     }

    return (
        <div>
            <NewModal
                active={active}
                setActive={setActive}
            />
            <NewButton restart={handleRestart}>
                Restart game
            </NewButton>
            <h2>Чёрные - {blackTimer}</h2>
            <h2>Белые - {whiteTimer}</h2>
        </div>
    );
};

export default Timer;