import ExperiencesSectionModel from './Section/ExperiencesSectionModel';
import TechnosSectionModel from './Section/TechnosSectionModel';
import AboutSectionModel from './Section/AboutSectionModel';
import ProjectsSectionModel from './Section/ProjectsSectionModel';
import PassionsSectionModel from './Section/PassionsSectionModel';
import ContactSectionModel from './Section/ContactSectionModel';

export default interface DataModel {
    title: string;
    sections: (AboutSectionModel
        | ExperiencesSectionModel
        | TechnosSectionModel
        | ProjectsSectionModel
        | PassionsSectionModel
        | ContactSectionModel)[];
}