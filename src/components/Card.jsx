import './Card.css'

export default function Card({children, status}) {
    let bgColor = ''
    if (status === 'correct') {
        bgColor = 'green'
    }else if (status === 'wrong') {
        bgColor = 'red'
    }else{
        bgColor = 'grey'
    }

    return <div className="card" style = {{backgroundColor: bgColor}}>{children}</div>

}