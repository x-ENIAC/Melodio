import './NotMainHeader.scss'

export default function NotMainHeader(props: any) {
    return (
        <div className='not-main-header'>
            { props.text }
        </div>
    )
}