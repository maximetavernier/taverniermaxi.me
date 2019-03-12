import InfoHeader from "./HelpInfos/InfoHeader";
import InfoContent from "./HelpInfos/InfoContent";
import InfoFooter from "./HelpInfos/InfoFooter";

export default interface HelpInfos {
    caption: string;
    header: InfoHeader;
    infos: InfoContent[];
    footer: InfoFooter;
}