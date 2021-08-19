import studentsArr from '../data/students.json'
import Student from './Student';
import AddStudent from './AddStudent';

function Main(props) {
    return (
        <>
            <AddStudent />
            <div className="student-list">
                <h2>List of Students</h2>
                {studentsArr.map(studentObj => {
                    return <Student {...studentObj} />;
                })}
            </div>
        </>
    );
}

export default Main;