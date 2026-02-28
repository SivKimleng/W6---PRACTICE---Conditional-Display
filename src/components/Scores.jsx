//import { JAVA_RESULTS} from "../data";  
import "../index.css";
export default function Scores(props) {

function getScoreStyle(score) {
    if (score < 50) {
      return "warning";
    }
    return "";
  }

  return (
    <>
      <div className="scores">
        <h1>{props.courseName}</h1>

        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Score</th>
            </tr>
          </thead>

          <tbody>
            {props.courseResults.map((student, index) => (
              <tr key={index}>
                <td>{student.firstName.trim()}</td>
                <td>{student.lastName}</td>
                <td className={getScoreStyle(student.score)}>
                  {student.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}