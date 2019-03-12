import ImageModel from '../Common/ImageModel';

export default interface ProjectModel {
    title: string;
    descr: string;
    asset: string;
    technosicon: string[];
    gallery: ImageModel[];
}