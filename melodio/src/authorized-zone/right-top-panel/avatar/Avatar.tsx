import './Avatar.scss'

export default function Avatar(props: any) {
    const currentUser = props.getCurrentUser();
    let firstLetterOfName = "!";

    if (currentUser) {
        firstLetterOfName = currentUser.login[0].toLocaleUpperCase();
    }

    return (
        <div className='avatar-circle'>
            <div className="avatar-text">{firstLetterOfName}</div>
        </div>
    )
}