import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/BrnMelo.png" alt="foto do perfil"/>
            <div>
                <strong>Bruno Melo</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level 1
                </p>
            </div>
        </div>
    );
}