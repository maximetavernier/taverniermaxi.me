import SectionModel from "../SectionModel";
import ExperiencesItem from './Experiences/Item';

export default interface ExperiencesSectionModel extends SectionModel {
    studiesTitle: string;
    internshipsTitle: string;
    exps: ExperiencesItem[];
}