import frogPicture from './assets/kingFrog.png'

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={frogPicture} alt="Frog picture"></img>
            <h2 className="card-title">Sasha</h2>
            <p className="card-text">Frog picture</p>
        </div>
    );
}

export default Card