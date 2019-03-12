import SectionModel from '../SectionModel';
import ProjectModel from './Projects/ProjectModel';

export default interface ProjectsSectionModel extends SectionModel {
    tooltip: string;
    projects: ProjectModel[];
}