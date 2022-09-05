// this just wraps WebSocket to look like an EventEmitter
// without actually using an EventEmitter polyfill

class BunWebSocket extends globalThis.WebSocket {
  constructor(url, ...args) {
    super(url, ...args);
    this.#wrappedHandlers = new WeakMap();
  }

  #wrappedHandlers = new WeakMap();

  on(event, callback) {
    if (event === "message") {
      const handler = ({ data }) => {
        try {
          callback(data);
        } catch (e) {
          globalThis.reportError(e);
        }
      };

      this.#wrappedHandlers.set(callback, handler);
      this.addEventListener(event, handler);
    } else {
      this.addEventListener(event, callback);
    }
  }

  once(event, callback) {
    if (event === "message") {
      const handler = ({ data }) => {
        try {
          callback(data);
        } catch (e) {
          globalThis.reportError(e);
        }
      };

      this.#wrappedHandlers.set(callback, handler);
      this.addEventListener(event, handler, { once: true });
    } else {
      this.addEventListener(event, callback, { once: true });
    }
  }

  emit(event, data) {
    if (event === "message") {
      this.dispatchEvent(new MessageEvent("message", { data }));
    } else {
      this.dispatchEvent(new CustomEvent(event, { detail: data }));
    }
  }

  off(event, callback) {
    const wrapped = this.#wrappedHandlers.get(callback);
    if (wrapped) {
      this.removeEventListener(event, wrapped);
      this.#wrappedHandlers.delete(callback);
    } else {
      this.removeEventListener(event, callback);
    }
  }
}

BunWebSocket.WebSocket = BunWebSocket;
const WebSocketServer = (BunWebSocket.WebSocketServer = class WebSocketServer {
  constructor() {
    throw new Error("Not implemented yet!");
  }
});

const Sender = (BunWebSocket.Sender = class Sender {
  constructor() {
    throw new Error("Not supported in Bun");
  }
});

const Receiver = (BunWebSocket.Receiver = class Receiver {
  constructor() {
    throw new Error("Not supported in Bun");
  }
});

const createWebSocketStream = (BunWebSocket.createWebSocketStream = function (
  ws
) {
  throw new Error("Not supported in Bun");
});

export default BunWebSocket;

export {
  createWebSocketStream,
  Sender,
  Receiver,
  BunWebSocket as WebSocket,
  WebSocketServer,
};
