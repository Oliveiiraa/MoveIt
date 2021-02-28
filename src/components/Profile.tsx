import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router'

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const { query } = useRouter();

    console.log(query.username);
    const { level, closeProfileModal } = useContext(ChallengesContext);

    useEffect((
    ) => {
        if(typeof(query.username) == "undefined"){
        } else if(typeof(query.username) != 'undefined') {
            closeProfileModal()
        }
    },[])

    return(
        <div className={styles.profileContainer}>
            { query.username ? <img src={`https://github.com/${query.username}.png`} alt="GitHub"/> : <img src="https://anonimodigital.com.br/wp-content/uploads/2017/08/cropped-icone.png" alt="Anônimo"/>}
            <div>
                <strong>{query.username ?? 'Anônimo'}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}