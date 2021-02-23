export interface IRequest {
  reqId: string;
  url: string;
  headers: { [key: string]: string | undefined };
  body?: string;
  method: string;
  referrer?: string;
  mode?: string;
  credentials?: string;
}

export interface IResponse {
  reqId: string;
  status?: number;
  headers: { [key: string]: string | undefined };
  body?: string;
  method: string;
}

export interface IOptions {
  release?: string;
  console?: {
    isEnabled?:
      | boolean
      | {
          log?: boolean;
          info?: boolean;
          debug?: boolean;
          warn?: boolean;
          error?: boolean;
        };
    shouldAggregateConsoleErrors?: boolean;
  };
  network?: {
    isEnabled?: boolean;
    requestSanitizer?(request: IRequest): null | IRequest;
    responseSanitizer?(response: IResponse): null | IResponse;
  };
  dom?: {
    isEnabled?: boolean;
    baseHref?: string;
    textSanitizer?: string;
    inputSanitizer?: string;
  };

  /**
   * Controls collection of IP addresses and related features, such as GeoIP
   */
  shouldCaptureIP?: boolean;

  /**
   * Enable sharing sessions across subdomains by setting this to the top-level hostname.
   */
  rootHostname?: string;

  /**
   * Convenience option for configuring the SDK for an on-prem install. Include the protocol (eg. https://ingest.example.com)
   */
  ingestServer?: string;

  /**
   * Convenience option for configuring where the full SDK should be loaded from for on-prem installs.
   */
  sdkServer?: string;

  uploadTimeInterval?: number;

  /**
   * a callback which determines whether to send data at a particular moment of time.
   */
  shouldSendData?(): boolean;

  shouldDebugLog?: boolean;

  mergeIframes?: boolean;
}
