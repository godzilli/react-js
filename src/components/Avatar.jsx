import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, src}) {
// const user = { name: "jennifer"} para desestruturar | const {name} = user; ficaria assim desestruturado

    return (
        <img 
        className={hasBorder
            ? styles.avatarWithBorder 
            : styles.avatar} 
            src={src}
            />
    );
}