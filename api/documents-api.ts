/* tslint:disable */
/* eslint-disable */
/**
 * My Data My Consent - Developer API
 * Unleashing the power of data consent by establishing trust. The Platform Core Developer API defines a set of capabilities that can be used to request, issue, manage and update data, documents and credentials by organizations. The API can be used to request, manage and update Decentralised Identifiers, Financial Data, Health Data issue Documents, Credentials directly or using OpenID Connect flows, and verify Messages signed with DIDs and much more.
 *
 * The version of the OpenAPI document: v1
 * Contact: support@mydatamyconsent.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { DocumentIssueRequest } from '../models';
// @ts-ignore
import { DocumentIssueRequestDetails } from '../models';
// @ts-ignore
import { DocumentTypePaginatedList } from '../models';
// @ts-ignore
import { IssuedDocumentDetails } from '../models';
// @ts-ignore
import { IssuedDocumentPaginatedList } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
// @ts-ignore
import { SupportedEntityType } from '../models';
/**
 * DocumentsApi - axios parameter creator
 * @export
 */
export const DocumentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get issued document.
         * @param {string} documentId Document id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getIssuedDocumentById: async (documentId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'documentId' is not null or undefined
            assertParamExists('getIssuedDocumentById', 'documentId', documentId)
            const localVarPath = `/v1/documents/issued/{documentId}`
                .replace(`{${"documentId"}}`, encodeURIComponent(String(documentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get paginated list of issued documents of given document type.
         * @param {string} [documentTypeId] Document type id.
         * @param {string} [fromDateTime] From DateTime in UTC timezone.
         * @param {string} [toDateTime] To DateTime in UTC timezone.
         * @param {number} [pageNo] Page number.
         * @param {number} [pageSize] Number of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getIssuedDocuments: async (documentTypeId?: string, fromDateTime?: string, toDateTime?: string, pageNo?: number, pageSize?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/documents/issued`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (documentTypeId !== undefined) {
                localVarQueryParameter['documentTypeId'] = documentTypeId;
            }

            if (fromDateTime !== undefined) {
                localVarQueryParameter['fromDateTime'] = (fromDateTime as any instanceof Date) ?
                    (fromDateTime as any).toISOString() :
                    fromDateTime;
            }

            if (toDateTime !== undefined) {
                localVarQueryParameter['toDateTime'] = (toDateTime as any instanceof Date) ?
                    (toDateTime as any).toISOString() :
                    toDateTime;
            }

            if (pageNo !== undefined) {
                localVarQueryParameter['pageNo'] = pageNo;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get paginated list of registered document types.
         * @param {SupportedEntityType} [supportedEntityType] Supported entity type.
         * @param {number} [pageNo] Page number.
         * @param {number} [pageSize] Number of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRegisteredDocumentTypes: async (supportedEntityType?: SupportedEntityType, pageNo?: number, pageSize?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/documents/types`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (supportedEntityType !== undefined) {
                localVarQueryParameter['supportedEntityType'] = supportedEntityType;
            }

            if (pageNo !== undefined) {
                localVarQueryParameter['pageNo'] = pageNo;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Issue a new document to an individual user.
         * @param {DocumentIssueRequest} documentIssueRequest Document issue request payload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issueDocumentToIndividual: async (documentIssueRequest: DocumentIssueRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'documentIssueRequest' is not null or undefined
            assertParamExists('issueDocumentToIndividual', 'documentIssueRequest', documentIssueRequest)
            const localVarPath = `/v1/documents/issue/individual`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(documentIssueRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Issue a new document to an organization.
         * @param {DocumentIssueRequest} documentIssueRequest Document issue request payload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issueDocumentToOrganization: async (documentIssueRequest: DocumentIssueRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'documentIssueRequest' is not null or undefined
            assertParamExists('issueDocumentToOrganization', 'documentIssueRequest', documentIssueRequest)
            const localVarPath = `/v1/documents/issue/organization`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(documentIssueRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Upload a document for issuance request of individual.
         * @param {string} issueRequestId Document issue request id.
         * @param {any} formFile 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadDocumentForIndividual: async (issueRequestId: string, formFile: any, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'issueRequestId' is not null or undefined
            assertParamExists('uploadDocumentForIndividual', 'issueRequestId', issueRequestId)
            // verify required parameter 'formFile' is not null or undefined
            assertParamExists('uploadDocumentForIndividual', 'formFile', formFile)
            const localVarPath = `/v1/documents/issue/individual/upload/{issueRequestId}`
                .replace(`{${"issueRequestId"}}`, encodeURIComponent(String(issueRequestId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();


            if (formFile !== undefined) { 
                localVarFormParams.append('formFile', formFile as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Upload a document for issuance request of organization.
         * @param {string} issueRequestId Document issue request id System.Guid.
         * @param {any} formFile 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadDocumentForOrganization: async (issueRequestId: string, formFile: any, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'issueRequestId' is not null or undefined
            assertParamExists('uploadDocumentForOrganization', 'issueRequestId', issueRequestId)
            // verify required parameter 'formFile' is not null or undefined
            assertParamExists('uploadDocumentForOrganization', 'formFile', formFile)
            const localVarPath = `/v1/documents/issue/organization/upload/{issueRequestId}`
                .replace(`{${"issueRequestId"}}`, encodeURIComponent(String(issueRequestId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();


            if (formFile !== undefined) { 
                localVarFormParams.append('formFile', formFile as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DocumentsApi - functional programming interface
 * @export
 */
export const DocumentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DocumentsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get issued document.
         * @param {string} documentId Document id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getIssuedDocumentById(documentId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IssuedDocumentDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIssuedDocumentById(documentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get paginated list of issued documents of given document type.
         * @param {string} [documentTypeId] Document type id.
         * @param {string} [fromDateTime] From DateTime in UTC timezone.
         * @param {string} [toDateTime] To DateTime in UTC timezone.
         * @param {number} [pageNo] Page number.
         * @param {number} [pageSize] Number of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getIssuedDocuments(documentTypeId?: string, fromDateTime?: string, toDateTime?: string, pageNo?: number, pageSize?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IssuedDocumentPaginatedList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIssuedDocuments(documentTypeId, fromDateTime, toDateTime, pageNo, pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get paginated list of registered document types.
         * @param {SupportedEntityType} [supportedEntityType] Supported entity type.
         * @param {number} [pageNo] Page number.
         * @param {number} [pageSize] Number of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRegisteredDocumentTypes(supportedEntityType?: SupportedEntityType, pageNo?: number, pageSize?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentTypePaginatedList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRegisteredDocumentTypes(supportedEntityType, pageNo, pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Issue a new document to an individual user.
         * @param {DocumentIssueRequest} documentIssueRequest Document issue request payload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async issueDocumentToIndividual(documentIssueRequest: DocumentIssueRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentIssueRequestDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.issueDocumentToIndividual(documentIssueRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Issue a new document to an organization.
         * @param {DocumentIssueRequest} documentIssueRequest Document issue request payload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async issueDocumentToOrganization(documentIssueRequest: DocumentIssueRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentIssueRequestDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.issueDocumentToOrganization(documentIssueRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Upload a document for issuance request of individual.
         * @param {string} issueRequestId Document issue request id.
         * @param {any} formFile 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadDocumentForIndividual(issueRequestId: string, formFile: any, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadDocumentForIndividual(issueRequestId, formFile, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Upload a document for issuance request of organization.
         * @param {string} issueRequestId Document issue request id System.Guid.
         * @param {any} formFile 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadDocumentForOrganization(issueRequestId: string, formFile: any, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadDocumentForOrganization(issueRequestId, formFile, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DocumentsApi - factory interface
 * @export
 */
export const DocumentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DocumentsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get issued document.
         * @param {string} documentId Document id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getIssuedDocumentById(documentId: string, options?: any): AxiosPromise<IssuedDocumentDetails> {
            return localVarFp.getIssuedDocumentById(documentId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get paginated list of issued documents of given document type.
         * @param {string} [documentTypeId] Document type id.
         * @param {string} [fromDateTime] From DateTime in UTC timezone.
         * @param {string} [toDateTime] To DateTime in UTC timezone.
         * @param {number} [pageNo] Page number.
         * @param {number} [pageSize] Number of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getIssuedDocuments(documentTypeId?: string, fromDateTime?: string, toDateTime?: string, pageNo?: number, pageSize?: number, options?: any): AxiosPromise<IssuedDocumentPaginatedList> {
            return localVarFp.getIssuedDocuments(documentTypeId, fromDateTime, toDateTime, pageNo, pageSize, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get paginated list of registered document types.
         * @param {SupportedEntityType} [supportedEntityType] Supported entity type.
         * @param {number} [pageNo] Page number.
         * @param {number} [pageSize] Number of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRegisteredDocumentTypes(supportedEntityType?: SupportedEntityType, pageNo?: number, pageSize?: number, options?: any): AxiosPromise<DocumentTypePaginatedList> {
            return localVarFp.getRegisteredDocumentTypes(supportedEntityType, pageNo, pageSize, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Issue a new document to an individual user.
         * @param {DocumentIssueRequest} documentIssueRequest Document issue request payload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issueDocumentToIndividual(documentIssueRequest: DocumentIssueRequest, options?: any): AxiosPromise<DocumentIssueRequestDetails> {
            return localVarFp.issueDocumentToIndividual(documentIssueRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Issue a new document to an organization.
         * @param {DocumentIssueRequest} documentIssueRequest Document issue request payload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        issueDocumentToOrganization(documentIssueRequest: DocumentIssueRequest, options?: any): AxiosPromise<DocumentIssueRequestDetails> {
            return localVarFp.issueDocumentToOrganization(documentIssueRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Upload a document for issuance request of individual.
         * @param {string} issueRequestId Document issue request id.
         * @param {any} formFile 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadDocumentForIndividual(issueRequestId: string, formFile: any, options?: any): AxiosPromise<void> {
            return localVarFp.uploadDocumentForIndividual(issueRequestId, formFile, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Upload a document for issuance request of organization.
         * @param {string} issueRequestId Document issue request id System.Guid.
         * @param {any} formFile 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadDocumentForOrganization(issueRequestId: string, formFile: any, options?: any): AxiosPromise<void> {
            return localVarFp.uploadDocumentForOrganization(issueRequestId, formFile, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DocumentsApi - object-oriented interface
 * @export
 * @class DocumentsApi
 * @extends {BaseAPI}
 */
export class DocumentsApi extends BaseAPI {
    /**
     * 
     * @summary Get issued document.
     * @param {string} documentId Document id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public getIssuedDocumentById(documentId: string, options?: any) {
        return DocumentsApiFp(this.configuration).getIssuedDocumentById(documentId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get paginated list of issued documents of given document type.
     * @param {string} [documentTypeId] Document type id.
     * @param {string} [fromDateTime] From DateTime in UTC timezone.
     * @param {string} [toDateTime] To DateTime in UTC timezone.
     * @param {number} [pageNo] Page number.
     * @param {number} [pageSize] Number of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public getIssuedDocuments(documentTypeId?: string, fromDateTime?: string, toDateTime?: string, pageNo?: number, pageSize?: number, options?: any) {
        return DocumentsApiFp(this.configuration).getIssuedDocuments(documentTypeId, fromDateTime, toDateTime, pageNo, pageSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get paginated list of registered document types.
     * @param {SupportedEntityType} [supportedEntityType] Supported entity type.
     * @param {number} [pageNo] Page number.
     * @param {number} [pageSize] Number of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public getRegisteredDocumentTypes(supportedEntityType?: SupportedEntityType, pageNo?: number, pageSize?: number, options?: any) {
        return DocumentsApiFp(this.configuration).getRegisteredDocumentTypes(supportedEntityType, pageNo, pageSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Issue a new document to an individual user.
     * @param {DocumentIssueRequest} documentIssueRequest Document issue request payload
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public issueDocumentToIndividual(documentIssueRequest: DocumentIssueRequest, options?: any) {
        return DocumentsApiFp(this.configuration).issueDocumentToIndividual(documentIssueRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Issue a new document to an organization.
     * @param {DocumentIssueRequest} documentIssueRequest Document issue request payload
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public issueDocumentToOrganization(documentIssueRequest: DocumentIssueRequest, options?: any) {
        return DocumentsApiFp(this.configuration).issueDocumentToOrganization(documentIssueRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Upload a document for issuance request of individual.
     * @param {string} issueRequestId Document issue request id.
     * @param {any} formFile 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public uploadDocumentForIndividual(issueRequestId: string, formFile: any, options?: any) {
        return DocumentsApiFp(this.configuration).uploadDocumentForIndividual(issueRequestId, formFile, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Upload a document for issuance request of organization.
     * @param {string} issueRequestId Document issue request id System.Guid.
     * @param {any} formFile 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApi
     */
    public uploadDocumentForOrganization(issueRequestId: string, formFile: any, options?: any) {
        return DocumentsApiFp(this.configuration).uploadDocumentForOrganization(issueRequestId, formFile, options).then((request) => request(this.axios, this.basePath));
    }
}
