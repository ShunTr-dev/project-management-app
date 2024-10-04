import { useState } from 'react';
import NewProject from './assets/components/NewProject';
import NoProjectSelected from './assets/components/NoProjectSelected';
import ProjectsSidebar from './assets/components/ProjectsSidebar';

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
    });

    function handleStartAddProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    }

    function handleAddProject(projectData) {
        setProjectsState((prevState) => {
            const projectId = Math.random().toString();
            const newProject = {
                ...projectData,
                id: projectId,
            };

            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject],
            };
        });
    }

    let content;

    console.log(projectsState);

    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject} />;
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} />
            {content}
        </main>
    );
}

export default App;
