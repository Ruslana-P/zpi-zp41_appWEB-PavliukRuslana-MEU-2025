import InfoIcon from "../../images/info.png";
import { Container } from "./styled";

const ProjectInfoBtn = () => {
  return (
    <Container>
      <a href="./project-info">
        <img src={InfoIcon} alt="project info icon" />
      </a>
    </Container>
  );
};

export default ProjectInfoBtn;
