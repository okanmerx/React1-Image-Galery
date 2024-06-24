
export default function JsxComponent() {

    const bgColor ='pink';
    const title ='ReactJS Classs';
    const numberOfStudent =30;
    const numberOfMentor =8;
    const offlineStudents = true;
    const nums = [1,2,3,4,5]
    const person = {name: 'John Doe', age:37}
    const styles = {background: bgColor, textAlign:"center"}


  return (
    <div style={styles}>
        <h1>{title}</h1>
        <p>There are {numberOfStudent} students and {numberOfMentor} mentors in the class. </p>
        <p>Total participants : {numberOfMentor + numberOfStudent}</p>
        <p>Offline students : {offlineStudents?"Yes":"No"}</p>
        <p>This is an array : {nums}</p>
        <p>The person name : {person.name}</p>
        <p>The person name : {person.age}</p>
    </div>
  )
}
