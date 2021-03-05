import React from 'react';
import "../material/dice.css"
import { useSpring, animated } from 'react-spring';

function Dice(props) {

    const dice = props.dice;
    const [propsDice, set] = useSpring(() => ({
        from: {
            xyz: [0, 0, 0],
        },
        to: {
            xyz: [1080, 1080, 1080]
        },
        config: {
            duration: 1000
        },
        reset: true,
    }));

    set({ xyz: [360, 360, 360] })

    return (

        <div className='cube' >
            <animated.div style={{ width: '100%' }}>
                {/* <animated.div style={{ width: '100%', transform: propsDice.xyz?.interpolate((x, y, z) => `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`) }}> */}
                <img className='cube__face cube__face--left ' src="./asset/ca.png" alt="" style={{ width: 50, }} />
                {/* <img className='cube__face cube__face--top ' src="./asset/bau.png" alt="" style={{ width: 50, }} /> */}
                {/* <img className='cube__face cube__face--bottom ' src="./asset/cua.png" alt="" style={{ width: 50, height: 50, }} /> */}
                <img className='cube__face cube__face--top ' src={dice.img} alt="" style={{ width: '100%' }} />
                <img className='cube__face cube__face--front ' src="./asset/ca.png" alt="" style={{ width: '100%' }} />
                <img className='cube__face cube__face--right ' src="./asset/cua.png" alt="" style={{ width: '100%' }} />
            </animated.div>
        </div >
    );
}

export default Dice;