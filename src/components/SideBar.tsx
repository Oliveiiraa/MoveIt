import styles from '../styles/components/SideBar.module.css';

export function SideBar(){
    return (
        <div className={styles.bar}>
            <img src="/logo-small.svg" alt="logo"/>
            <img className={styles.house} src="/icons/house.svg" alt="home"/>
        </div>
    )
}