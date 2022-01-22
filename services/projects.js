import { getList } from 'lib/mdParser';

export const getAllProjects = () => {
  const projects = getList('_data/projects');

  return projects.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
};
