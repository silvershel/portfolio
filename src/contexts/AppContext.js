import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [header, setHeader] = useState([])
    const [skills, setSkills] = useState([])
    const [projects, setProjects] = useState([])
    const [experience, setExperience] = useState([])
    const [education, setEducation] = useState([])

    useEffect(() => {
        fetch('/data/resume.json')
        .then((r) => r.json())
        .then((resume) => {
            setHeader(resume.header);
            setSkills(resume.skills);
            setProjects(resume.projects);
            setExperience(resume.experience);
            setEducation(resume.education);
        })
        .catch((error) => console.error('Error fetching details:', error));
    }, []);

    const arraySet = (array, arraySize) => {
        const result = [];
        for (let i = 0; i < array.length; i += arraySize) {
            result.push(array.slice(i, i + arraySize));
        }
        return result;
    };

    return (
        <AppContext.Provider
            value={{
                header,
                skills,
                projects,
                experience,
                education,
                arraySet,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return React.useContext(AppContext);
};