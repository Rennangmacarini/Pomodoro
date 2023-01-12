import { useState } from "react";
import { Play } from "phosphor-react";
import { useForm } from 'react-hook-form'
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StarCountdownButton, TaskInput } from "./styles";

export function Home() {
    const { register, handleSubmit, watch } = useForm()

    function handleCreateNewCycle(){
        
    }

   const task = watch('task')
   const isSubmitDisable = !task

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                    <label htmlFor="">Vou Trabalhar em</label>
                    <TaskInput
                     type="task"
                     list="task-suggestions" 
                     placeholder="Dê um nome para seu projeto"
                    {...register('taks')}
                     />

                    <datalist id="task-suggestions">
                     <option value="projeto 1"/>
                     <option value="projeto 2"/>
                     <option value="projeto 3"/>
                     <option value="projeto 4"/>
                    </datalist>

                    <label htmlFor="">Durante</label>
                    <MinutesAmountInput type="number" id="minutesAmout" placeholder="00" step={5} min={5} max={60}
                    {...register('minutesAmount', { valueAsNumber:true })} 
                    />

                    <span>minutos.</span>
                </FormContainer>

                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <StarCountdownButton disabled={isSubmitDisable} type="submit">
                    <Play size={24}/>
                    Começar
                </StarCountdownButton>
            </form>
        </HomeContainer>
    );
}
