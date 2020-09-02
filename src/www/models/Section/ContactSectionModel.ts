import SectionModel from '../SectionModel';
import Link from './Common/Link';
import HelpModel from './Contact/HelpModel';

export default interface ContactSectionModel extends SectionModel {
    email: string;
    links: Link[];
    help: HelpModel;
}