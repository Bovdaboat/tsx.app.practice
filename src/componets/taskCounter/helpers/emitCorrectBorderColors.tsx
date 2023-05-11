import {TaskCounterStatusType} from "../interfaces/ITaskCounter";
import {Status} from "../../creatTaskForm/enums/Status";

export const emitCorrectBorderColors = (status: TaskCounterStatusType):string  => {
 switch (status) {
     case Status.todo:
         return 'error.light'
     case Status.inProgress:
         return 'warning.light'
     case Status.completed:
         return 'success.light'
 }
}