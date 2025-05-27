declare class IframeInspectorTransportPlugin {
    private methodMapping;
    constructor();
    onMessage(event: MessageEvent): Promise<void>;
}
export default IframeInspectorTransportPlugin;
