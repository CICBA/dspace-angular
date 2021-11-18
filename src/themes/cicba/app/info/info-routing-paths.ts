import { getInfoModulePath } from '../../../../app/app-routing-paths';

export const CIC_DIGITAL_INFO_PATH = 'what-is-cic-digital';
export const REPOSITORY_POLICY_PATH = 'repository-policy';
export const HOW_TO_CONTRIBUTE_PATH = 'how-to-contribute';

export function getCicDigitalInfoPath() {
    return getSubPath(CIC_DIGITAL_INFO_PATH);
}

export function getRepositoryPolicyPath() {
    return getSubPath(REPOSITORY_POLICY_PATH);
}

export function getHowToContributePath() {
    return getSubPath(HOW_TO_CONTRIBUTE_PATH);
}

function getSubPath(path: string) {
    return `${getInfoModulePath()}/${path}`;
}
