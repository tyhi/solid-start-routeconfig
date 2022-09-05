import server from  "solid-start/server";
import {createResource, Show} from "solid-js";

function hello() {
    return "hi";
}

export default function Home() {
    let [z] = createResource(server(hello));

  return (
    <Show when={z()} keyed={true}>
        {z()}
    </Show>
  );
}
