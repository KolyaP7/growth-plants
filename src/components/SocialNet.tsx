import './SocialNet.css';
import { useState } from 'react';

type SocialNetProps = {
    title: string,
    link: string;
}

export default function SocialNet({title, link}: SocialNetProps){
    const [isActive, setIsActive] = useState(false);


    function activate(){
        setIsActive(prev => !prev);
    }

    return (
        <div className="SocialNet">
            <button className={`SocialNet__button ${isActive ? 'SocialNet__button--active' : ''}`}>
                <a className={`SocialNet__link ${isActive ? 'SocialNet__link--active' : ''}`} onClick={() => activate()}  href={link}> {title}</a>
            </button>
        </div>
    );
}