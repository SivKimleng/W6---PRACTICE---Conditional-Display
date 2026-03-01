//import { JAVA_RESULTS} from "../data";  
import "../index.css";
export default function Scores(props) {

function getScoreStyle(score) {
    if (score < 50) {
      return "warning";
    }
    return "";
  }
function calculateAvg(students) {
    let sum = 0;
    students.forEach((student) => {
      sum += student.score;
    });
    return (sum / students.length).toFixed(0);
  }

function findMin(students) {
    let min = students[0].score;
    students.forEach((student) => {
      if (student.score < min) {
        min = student.score;
      }
    });
    return min;
  }

function findMax(students) {
    let max = students[0].score;
    students.forEach((student) => {
      if (student.score > max) {
        max = student.score;
      }
    });
    return max;
  }

  return (
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

      <div className="statistics">
        <div className="stat-item">
          <span className="stat-label">AVERAGE</span>
          <span className="stat-value">
            {calculateAvg(props.courseResults)}
          </span>
        </div>

        <div className="stat-item">
          <span className="stat-label">MIN</span>
          <span className="stat-value">
            {findMin(props.courseResults)}
          </span>
        </div>

        <div className="stat-item">
          <span className="stat-label">MAX</span>
          <span className="stat-value">
            {findMax(props.courseResults)}
          </span>
        </div>
      </div>

    </div>
  );
}