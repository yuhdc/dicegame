import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PLAY } from '../redux/constant';
import Dice from './Dice';

function DiceField(props) {

    const dices = useSelector(state => state.GameBauCuaReducer.diceSet);

    const dispatch = useDispatch();

    return (
        <>
            <div className='col-12 d-flex' style={{ position: 'relative', justifyContent: 'center', margin: "auto" }}>
                <div className="bg-white" style={{ width: 400, height: 400, borderRadius: "100%" }}>
                    <div className="row " style={{ marginTop: 50, }}>
                        <div className="col-12 " style={{ marginLeft: 180, height: 50 }}>
                            <Dice dice={dices[0]}></Dice>
                        </div>
                        <div className="col-12  " style={{ marginLeft: 60, height: 50 }}>
                            <Dice dice={dices[1]}></Dice>
                        </div>
                        <div className="col-12 " style={{ marginLeft: 230, height: 50 }}>
                            <Dice dice={dices[2]}></Dice>
                        </div>
                    </div>
                </div>

            </div>
            <div style={{ position: 'absolute', bot: 0, left: 250, paddingTop: 30 }}>
                <button className='btn btn-success' onClick={() => dispatch({
                    type: PLAY,
                })}>Xốc</button>
            </div>
        </>
    );
}

export default DiceField;