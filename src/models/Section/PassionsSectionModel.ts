import SectionModel from '../SectionModel';
import PassionModel from './Passions/PassionModel';

export default interface PassionsSectionModel extends SectionModel {
    passions: PassionModel[];
}