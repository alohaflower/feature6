import { Link } from "react-router-dom";

const MainList = ({ patterns }) => {
    return (
        <div>
      <hr />
      Items for Sale
      <ul>
        {patterns.map(
          (pattern) =>
            <li key={pattern.id}>
              <div>
                <Link to={pattern.id}>{pattern.humanName} the {pattern.animal}</Link>
                <span> | ${pattern.cost}</span>
                <span> | {pattern.description} </span>
              </div>
              <div>
                <img
                  src={require(`../../Images/${pattern.imgName}.jpeg`)}
                  width="225"
                  height="300"
                />
              </div>
            </li>
        )}
      </ul>
    </div>
    );
};

export default MainList;
