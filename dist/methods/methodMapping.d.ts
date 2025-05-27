import IframeExecutionEnvironmentTransport from '../transports/IframeExecutionEnvironmentTransport';
export interface MethodMapping {
    [methodName: string]: (...params: any[]) => Promise<unknown>;
}
declare const methodMappingFactory: (transport: IframeExecutionEnvironmentTransport) => MethodMapping;
export default methodMappingFactory;
