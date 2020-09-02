import SectionModel from "../SectionModel";
import TechnosGroup from './Technos/GroupModel';

export default interface TechnosSectionModel extends SectionModel {
    groups: TechnosGroup[];
}