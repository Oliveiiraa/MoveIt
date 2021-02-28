import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ProfileModal.module.css';

export function ProfileModal() {
    const {closeProfileModal} = useContext(ChallengesContext);

    return(
        <div className={styles.overlay}>
            <div className={styles.container}>

                <img src="/logo-full.svg" alt=""/>
                <p>Entre com seu user do GitHub</p>
                <form action="/" method="get">
                    <input type="text" name="username" placeholder="User do GitHub"></input>
                    <button type="submit">
                        <img src="/icons/seta.svg" alt="entrar"/>
                    </button>
                </form>
                    <button className="notUser" onClick={closeProfileModal}>Não possuo usuário<br/> (Entrar como anônimo)</button>
            </div>
        </div>
    )
}