import styles from './Avatar.module.css';

export function Avatar(props) {
    const hasBorder = props.hasBorder !== false;
// const user = { name: "jennifer"} para desestruturar
// const {name} = user; ficaria assim desestruturado

    return (
        <img 
        className={hasBorder
            ? styles.avatarWithBorder 
            : styles.avatar} 
            src={props.src}
            />
    );
}