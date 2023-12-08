import { describe, test, expect } from "vitest";
import AppWithSuspense from "./App";

describe("App", () => {
    test("should render correctly", () => {
        const tree = (
            <AppWithSuspense />
        );
        expect(tree).toMatchSnapshot();

        
         });
});  

