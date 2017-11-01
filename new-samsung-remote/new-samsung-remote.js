module.exports = function (RED) {

    function LowerCaseNode(config) {

        RED.nodes.createNode(this, config);
        this.prefix = config.prefix;
        this.ip = config.ip;
        var node = this;
        // Retrieve the config node
        this.server = RED.nodes.getNode(config.server);

        if (this.server) {
            // Do something with:
            //  this.server.host
            //  this.server.pos
            node.on('input', function (msg) {
                msg.payload = node.prefix + node.ip + msg.payload.toLowerCase();
                node.send(msg);
            });
        } else {
            // No config node configured
        }

    }

    RED.nodes.registerType("new-samsung-remote", LowerCaseNode);
}


/*
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
*/
