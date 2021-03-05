import React from 'react';
import { useDispatch } from 'react-redux';
import { RAISE } from '../redux/constant';
import createAction from '../redux/createAction/index'

function BetPawn(props) {

    const pawn = props.pawn;

    const dispatch = useDispatch();

    return (
        <div className=' p-2'>
            <img src={pawn.img} alt="" style={{ width: '80%', height: '80%', margin: 'auto' }} className='d-block' />
            <div className="bg-success mt-1 text-center py-1 d-block" style={{ borderRadius: '5%', maxWidth: 150, margin: 'auto' }}>
                <button className='btn btn-danger display-2 mx-1' onClick={() => dispatch(createAction({ type: RAISE, payload: { pawn, tangGiam: false, } }))}>-</button>
                <span className='text-white' style={{ fontSize: 20 }}>{pawn.score}$</span>
                <button className='btn btn-danger display-2 mx-1' onClick={() => dispatch(createAction({ type: RAISE, payload: { pawn, tangGiam: true, } }))}>+</button>
            </div>
        </div>
    );
}

export default BetPawn;