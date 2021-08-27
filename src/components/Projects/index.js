import React, {useState} from 'react'
import { ProjectContainer, ProjHeader, ProjectBtn, ProjectList, ProjectLeft, ProjRight, ProjectLists} from './Projectstyle'
import { item } from './data'

function Projects() {

    const [state, setState] = useState(item);

    const handleBtns = (e) => {
        let word = e.target.value;

        if(word === 'All'){
            setState(item)
        }
        else if(word === 'Design'){
            const filtered = item.filter(data => data.name === 'Design');
            setState(filtered);
        }
        else if(word === 'Branding'){
            const filtered = item.filter(data => data.name === 'Branding');
            setState(filtered);
        }
        else if(word === 'Website'){
            const filtered = item.filter(data => data.name === 'Website');
            setState(filtered);
        }
        else if(word === 'System'){
            const filtered = item.filter(data => data.name === 'System');
            setState(filtered);
        }
    }

    return (
        <>
            <ProjectContainer>
                <ProjHeader data-aos='zoom-in'>
                    <ProjectLeft>
                        <h1>Project</h1>
                    </ProjectLeft>
                        
                    <ProjRight>
                        <h2>Learn how to build a responsive React website using React Hooks and React Router in this beginner tutorial. We are going to build the front end UI using React JS. The main sections of the site are made with reusable components that you can customize and add wherever you want.</h2>
                    </ProjRight>
                </ProjHeader>

                <ProjectBtn data-aos='slide-up'>
                    <button value="All" onClick={handleBtns}>All</button>
                    <button value="Design" onClick={handleBtns}>Web Design</button>
                    <button value="Branding" onClick={handleBtns}>Branding</button>
                    <button value="Website" onClick={handleBtns}>Websites</button>
                    <button value="System" onClick={handleBtns}>Custom System</button>
                </ProjectBtn>

                <ProjectList data-aos='slide-up'>
                    {state.map((data) => (
                        <ProjectLists key={data.id} data-aos='zoom-in'>
                            <div className="SingleTeam">
                                <div className="team-img">
                                    <img src={data.image} alt="project" />

                                    {/* <div className="overlay-text">
                                        <h1>MEDCARE</h1>
                                    </div> */}
                                </div>
                            </div>
                        </ProjectLists>
                    ))}

                </ProjectList>
            </ProjectContainer>
        </>
    )
}

export default Projects