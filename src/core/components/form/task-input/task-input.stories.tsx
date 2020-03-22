import React, { useState } from 'react'
import { TaskInput } from './task-input';

export default {
  title: 'TaskInput',
  component: TaskInput
}
 
const [inputValue, setInputValue] = useState<string>("");

export const base = () => (<TaskInput value={inputValue}>onChange={setInputValue}</TaskInput>)