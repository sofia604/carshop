import {DynamoViewer} from "../components/ServiceList";
import { Progress } from "../components/progress";
const Service= ()=> {
    const steps = [
        { id: 'Step 1', name: 'Customer Data', href: '/client', status: 'complete' },
        { id: 'Step 2', name: 'Vehicle data', href: '/vehicle', status: 'complete' },
        { id: 'Step 3', name: 'Service selection', href: '/services', status: 'current' },
        { id: 'Step 4', name: 'Preview', href: '/preview', status: 'upcoming' },
    ]
    return (
        <div className="flex flex-col">
            <div>
                <Progress steps={steps}/>
            </div>
            <div className="mt-15">
                <DynamoViewer></DynamoViewer>
            </div>
        </div>
    )
}

export default Service;