import { getInfoModulePath } from '../../../../app/app-routing-paths';

export const CIC_DIGITAL_INFO_PATH = 'que-es-cic-digital_es';
export const REPOSITORY_POLICY_PATH = 'politicas-del-repositorio_es';
export const HOW_TO_CONTRIBUTE_PATH = 'como-aportar-material_es';

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
