import axios from "axios";
import {formatDate} from "../utils/utils";


export type TaskType = {
    id: number,
    title: string
    description: string,
    status: boolean,
    color: string,
    date: string
}
type TaskAdd ={
    titleTask:string,
    descriptionTask:string
}
const { v4: uuidv4 } = require('uuid');

export const TasksService ={
    async getAll() {
        return axios.get<TaskType[]>('http://localhost:3004/tasks')
    },
    async postTask(task:TaskAdd) {
        return axios.post<TaskType>('http://localhost:3004/tasks',{
            id: uuidv4(),
            title: task.titleTask,
            description: task.descriptionTask,
            status: false,
            color: ('#'+(Math.random()*0xFFFFFF<<0).toString(16)),
            date: formatDate()
        })
    },
    async deleteTask(id:number) {
        return axios.delete(`http://localhost:3004/tasks/${id}`)
    },
};