import manifest from "@neos-project/neos-ui-extensibility";

import IconSelectEditor from "./IconSelectEditor";

manifest("Medienreaktor.IconSelectEditor:Editor", {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");

    editorsRegistry.set("Medienreaktor.IconSelectEditor/Editor", {
        component: IconSelectEditor,
    });
});
