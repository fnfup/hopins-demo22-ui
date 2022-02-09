

import { ProtectedResourceScopes } from "@azure/msal-angular";

export type ProtectedResourceMap = Map<string, (string | ProtectedResourceScopes)[] | null>;

// export type ProtectedResourceMap = [
//     string, string[] 
// ][];

// export type ProtectedResourceEntry = [
//     string, string[]
// ]

export const authScopeRequests: string[] = [
    'user.read',
    'openid',
    'email',
    'profile',
    "api://446ede82-f415-4e99-aed6-4d0e4ef93579/Full.Access"
]

export type ProtectedResourceEntry = (string | ProtectedResourceScopes)[];

const demoApi = "https://hopkins-demo22-api-sc-hopkins-demo22-api.azuremicroservices.io";
const demoApiScopes: ProtectedResourceEntry = [
    "api://446ede82-f415-4e99-aed6-4d0e4ef93579/Full.Access",
    //"api://446ede82-f415-4e99-aed6-4d0e4ef93579/.default",
    //"Hopkins.Demo22.Read",
    //"Hopkins.Demo22.Order"
];

const localApi = "http://localhost:8080";
const localApiScopes: ProtectedResourceEntry = [
    "api://446ede82-f415-4e99-aed6-4d0e4ef93579/Full.Access",
];


const azureMsGraph = "https://graph.microsoft.com/v1.0/me";
const azureMsGraphScopes: ProtectedResourceEntry = [
    'user.read',
    'openid',
    'email',
    'profile'
];

export const protectedResourceMap: ProtectedResourceMap = new Map([
    [demoApi, demoApiScopes],
    [azureMsGraph, azureMsGraphScopes],
    [localApi, localApiScopes]
]);

