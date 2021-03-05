import React from 'react';
import BetMap from './BetMap';
import DiceField from './DiceField';
import Header from './Header';
import '../material/GameBauCua.css'

function Home(props) {
    return (
        <div id='Home' className='container-fluid'>
            <Header></Header>
            <div className="row">
                <div className="col-8">
                    <BetMap></BetMap>
                </div>
                <div className="col-4">
                    <DiceField></DiceField>
                </div>
            </div>
        </div>
    );
}

export default Home;