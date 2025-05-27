import { Transport } from '@open-rpc/client-js/build/transports/Transport';
import { IJSONRPCData } from '@open-rpc/client-js/build/Request';
declare class IframeExecutionEnvironmentTransport extends Transport {
    private uri?;
    private stream?;
    private commandStream?;
    private frame?;
    private postMessageID;
    constructor();
    createWindow(uri: string, timeout?: number): Promise<Window>;
    connectWithUri(uri: string): Promise<boolean>;
    connect(): Promise<boolean>;
    private errorNotificationHandler;
    private notificationHandler;
    sendData(data: IJSONRPCData, timeout?: number | undefined): Promise<any>;
    close(): void;
    private setupMultiplex;
}
export default IframeExecutionEnvironmentTransport;
