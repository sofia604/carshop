import {CarForm} from "../components/CarForm";
import { Progress } from "../components/progress";
const Vehicle= ()=> {
    const steps = [
        { id: 'Step 1', name: 'Customer Data', href: '/client', status: 'complete' },
        { id: 'Step 2', name: 'Vehicle data', href: '/vehicle', status: 'current' },
        { id: 'Step 3', name: 'Service selection', href: '/services', status: 'upcoming' },
        { id: 'Step 4', name: 'Preview', href: '/preview', status: 'upcoming' },
    ]
      
    return (
        <div className="flex flex-col">
            <div>
                <Progress steps={steps}/>
            </div>
            <div className="mt-20">
                <CarForm></CarForm>
            </div>
        </div>
    )
}

export default Vehicle;