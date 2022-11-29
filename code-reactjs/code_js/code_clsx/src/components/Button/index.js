import clsx from "clsx"

import styles from "./Button.module.scss"

function Button( props  ) {

    const classes = clsx(styles.btn, 'm-b-3', {
        [styles.primary]: props.primary,
        [styles.dark]: props.dark,
        [styles.danger]: props.danger,
    })

    return (
        <div>
            <button className={classes}>
                Click Me!
            </button>
            {/* <button className={`${styles.btn} ${styles.btn}`}>
                Click Me!
            </button> */}
        </div>
    )
}

export default Button