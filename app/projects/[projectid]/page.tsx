
type Params = {
    projectId: string;
}

const ProjectNamePage = ({ params }: { params: Params}) => {
    return (
        <p>This page features {params.projectId}</p>
    )
}

export default ProjectNamePage;