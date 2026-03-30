export type EnvironmentRequestResponseData = { environment: string, text: string, color?: string };

export enum ENVIRONMENT {
    DEV = 'dev',
    TEST = 'test',
    STAGE = 'stage',
    PROD = 'prod'
}

export const environmentAliases: { [key: string]: Array<string> } = {
    [ENVIRONMENT.DEV]: ['dev', 'development'],
    [ENVIRONMENT.TEST]: ['qa', 'qs', 'test', 'testing'],
    [ENVIRONMENT.STAGE]: ['stage', 'staging'],
    [ENVIRONMENT.PROD]: ['live', 'prod', 'production']
};

const ENVIRONMENT_URL = '/admin/pimcore-system-banner';

export async function fetchEnvironment(): Promise<EnvironmentRequestResponseData> {
    const response = await fetch(ENVIRONMENT_URL);
    if (response.status !== 200) {
        throw new Error('Not 200 response');
    }
    return await response.json();
}

export function getSystemType(environment: string): string {
    let systemType: string = ENVIRONMENT.PROD;
    Object.keys(environmentAliases).forEach((environmentAlias) => {
        if (environmentAliases[environmentAlias].includes(environment)) {
            systemType = environmentAlias;
        }
    });

    return systemType;
}
