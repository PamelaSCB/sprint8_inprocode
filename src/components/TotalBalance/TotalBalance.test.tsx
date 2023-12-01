import {describe,test,expect} from "vitest";
import TotalBalance from "./TotalBalance";
import {store} from "../../redux/store";
import {Provider} from "react-redux";


describe("TotalBalance", () => {
    test("should render correctly", () => {
        const tree = (
            <Provider store={store}>
                <TotalBalance />
            </Provider>
        );
        expect(tree).toMatchSnapshot();

        
         });
});