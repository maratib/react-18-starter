# React 18, Vite, Shadcn Starter

### Absolute mapping - Alias mapping

```bash
yarn add -D vite-tsconfig-paths
# vite.config.ts
import tsconfigPaths from "vite-tsconfig-paths";
plugins: [react(), tsconfigPaths()],
```

### Vitest Setup (Test output will in TEST RESULTS panel)

```bash
yarn add -D vitest jsdom @testing-library/user-event @testing-library/react @testing-library/jest-dom @testing-library/dom
```

```javascript
// tsconfig.app.json

"compilerOptions": {
    ...
    //For Vitest types
    "types": ["vitest/globals", "@testing-library/jest-dom"],
    //For alias mapping
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
}
```

```javascript
// ./src/vitest.setup.ts

import "@testing-library/jest-dom";

import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
```

```javascript
// vite.config.ts

import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/vitest.setup.ts",
    css: true,
  },
} as UserConfig);

```

```javascript
// ./src/components/Random.tsx

const Random = () => {
  return <div>Random Component</div>;
};
export default Random;
```

```javascript
// ./src/tests/Random.test.tsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Random from "@/components/Random";

describe("Random Component", () => {
  it("renders correctly", () => {
    render(<Random />);
    screen.debug(); // Logs the DOM structure
    const element = screen.getByText("Random Component");
    expect(element).toBeInTheDocument();
  });
});
```
