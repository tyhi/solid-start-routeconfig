import server from  "solid-start/server";
import {createResource, Show} from "solid-js";

function hello() {
    return "hi";
}

export default function Home() {
    // Removing server() will stop the error form showing in the console.
    let [z] = createResource(server(hello));

  return (
    <Show when={z()} keyed={true}>
        {z()}
    </Show>
  );
}
