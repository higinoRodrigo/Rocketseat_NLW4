import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/higinoRodrigo.png" alt="Rodrigo Higino"/>
            <div>
                <strong>Rodrigo Higino</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}     
                </p>
            </div>
        </div>
    );
}