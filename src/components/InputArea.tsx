import './InputArea.css'

export default function InputArea(){
    return (
        <div className="input-area-container">
            <div className="input-area__header">
                <label className="input-area__label input-area__name">
                    Your Name <br></br>
                    <input className="input-area__input" id="input-area__name" type="text" required></input>
                </label>
                <label className="input-area__label input-area__email">
                    Email Address <br></br>
                    <input className="input-area__input" id="input-area__email" type="email" required></input>
                </label>
                <label className="input-area__label input-area__phone">
                    Phone Number (optional) <br></br>
                    <input className="input-area__input" id="input-area__phone" type="tel"></input>
                </label>
            </div>
            <label className="input-area__label label-area__message">
                Message <br></br>
                <textarea className="input-area__input" id="input-area__message" type="text"></textarea>
            </label>
            <div className="input-area__submit-button-container">
                <button type="submit" className="input-area__submit-button" aria-multiline>Leave us a Message</button>
            </div>
        </div>
    );
}