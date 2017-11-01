module.exports = function (RED) {

    function LowerCaseNode(config) {

        RED.nodes.createNode(this, config);
        this.prefix = config.prefix;
        this.ip = config.ip;
        var node = this;
        node.on('input', function (msg) {
            msg.payload = node.prefix + node.ip + msg.payload.toLowerCase();
            node.send(msg);
        });
    }

    RED.nodes.registerType("new-samsung-remote", LowerCaseNode);
}
