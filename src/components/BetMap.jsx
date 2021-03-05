import React from 'react';
import { useSelector } from 'react-redux';
import BetPawn from './BetPawn';

function BetMap(props) {
    const Pawns = useSelector(state => state.GameBauCuaReducer.danhSachCuoc);
    // console.log(Pawns);
    return (
        <div className='row'>
            {Pawns.map((pawn, index) => {
                return (
                    <div className="col-4" key={index}>
                        <BetPawn pawn={pawn} ></BetPawn>
                    </div>
                );
            })}
        </div >

    );
}

export default BetMap;