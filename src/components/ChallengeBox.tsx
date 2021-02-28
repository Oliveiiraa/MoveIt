import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const {resetCountdown} = useContext(CountdownContext);

    function handleChallengeSucessed() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallendFailed() {
        resetChallenge();
        resetCountdown();
    }

    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>   

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main> 

                    <footer>
                        <button 
                            onClick={handleChallendFailed}
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>
                        <button 
                            onClick={handleChallengeSucessed}
                            type="button"
                            className={styles.challengeSuccessButton}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level uo"/>
                    Avance de level completando desafios.
                </p>
            </div>
            )}
        </div>
    )
}