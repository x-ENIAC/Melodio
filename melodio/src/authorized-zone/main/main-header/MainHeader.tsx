import './MainHeader.scss'

export default function MainHeader(props: any) {
    return (
        <div className='main-header'>
            Hello, { props.getCurrentUser().login }!
            <br/>
            <br/>
            What are we going to listen to today?
        </div>
    )
}