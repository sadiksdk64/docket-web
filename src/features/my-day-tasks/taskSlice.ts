import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SubTask {
    title: string
    startTime: string
    endTime: string
    status: string
}

interface TaskState {
    id:number
    task: string
    description: string
    priority: string
    subTasks: SubTask[]
    category: string | never
    tags: string[]
    time: number
    due_date: string
    remind_me: string
    repeat: string
    status: string
}

interface TaskAddState {
    task : string
    category : string
}

interface TaskAction {
    payload: TaskAddState
}

const generateId = () => 
    Math.floor(Math.random() * 100000);

const initialState = [{
    id: generateId(),
    task: 'test task',
    description: 'test description',
    priority: 'high',
    subTasks: [
        {
            title: 'test sub task',
            startTime: '09:10',
            endTime: '10:10',
            status: 'pending'
            
        },
        {
            title: 'test sub task2',
            startTime: '11:10',
            endTime: '12:15',
            status: 'pending'
            
        }
    ],
    category: 'work',
    tags: ['test', 'test2'],
    time: 0,
    due_date: '2020-01-01',
    remind_me: '',
    repeat: '',
    status: 'pending'
}];


const taskReducer = createSlice({
    name : 'task',
    initialState,
    reducers : {
        addTask : (state, action: TaskAction) => {
            const newTask = {
                id: generateId(),
                task: action.payload.task,
                category: action.payload.category,
                description: '',
                priority: 'medium',
                subTasks: [],
                tags: [],
                time: 0,
                due_date: '',
                remind_me: '',
                repeat: '',
                status: 'pending'
            }
            state.push(newTask)
        },
        removeTask : (state, action: any) => {
            const id = action.payload.id
            const taskToRemove = state.find((task:TaskState) => task.id === id)
            return state.filter((task:TaskState) => task !== taskToRemove)
        },
        updateTask : (state, action: any) => {
            const id = action.payload.id
            const taskToUpdate = state.find((task:TaskState) => task.id === id)
            const updatedTask = {
                ...taskToUpdate,
                ...action.payload
            }
            return state.map((task:TaskState) => task.id === id ? updatedTask : task)
        },
    }
}
)
export const { addTask, removeTask, updateTask } = taskReducer.actions

export default taskReducer.reducer