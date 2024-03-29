import {TaskCounterStatusType} from "../interfaces/ITaskCounter";
import {Status} from "../../creatTaskForm/enums/Status";


export const emitCorrectLabel = (status:TaskCounterStatusType):string => {
    switch (status) {
        case Status.todo:
            return `Todos`
        case Status.inProgress:
            return `In progress`
        case Status.completed:
            return `Complete`
    }
}
