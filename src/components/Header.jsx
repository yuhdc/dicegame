import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AGAIN } from '../redux/constant';
import createAction from '../redux/createAction';

function Header(props) {

    const tongDiem = useSelector(state => state.GameBauCuaReducer.tongDiem);
    const dispatch = useDispatch();
    return (
        <div className='text-center'>
            <h1 className='text-success'>GAME BẦU CUA</h1>

            <div className='mt-4'>
                <span className='bg-danger' style={{ fontSize: 20, color: 'white', padding: 10, borderRadius: '3%' }}>Tiền thưởng: <span className='text-warning'>{tongDiem.toLocaleString()}$</span></span>

            </div>

            <div className='mt-4'>
                <button className='btn btn-success' onClick={() => dispatch(createAction({ type: AGAIN }))}>chơi lại</button>
            </div>
        </div>
    );
}

export default Header;