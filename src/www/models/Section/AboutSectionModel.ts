import SectionModel from '../SectionModel';
import AboutInfo from './About/Info';

export default interface AboutSectionModel extends SectionModel {
    info: AboutInfo;
}