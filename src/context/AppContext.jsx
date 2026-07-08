import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Authentication State
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('skillnest_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Projects State
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('skillnest_projects');
    return saved ? JSON.parse(saved) : [];
  });

  // Hired Freelancers State
  const [hiredFreelancers, setHiredFreelancers] = useState(() => {
    const saved = localStorage.getItem('skillnest_hired');
    return saved ? JSON.parse(saved) : [];
  });

  // Persist State Changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('skillnest_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('skillnest_user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('skillnest_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('skillnest_hired', JSON.stringify(hiredFreelancers));
  }, [hiredFreelancers]);

  // Actions
  const login = (email, name) => {
    setUser({ id: Date.now().toString(), email, name, avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366F1&color=fff` });
  };

  const logout = () => {
    setUser(null);
  };

  const addProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: 'open'
    };
    setProjects(prev => [newProject, ...prev]);
    return newProject;
  };

  const hireFreelancer = (freelancerId, projectDetails = null) => {
    const hireRecord = {
      id: Date.now().toString(),
      freelancerId,
      projectDetails,
      hiredAt: new Date().toISOString()
    };
    setHiredFreelancers(prev => [hireRecord, ...prev]);
    return hireRecord;
  };

  const isHired = (freelancerId) => {
    return hiredFreelancers.some(h => h.freelancerId === freelancerId);
  };

  return (
    <AppContext.Provider value={{
      user,
      login,
      logout,
      projects,
      addProject,
      hiredFreelancers,
      hireFreelancer,
      isHired
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
