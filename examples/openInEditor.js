import { resolve } from "path";
import { parse } from "querystring";

export default {
  fetch(req) {
    if (req.url === "/favicon.ico") {
      return new Response("nooo dont open favicon in editor", { status: 404 });
    }

    let pathname = req.url.substring(1);
    const q = pathname.indexOf("?");
    const { editor } = parse(pathname.substring(q + 1)) || {};

    if (q > 0) {
      pathname = pathname.substring(0, q);
    }

    Bun.openInEditor(resolve(pathname), {
      editor,
    });

    return new Response(`Opened ${req.url}`);
  },
};
