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
            const newProject = {
                id: Math.random().toString(),
                projectData,
            };

            return {
                ...prevState,
                projects: [prevState.projects, newProject],
            };
        });
    }

    let content;

    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject} />;
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSidebar onStartAddProject={handleStartAddProject} />
            {content}
        </main>
    );
}

export default App;
