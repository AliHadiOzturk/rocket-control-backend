const enums = require("../../models/enums");

const decode = (data, packet) => {
    var buf = new ArrayBuffer(packet.size);
    // Create a data view of it
    var view = new DataView(buf);

    // set bytes
    data.slice(packet.position, packet.position + packet.size).forEach(function (b, i) {
        view.setUint8(i, b);
    });

    // Read the bits as a float; note that by doing this, we're implicitly
    // converting it from a 32-bit float into JavaScript's native 64-bit double
    let value
    switch (packet.type) {
        case enums.dataTypes.BYTE:
            value = view.getUint8(0);
            break
        case enums.dataTypes.SHORT:
            value = view.getUint16(0, false);
            break
        case enums.dataTypes.FLOAT:
            value = view.getFloat32(0, false);
            break
        case enums.dataTypes.STRING:
            buf = data.slice(packet.position, packet.position + packet.size);
            value = String.fromCharCode.apply(null, new Uint8Array(buf))
        default:
            break
    }
    return value
}


module.exports = decode