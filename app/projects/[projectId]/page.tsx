import ProjectContentComponent from "@/components/Projects/Events";
import { projects } from "@/lib/projects";

interface ProjectContentPageProps {
  params: { projectId: string };
}
const ProjectContentPage = ({ params }: ProjectContentPageProps) => {
  const { projectId } = params;

  const currentProject = projects.find((p) => p.id === projectId);

  if (!currentProject)
    return (
      <div>
        <p>Project Doesn&apos;t Exisi</p>
      </div>
    );

  return <ProjectContentComponent currentProject={currentProject} />;
};

export default ProjectContentPage;
