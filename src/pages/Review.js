import {Ticket} from "../components/Ticket";
import { Progress } from "../components/progress";

const Reviewticket= ()=> {
    const steps = [
        { id: 'Step 1', name: 'Customer Data', href: '/client', status: 'complete' },
        { id: 'Step 2', name: 'Vehicle data', href: '/vehicle', status: 'complete' },
        { id: 'Step 3', name: 'Service selection', href: '/services', status: 'complete' },
        { id: 'Step 4', name: 'Preview', href: '/preview', status: 'current' },
    ]
    return (
        <div className="flex flex-col">
            <div>
                <Progress steps={steps}/>
            </div>
            <div className="mt-20">
                <Ticket></Ticket>
            </div>
        </div>
    )
}

export default Reviewticket;