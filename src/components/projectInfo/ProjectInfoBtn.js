import InfoIcon from "../../images/info.png";
import { Container } from "./styled";
import { Link } from "react-router-dom";

const ProjectInfoBtn = () => {
  return (
    <Container>
      <Link to="/project-info">
        <img src={InfoIcon} alt="project info icon" />
      </Link>
    </Container>
  );
};

export default ProjectInfoBtn;
