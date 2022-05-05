
import { render } from "@testing-library/react";
import FormDialog from "../components/Dialog";

describe('Test login page', ()=>{
    it('snapsot test', ()=>{
        const component = render(<FormDialog open={true} message={'Hello'}/>);

        expect(component).toMatchSnapshot();
    })
})