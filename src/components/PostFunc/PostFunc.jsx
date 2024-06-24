import './PostFunc.css'

export default function PostFunc(props) {

  const {image, title, date}=props

  return (
    <div className='post'>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <small>{date}</small>
    </div>
  )
}
